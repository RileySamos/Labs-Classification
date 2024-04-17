function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[а-яА-Я\s]{2,15}$/;

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
    var regex = /^[а-яА-Я\s]{2,15}$/;

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

function checkDest() {
    var dest = document.getElementById("dest").value;
    var regex = /^[а-яА-Я\s.,\d ]{6,60}$/;

    if (regex.test(dest)) {
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Подходит.";
        return true;
    } else {
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Нужно ввести 6-60 символов.";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{1}-(\d{1})-\d{1}$/;

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

function checkQuantity() {
    var quantityString = document.getElementById("quantity").value;
    var quantity = parseFloat(quantityString);

    if (!isNaN(quantity) && quantity > 0) {
        document.getElementById("quantity_Check").style.color = "green";
        document.getElementById("quantity_Check").innerHTML = "Спасибо вам.";
        return true;
    } else {
        document.getElementById("quantity_Check").style.color = "red";
        document.getElementById("quantity_Check").innerHTML = "Напишите хотя бы 1, не будьте жмотом.";
        return false;
    }
}

function outputData() {

    if ((checkFirst() && checkLast() && checkDest() && checkPhone() && checkQuantity()) === true) {
        var first = document.getElementById("first").value;
        var last = document.getElementById("last").value;
        var dest = document.getElementById("dest").value;
        var phone = document.getElementById("phone").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        var dateAndTime = date + " at " + time;
        var quantity = document.getElementById("quantity").value;
        var paymethod = document.getElementById("paymethod").value;

        if (first !== "" && last !== "" && dest !== "" && phone !== "" && date !== "" && time !== "" && quantity !== "") {
            document.getElementById("summary").style.color = "black";
            document.getElementById("summary").innerHTML = "Добрый день, " + first + " " + last + "!";
            document.getElementById("summary").innerHTML += "<p>Ваш заказ прибыл к нам. Мы обязательно свяжемся с вами, как только сможем. Все детали вашего заказа видны внизу: </p>";
            document.getElementById("summary").innerHTML += "<p>Номер телефона: " + phone + ".</br>";
            document.getElementById("summary").innerHTML += "Где хотели бы работать: " + dest + ".</br>";
            document.getElementById("summary").innerHTML += "Удобное время и место встречи: " + dateAndTime + ".</br>";
            document.getElementById("summary").innerHTML += "Количество людей: " + quantity + ".</br>";
            document.getElementById("summary").innerHTML += "Способ оплаты: " + paymethod + ".</p>";
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