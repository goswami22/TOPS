def get_discounted_price(price, discount_percent):
    discount = price * discount_percent / 100
    final_price = price - discount
    return final_price


price = 500
discount = 10

result = get_discounted_price(price, discount)

print("Final price:", result)


