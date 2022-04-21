function status() {
  var today = new Date().getDay(),
      time = new Date().getHours(),
      open = "Now Open!",
      closed = "Closed now.",
      display = document.getElementById('currentStatus'),
      color = document.getElementById("currentStatus");
    if (today == 0 && time >= 9 && time < 15) {
      display.innerHTML = open,
      color.style.color = "green";
  } else if (today == 1) {
      display.innerHTML = closed;
  } else if (today == 2 && time >= 10 && time < 19) {
      display.innerHTML = open,
      color.style.color = "green";
  } else if (today == 3 && time >= 10 && time < 19) {
      display.innerHTML = open,
      color.style.color = "green";
  } else if (today == 4 && time >= 10 && time < 19) {
      display.innerHTML = open,
      color.style.color = "green";
  } else if (today == 5 && time >= 10 && time < 19) {
      display.innerHTML = open,
      color.style.color = "green";
  } else if (today == 6 && time >= 10 && time < 19) {
      display.innerHTML = open,
      color.style.color = "green";
  } else if (today == 6 && time >= 10 && time < 19) {
      display.innerHTML = open,
      color.style.color = "green";
  } else {
      display.innerHTML = closed,
      color.style.color = "red";
  }
}
