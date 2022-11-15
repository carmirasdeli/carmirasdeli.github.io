function auth() {
  let pass = ["admin","pass"];
  let id = prompt("User ID:");
  let authenticate = prompt("Password:");
  if (authenticate == pass[1] && id == pass[0]) {
    document.getElementById("internal").style.display = "block";
    document.getElementById("logoutbutton").style.display = "block";
    document.getElementById("loginbutton").style.display = "none";
  } else {
      alert("User ID for Password failed")
  }
}
