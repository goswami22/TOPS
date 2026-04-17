#   Write a Python program to read the contents of a file and print them on the console.    

# Open the file in read mode
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
