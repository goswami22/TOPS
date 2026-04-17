from django.db import models

class Transaction(models.Model):
    order_id = models.CharField(max_length=100, unique=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    user_email = models.EmailField()
    status = models.CharField(max_length=20, default='PENDING') # PENDING, SUCCESS, FAILURE
    checksum = models.CharField(max_length=255, null=True, blank=True)
    transaction_id = models.CharField(max_length=100, null=True, blank=True)
    bank_transaction_id = models.CharField(max_length=100, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order {self.order_id} - {self.status}"
