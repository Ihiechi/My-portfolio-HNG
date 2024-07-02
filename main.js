const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// To get the day of the week
const today = new Date();

let day = weekday[today.getUTCDay()];
document.getElementById('days').textContent = day;

// To get time of the day
function updateTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    // Add leading zeros to single digit minutes and seconds
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    document.getElementById('hours').textContent = hour + ' : ';
    document.getElementById('minutes').textContent = minute + ' : ';
    document.getElementById('seconds').textContent = second;
}

// Initial call to display the day and time immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

// Optionally, you can update the day every midnight
setInterval(updateDay, 24 * 60 * 60 * 1000);




