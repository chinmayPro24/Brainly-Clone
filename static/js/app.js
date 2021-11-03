let login = document.querySelector("#login");
let register = document.querySelector("#register");
let url_string = window.location.href;
let url = new URL(url_string);
let m = url.searchParams.get("m");
console.log(m);

if (m === "login") {
  register.style.display = "none";
} else {
  login.style.display = "none";
}
