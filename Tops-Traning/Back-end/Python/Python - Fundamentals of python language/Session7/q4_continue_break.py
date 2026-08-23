messages = ["Hi", "Spam", "Hello", "Spam", "How are you?"]

for message in messages:

    if message == "How are you?":
        break

    if message == "Spam":
        continue

    print(message)