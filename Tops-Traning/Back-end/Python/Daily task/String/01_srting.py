s = ("Tops technlogy")
name="Bhavesh  Goswami"
s1 = ['Bhavesh', 'Goswami']

print(s.capitalize())
print(s.casefold())
print(s.count('o'))
print(s.center(40, '='))
print(s.startswith('To'))

print(s.endswith('gy'))
print(s.find('chn'))
print(s.index('t',1))
print("top123".isalnum())
print("123".isalnum())
print('a1213'.isnumeric())
print(' '.isspace())
print("hello".replace('e','b'))

print("My name is {}".format(name));
print(f"My name is {name}");

print("Tops" in s);

print(s.find('K'));
print(" ".join(s))
print(" ".join(s1));
print(name.split());
