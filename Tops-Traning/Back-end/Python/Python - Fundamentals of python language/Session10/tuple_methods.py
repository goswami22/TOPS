fav_apps = ("Instagram", "Zomato", "Spotify", "WhatsApp", "Flipkart")

# 1. Print tuple
print("My favorite apps:", fav_apps)

# 2. Print 2nd and 4th app
print("2nd app:", fav_apps[1])
print("4th app:", fav_apps[3])

# 3. Tuple cannot be changed
# fav_apps[0] = "YouTube"
# Error: TypeError
# Tuple is immutable, so its elements cannot be changed.

# 4. Middle three apps
print("Middle three apps:", fav_apps[1:4])

# 5. Concatenate tuples
new_apps = ("YouTube", "Netflix")

all_apps = fav_apps + new_apps

print("All apps:", all_apps)