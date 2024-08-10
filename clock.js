$(function() {
    setInterval(function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var session = "AM";
        
        if (hours >= 12) {
            session = "PM";
        }
        if (hours > 12) {
            hours -= 12;
        }
        if (hours === 0) {
            hours = 12; // Midnight case
        }

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $('#hours').text(hours);
        $('#minute').text(minutes);
        $('#second').text(seconds);
        $('#period').text(session);
    }, 1000);
});
