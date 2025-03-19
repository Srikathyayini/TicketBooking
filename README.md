# Ticket Booking System

## Overview
This simple web-based movie ticket booking system allows users to select the number of tickets they want to book and calculate the total price, including a discount for bulk purchases.

## Features
- Users can book up to 5 tickets at a time.
- Ticket pricing:
  - 1-2 tickets: Rs. 150 per ticket
  - 3-5 tickets: Rs. 120 per ticket
- 10% discount on the total price.
- Displays total cost, discount applied, and final price.
- Alerts the user upon successful booking.
- Prevents booking more than 5 tickets.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the web page.
- **JavaScript**: This is for handling ticket booking logic and calculations.

## Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/Srikathyayini/TicketBooking.git
   ```
2. Navigate to the project directory:
   ```sh
   cd TicketBooking
   ```
3. Open `bookmovieticket.html` in a web browser.

## File Structure
```
TicketBooking/
│── bookmovieticket.html       # Main HTML file
│── script2.js       # JavaScript logic for booking tickets
│── README.md        # Project documentation
```

## Usage
1. Open `bookmovieticket.html` in a browser.
2. Enter the number of tickets you want to book (1-5).
3. Click the "Book Tickets" button.
4. View the total price, discount, and final amount.
5. A confirmation alert will be displayed upon successful booking.

## Example Output
```
You have booked 3 tickets.
Total price: Rs. 360
Discount amount: Rs. 36
Discounted price: Rs. 324
```

## Enhancements
Future improvements may include:
- Selecting different movie options.
- Choosing seat preferences.
- Integrating a payment gateway.
- Adding a user authentication system.

## License
This project is licensed under the MIT License.

## Contributing
Feel free to submit pull requests or issues for improvements.



