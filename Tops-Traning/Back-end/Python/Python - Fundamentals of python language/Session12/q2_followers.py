def format_follower_count(number):

    if number >= 1000000:
        return str(round(number / 1000000, 1)) + "M"

    elif number >= 1000:
        return str(round(number / 1000, 1)) + "K"

    else:
        return str(number)


print(format_follower_count(1500))
print(format_follower_count(1200000))
print(format_follower_count(500))