def reverse_message(message):
    result = ""

    for char in message:
        result = char + result

    return result


message = input("Enter a message: ")

print("Reversed message:", reverse_message(message))