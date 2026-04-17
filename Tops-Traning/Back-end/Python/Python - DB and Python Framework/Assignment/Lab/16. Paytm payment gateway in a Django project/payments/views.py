from django.shortcuts import render, redirect
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Transaction
import paytmchecksum
import requests
import uuid

def home(request):
    return render(request, 'payments/index.html')

def initiate_payment(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        email = request.POST.get('email')
        order_id = str(uuid.uuid4())

        # Save order to DB
        transaction = Transaction.objects.create(
            order_id=order_id,
            amount=amount,
            user_email=email,
            status='PENDING'
        )

        # Prepare parameters for Paytm request
        paytm_params = {
            "MID": settings.PAYTM_MERCHANT_ID,
            "WEBSITE": settings.PAYTM_WEBSITE,
            "INDUSTRY_TYPE_ID": settings.PAYTM_INDUSTRY_TYPE_ID,
            "CHANNEL_ID": settings.PAYTM_CHANNEL_ID,
            "ORDER_ID": order_id,
            "CUST_ID": email,
            "MOBILE_NO": "9999999999",
            "EMAIL": email,
            "TXN_AMOUNT": str(amount),
            "CALLBACK_URL": settings.PAYTM_CALLBACK_URL,
        }

        # Generate Checksum
        checksum = paytmchecksum.generateSignature(paytm_params, settings.PAYTM_MERCHANT_KEY)
        paytm_params["CHECKSUMHASH"] = checksum

        return render(request, 'payments/paytm_redirect.html', {
            'params': paytm_params,
            'paytm_url': settings.PAYTM_TRANSACTION_URL
        })

    return redirect('home')

@csrf_exempt
def callback(request):
    if request.method == 'POST':
        paytm_data = request.POST.dict()
        checksum = paytm_data.get('CHECKSUMHASH', '')

        # Verify checksum
        is_valid = paytmchecksum.verifySignature(paytm_data, settings.PAYTM_MERCHANT_KEY, checksum)

        if is_valid:
            order_id = paytm_data.get('ORDER_ID')
            status = paytm_data.get('STATUS')
            resp_msg = paytm_data.get('RESPMSG')
            txn_id = paytm_data.get('TXNID')
            bank_txn_id = paytm_data.get('BANKTXNID')

            # Update Transaction
            try:
                transaction = Transaction.objects.get(order_id=order_id)
                transaction.status = 'SUCCESS' if status == 'TXN_SUCCESS' else 'FAILURE'
                transaction.transaction_id = txn_id
                transaction.bank_transaction_id = bank_txn_id
                transaction.save()

                return render(request, 'payments/payment_status.html', {
                    'transaction': transaction,
                    'msg': resp_msg
                })
            except Transaction.DoesNotExist:
                return HttpResponse("Transaction not found", status=404)
        else:
            return HttpResponse("Checksum verification failed!", status=400)

    return redirect('home')
