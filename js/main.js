// SPECULATED GIVEN DATE AND TIME

var countDownDate = new Date("Nov 14, 2024 00:00:00").getTime();

// PUTTING EVERYTHING IN THE INTERVAL FUNCTION

var x = setInterval(() => {
  var now = new Date().getTime();

  // TO GET THE TIME DIFFERENCE FROM THE GIVEN TIME FRAME

  var difference = countDownDate - now;
  var price = document.getElementById("price");

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // AFTER COUNTDOWN

  if (difference < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    price.innerHTML = "$75";
  }
}, 1000);
