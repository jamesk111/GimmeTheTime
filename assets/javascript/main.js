// Initialize
let month = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
];
let day = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

//This function sets the ordinal for a passed in numeric date
function ordinalDate(n) {

    // Initialize
    let ordinal;

    // Determine the appropriate ordinal
    if (n == 1 || n == 21 || n == 31) {
        ordinal = 'st';
    } else if (n == 2 || n == 22) {
        ordinal = 'nd';
    } else if (n == 3 || n == 23) {
        ordnal = 'rd';
    } else {
        ordinal = 'th';
    }

    return n + ordinal;
}

//This function updates the date and time HTML variables
function updateDateTime() {

    //Initialize
    let today = new Date();
    let timeSuffix = (today.getHours() < 12) ? 'AM' : 'PM';

    // Set the data
    document.getElementById('date').innerHTML = day[today.getDay()] + ', ' + month[today.getMonth()] + ordinalDate(today.getDate()) + ', ' + today.getFullYear();
    document.getElementById('time').innerHTML = (((today.getHours() + 11) % 12) + 1) + ':' + today.getMinutes() + ':' + today.getSeconds() + ' ' + timeSuffix;
}

//Set the function interval to update the time every second
window.onload = setInterval(function () { updateDateTime(); }, 1000);