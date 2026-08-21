row = 1

while row <= 4:
    spaces = 4 - row
    stars = 2 * row - 1

    while spaces > 0:
        print(" ", end="")
        spaces = spaces - 1

    while stars > 0:
        print("*", end="")
        stars = stars - 1

    print()
    row = row + 1