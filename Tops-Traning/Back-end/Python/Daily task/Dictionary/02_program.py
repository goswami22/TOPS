student = {
'name': 'Bhavesh',
'age': 30,
'course': 'Python'
}




print(student.get('name'))
print(student.get('value'))
print(student.keys())
print(student.values())
print(student.items())

student.update({'age': 25})
student.update({'city': 'Ahmedabad'})

print(student)
