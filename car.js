// script.js
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const car = document.getElementById('car').value;
    alert(`Thank you ${name}! Your booking for ${car} has been confirmed.`);
});

function bookCar(carModel) {
    document.getElementById('car').value = carModel;
}
