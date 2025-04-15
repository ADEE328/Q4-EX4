function verifyMonth() {
    const input = document.getElementById('monthInput').value;
    const monthName = document.getElementById('monthName');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const number = parseInt(input);

    if (number >= 1 && number <= 12) {
        monthName.textContent = months[number - 1];
    } else {
        monthName.textContent = 'Invalid Entry. Try Again';
    }
}

function refreshPage() {
    document.getElementById('monthInput').value = '';
    document.getElementById('monthName').textContent = '';
}
