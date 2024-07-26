const form = document.getElementById('reservation-form');
const resultDiv = document.getElementById('reservation-result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const flightNumber = document.getElementById('flight-number').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const classType = document.getElementById('class').value;

    const reservationResult = `Reservation successful! Your flight details are:
    Name: ${name}
    Flight Number: ${flightNumber}
    Departure Date: ${departureDate}
    Return Date: ${returnDate}
    Class: ${classType}`;

    resultDiv.innerText = reservationResult;
});