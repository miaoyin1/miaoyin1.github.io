function calculate(n){
    var f = document.frm;
    var value1 = document.getElementById("a").innerHTML;
    var value2 = document.getElementById("b").innerHTML;
    var value3 = document.getElementById("c").innerHTML;
    var value4 = document.getElementById("d").innerHTML;
    var audio1 = new Audio("a.mp3");
    var audio2 = new Audio("b.mp3");
    var audio3 = new Audio("c.mp3");
    var audio4 = new Audio("d.mp3");

    if (n == 1) {
        f.btn1.disabled = true;
        f.btn2.disabled = false;
        f.btn3.disabled = true;
        f.btn4.disabled = true;
        audio1.play();
        ++value1;
        document.getElementById("a").innerHTML = value1;
    }
    if (n == 2) {
        f.btn1.disabled = true;
        f.btn2.disabled = true;
        f.btn3.disabled = false;
        f.btn4.disabled = true;
        audio2.play();
        ++value2;
        document.getElementById("b").innerHTML = value2;
    }
    if (n == 3) {
        f.btn1.disabled = true;
        f.btn3.disabled = true;
        f.btn3.disabled = true;
        f.btn4.disabled = false;
        audio3.play();
        ++value3;
        document.getElementById("c").innerHTML = value3
    }
    if (n == 4) {
        f.btn1.disabled = false;
        f.btn3.disabled = true;
        f.btn3.disabled = true;
        f.btn4.disabled = true;
        audio4.play();
        ++value4;
        document.getElementById("d").innerHTML = value4;
    }
    
    if (value1 == 1 && value2 == 1 && value3 == 1 && value4 == 1) {
        document.getElementById("link").style.visibility = 'visible';
    }
}

const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
    document.getElementById("next").style.visibility = 'visible';
}