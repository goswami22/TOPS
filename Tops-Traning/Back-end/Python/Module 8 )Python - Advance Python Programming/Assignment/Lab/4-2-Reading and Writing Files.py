# Write a Python program to write multiple strings into a file.

file = open("data.txt", "w")

file.write("Hello\n")
file.write("Welcome to Python\n")
file.write("File Writing Example\n")

file.close()
