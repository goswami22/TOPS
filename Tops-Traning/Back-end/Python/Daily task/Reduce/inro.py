'''
1. reduce() is used to reduce a sequence to a single value
2. It is available in the functools module
    - from functools import reduce
3. It takes two arguments at a time from the sequence
    - reduce(function, iterable)
4. The function must accept two parameters
    - lambda x, y: x + y
5. reduce() returns a single final result, not a list
6.  Common use cases:
    - Sum of numbers
    - Product of numbers
    - Finding maximum / minimum
7.  If the list has one element, that element is returned
8.  If the list is empty, reduce causes an error (without initial value)
9.  It applies the function cumulatively
    - ((1 op 2) op 3) op 4

🧠 One-Line Definition (Exam)

reduce() applies a function cumulatively to the items of an iterable and returns a single value.



'''
