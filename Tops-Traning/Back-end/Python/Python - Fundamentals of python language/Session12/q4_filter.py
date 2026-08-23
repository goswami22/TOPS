products = ["Mobile", "Mouse", "Laptop", "Monitor", "Keyboard"]

result = list(filter(lambda product: product.startswith("M"), products))

print(result)