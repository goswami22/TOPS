# Write a Python program to check the current position of the file cursor using tell()

file = open("data.txt", "w+")
file.write("Python File Handling")
print(file.tell())
file.close()
