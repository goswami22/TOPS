user_bio = "Music lover | Foodie | Traveller"

count = 0

for char in user_bio:
    if char != " ":
        count = count + 1

print("Characters without spaces:", count)