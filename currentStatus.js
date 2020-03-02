function status() {
  var today = new Date(),
      open = "We're currently open!",
      closed = "We're currently closed.",
      display = document.getElementById('currentStatus');

  if (today.getDay() == 0 && today.getHours() >= 9 && today.getHours() < 16) {
      display.innerHTML = open;
  } else if (today.getDay() == 1 && today.getHours() >= 8 && today.getHours() < 18) {
      display.innerHTML = open;
  } else if (today.getDay() == 2 && today.getHours() >= 8 && today.getHours() < 18) {
      display.innerHTML = open;
  } else if (today.getDay() == 3 && today.getHours() >= 8 && today.getHours() < 18) {
      display.innerHTML = open;
  } else if (today.getDay() == 4 && today.getHours() >= 8 && today.getHours() < 20) {
      display.innerHTML = open;
  } else if (today.getDay() == 5 && today.getHours() >= 8 && today.getHours() < 20) {
      display.innerHTML = open;
  } else if (today.getDay() == 6 && today.getHours() >= 8 && today.getHours() < 20) {
      display.innerHTML = open;
  }
  else {
      display.innerHTML = closed;
  }
}
