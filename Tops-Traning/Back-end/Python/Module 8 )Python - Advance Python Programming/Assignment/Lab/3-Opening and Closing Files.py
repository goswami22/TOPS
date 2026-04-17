#   Write a Python program to open a file in write mode, write some text, and then close it.

file = open('text.txt', 'w')
file.write('Demo text')
file.close()

print('Data write successfully')


