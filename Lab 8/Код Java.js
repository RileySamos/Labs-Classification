function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Z\u0400-\u04FF\s]{2,15}$/;
    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Подходит.";
        return true;
    } else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Нужно ввести 2-15 символов.";
        return false;
    }
}
function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[a-zA-Z\u0400-\u04FF\s]{2,15}$/;
    if (regex.test(last)) {
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Подходит.";
        return true;
    } else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Нужно ввести 2-15 символов.";
        return false;
    }
}
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\+?[0-9]{4,20}$/;
    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Похоже на правду";
        return true;
    } else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Такого номера не может быть.";
        return false;
    }
}
function outputData() {
    if ((checkFirst() && checkLast() && checkPhone()) === true) {
        var first = document.getElementById("first").value;
        var last = document.getElementById("last").value;
        var phone = document.getElementById("phone").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        var dateAndTime = date + " at " + time;

        if (first !== "" && last !== "" && phone !== "" && date !== "" && time !== "") {
            document.getElementById("summary").style.color = "white";
            document.getElementById("summary").innerHTML = "Добрый день, " + first + " " + last + "!";
            document.getElementById("summary").innerHTML += "<p>Ваш заказ прибыл к нам. Мы обязательно свяжемся с вами, как только сможем. Все детали вашего заказа видны внизу: </p>";
            document.getElementById("summary").innerHTML += "<p>Номер телефона: " + phone + ".</br>";
            document.getElementById("summary").innerHTML += "Удобная дата и время: " + dateAndTime + ".</p>";
            document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Мы рады, если вы будете довольны намим сервисом. ^_^ </p>";
        }
        const text = document.getElementById("hidden");
        text.style.display = "block";
    } else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Прошу вас, позовите побольше друзей.";
        const text = document.getElementById("hidden");
        text.style.display = "block";
    }
}