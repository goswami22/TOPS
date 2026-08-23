
# task 1
my_playlist = {
    "Kesariya": 4.5,
    "Tum Hi Ho": 4.2,
    "Apna Bana Le": 4.1
}

print(my_playlist)

#task 2
my_playlist["Heeriye"] = 3.2

my_playlist["Kesariya"] = 4.8

print(my_playlist)

#task 3
def display_friends(friends):

    for username, followers in friends.items():
        print(username + ":", followers, "followers")


friends = {
    "rahul": "2.3K",
    "priya": "5.1K",
    "amit": "1.8K"
}

display_friends(friends)

#Task 4
food_order = {
    "Pizza": 2,
    "Burger": 1,
    "Fries": 3
}

# a) Food items
print("Food items:")
print(food_order.keys())

# b) Quantities
print("Quantities:")
print(food_order.values())

# c) Food and quantity
print("Food with quantity:")

for item, quantity in food_order.items():
    print(item, ":", quantity)
    
#Task 5
def update_cart(cart, item, qty):

    cart[item] = qty

    return cart


cart = {
    "Mobile": 1,
    "Laptop": 1
}

cart = update_cart(cart, "Mobile", 2)

print(cart)