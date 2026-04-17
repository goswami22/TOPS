# 5) Write a Python program to read a file and print the data on the console.

file = open("data.txt", "r")
content = file.read()
print(content)
file.close()
