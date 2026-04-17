
# ReadEase Library


rentals = []
late_fees_per_day = 10

# Date function
def date_of_day(date):
    year, month, day = map(int, date.split('/'))
    return year * 365 + month * 30+ day

# Rent Book function
def rent_book():
    print('New book retail'.center(50,'='))
    customer =input('Customer Name: ')
    book = input('Book Name: ')
    rent_date = input('Enter Rent Date(yyyy/mm/dd): ')
    return_date = input('Expected Return Date(yyyy/mm/dd): ')

    if date_of_day(return_date) < date_of_day(rent_date):
        print('Return Date cannot be before rent date!')
        return 
    
    rental ={
        'customer': customer,
        'book': book,
        'rent_date': rent_date,
        'return_date': return_date,
        'returned': False
    }

    rentals.append(rental)
    print('Book Rent Successfully')


# Return Book
def return_book():
    print('Return Book'.center(50,'='))
    book = input('Enter Book Title: ')

    for rental in rentals:
        if rental['book'].lower() == book.lower() and not rental['returned']:
            actual_return = input('Actual Return Date(year/month/day): ')

            due_day = date_of_day(rental['return_date'])
            actual_day = date_of_day(actual_return)

            late_days = max(0, actual_day - due_day)
            late_fees = late_days * late_fees_per_day

            rental['returned']=True

            print('Return Receipt'.center(50,'='))
            print(f"Custome Name: {rental['customer']}")
            print(f"Book Title: {rental['book']}")
            print(f"Expected Date: {rental['return_date']}")
            print(f"Return Date: {actual_return}")
            print(f"Late Day: {late_days}")
            print(f"Late Fees: Rs.{late_fees}")

            return
    print('No active retail found for this book')


#Retail Summary
def rental_summary():
    print('Retail Summery'.center(50,'='))
    if not rentals:
        print('No return found')
        return

    for r in rentals:
        status = 'Returned' if r['returned'] else 'Pending'
        print(f"{r['customer']} | {r['book']} | {status}")


def menu():
    while True:
        print('RentTrack Menu'.center(50,'='))
        print('1. Rent Book')
        print('2. Return Book')
        print('3. View Rental Summery')
        print('4. Exit')

        choice = int(input('Choice Number: '))

        if choice == 1:
            rent_book()
        elif choice == 2:
            return_book()
        elif choice == 3:
            rental_summary()
        elif choice == 4:
            print('Exit Renttrack. Tahnk you for visiting')
            break
        else:
            print('Invalid Number')

menu()










    





