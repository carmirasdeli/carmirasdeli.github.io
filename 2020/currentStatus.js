function status() {
  var today = new Date().getDay(),
      time = new Date().getHours(),
      open = "We're currently open!",
      closed = "We're currently closed.",
      display = document.getElementById('currentStatus');
  if (today == 0 && time >= 9 && time < 15) {
      display.innerHTML = open;
  } else if (today == 1 && time >= 8 && time < 19) {
      display.innerHTML = open;
  } else if (today == 2 && time >= 8 && time < 19) {
      display.innerHTML = open;
  } else if (today == 3 && time >= 8 && time < 19) {
      display.innerHTML = open;
  } else if (today == 4 && time >= 8 && time < 19) {
      display.innerHTML = open;
  } else if (today == 5 && time >= 8 && time < 19) {
      display.innerHTML = open;
  } else if (today == 6 && time >= 8 && time < 19) {
      display.innerHTML = open;
  }
  else {
      display.innerHTML = closed;
  }
}
