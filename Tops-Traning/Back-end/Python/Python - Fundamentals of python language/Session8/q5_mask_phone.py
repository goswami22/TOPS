def mask_phone_number(phone):
    return "******" + phone[-4:]


phone = input("Enter your 10-digit phone number: ")

print("Masked number:", mask_phone_number(phone))