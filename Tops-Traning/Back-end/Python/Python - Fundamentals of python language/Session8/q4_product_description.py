description = input("Enter product description: ")

words = description.split()

print("First word:", words[0])
print("Last word:", words[-1])
print("Total words:", len(words))