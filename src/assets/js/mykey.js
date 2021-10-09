var myDate = new Date();
var currentHour = myDate.getHours();

var msg;

if (currentHour < 12)
    msg = '🌅 Good Morning';
else if(currentHour == 12)
msg = 'Good Noon';
else if (currentHour >= 12 && currentHour <= 17)
    msg = ' 🌞 Good Afternoon';
else if (currentHour >= 17 && currentHour <= 24)
    msg = '🌇 Good Evening';

document.getElementById('greeting').innerHTML =
    '<b>' + msg + '</b>';