var i = 60;

function timedCount() {
    i = i - 1;
    if (i < 0) i = 0;
    postMessage(i);
    setTimeout("timedCount()", 1000);
}

timedCount();