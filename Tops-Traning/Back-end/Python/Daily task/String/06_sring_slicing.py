'''
    string slicing
    syntex: string[start : end : step]

    start → starting index (included)

    end → ending index (excluded)

    step → jump (optional) - when -3 then revese count
    
    
    
'''

s = "Tops Technologies"


print(s[ 3: 10])  

print(s[:14])

print(s[2:])

print(s[3 : 15 : 3])

print(s[ : : 5])

print("Nagative".center(40, "="))

print(s[-16 : -3])

print(s[ : -5])

print(s[-15 : ])

print(s[-16: -2: 4])

print(s[ : : -3])
