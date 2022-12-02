function renderTime() {
    var currentTime = new Date();
    var diem = "AM";
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    setTimeout('renderTime()', 1000);
    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12;
        diem = "PM";
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    var myClock = document.getElementById('clockDisplay');
    myClock.textContent = h + ":" + m + ":" + s + " " + diem;
    myClock.innerText = h + ":" + m + ":" + s + " " + diem;
}
renderTime();