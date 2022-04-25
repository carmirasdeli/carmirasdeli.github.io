function auth() {
  let pass = "pass";
  let id = prompt("User ID:");
  let authenticate = prompt("Password");
  if (authenticate == pass && id == "admin") {
    document.getElementById("internal").style.display = "block";
    document.getElementById("logoutbutton").style.display = "block";
    document.getElementById("loginbutton").style.display = "none";

  } else {
      document.getElementById("deny").style.display = "block";
  }
}
