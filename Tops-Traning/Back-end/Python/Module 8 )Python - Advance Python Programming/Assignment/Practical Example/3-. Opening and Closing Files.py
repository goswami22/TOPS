#   3) Write a Python program to create a file and write a string into it.

file = open('text.txt', 'w')
file.write('Demo text')
file.close()

print('Data write successfully')
