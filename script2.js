// script.js

const form = document.getElementById('booking-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numTickets = document.getElementById('num-tickets').value;
    bookMovieTickets(numTickets);
    if(numTickets>0 && numTickets<=5){
        alert("Successfully booked " +numTickets+ " tickets");
    }
});

function bookMovieTickets(numTickets) {
    let pricePerTicket = 0;
    if (numTickets <= 2) {
        pricePerTicket = 150; 
    } else if (numTickets >= 3 && numTickets <= 5) {
        pricePerTicket = 120; 
    } else {
        alert("Booking not allowed for more than 5 tickets.");
        return; 
    }
    let totalPrice = numTickets * pricePerTicket;
    const discountPercentage = 0.10;
    let discountAmount = totalPrice * discountPercentage;
    let discountedPrice = totalPrice - discountAmount;
    resultDiv.innerHTML = `
        <p>You have booked ${numTickets} tickets.</p>
        <p>Total price: Rs. ${totalPrice}</p>
        <p>Discount amount: Rs. ${discountAmount}</p>
        <p>Discounted price: Rs. ${discountedPrice}</p>
    `;
}