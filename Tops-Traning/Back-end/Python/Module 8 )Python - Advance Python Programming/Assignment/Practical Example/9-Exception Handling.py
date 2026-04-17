#   9) Write a Python program to handle file exceptions and use the finally block for closing the file. 1


try:
    file = open("data.txt", "r")
    content = file.read()
    print(content)

except FileNotFoundError:
    print("Error: File does not exist.")

except Exception as e:
    print("Unexpected error:", e)

finally:
    try:
        file.close()
        print("File closed successfully.")
    except:
        pass
