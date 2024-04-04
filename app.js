let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let nameField = document.querySelector(".nameField");
let nameInput = document.getElementById("nameInput");
let emailField = document.getElementById("email");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");
let str = document.getElementById("stength");
let togglePassword = document.querySelector(".password-toggle-icon i");
let passwordInput = document.getElementById("password");
let generatePassword = document.getElementById("generator");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*}{[]?>/.";
const allChars = upperCase + lowerCase + number + symbols;
let popup = document.getElementById("popup");
let currentAuth = "signUp";

signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  text.innerHTML = "Forgot Password?";
  text.style.color = "black";
  generator.innerHTML = "";
  generator.style.backgroundColor = "#f9f8f5cc";
  generator.style.maxWidth = "0";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  underline.style.transform = "translateX(35px)";
  passwordInput.type = "password";
  togglePassword.classList.remove("fa-eye-slash");
  togglePassword.classList.add("fa-eye");

  if (currentAuth === "signUp") {
    nameInput.value = "";
    currentAuth = "signIn";
  } else if (emailField.value && passwordInput.value) {
    popup.classList.add("open-popup");
  }

  emailField.value = "";
  passwordInput.value = "";
});

signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  text.innerHTML = "Password Suggestion";
  text.style.color = "black";
  generator.innerHTML = "Generate";
  generator.style.backgroundColor = "#c3bebe";
  generator.style.maxWidth = "80px";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  underline.style.transform = "translateX(0)";
  passwordInput.type = "password";
  togglePassword.classList.remove("fa-eye-slash");
  togglePassword.classList.add("fa-eye");

  if (currentAuth === "signIn") {
    currentAuth = "signUp";
  } else if (nameInput.value && emailField.value && passwordInput.value) {
    popup.classList.add("open-popup");
  }

  nameInput.value = "";
  emailField.value = "";
  passwordInput.value = "";
});

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordInput.value = password;
}

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 4) {
    text.innerHTML = "Password is weak";
    text.style.color = "#ff5925";
  } else if (passwordInput.value.length > 4 && passwordInput.value.length < 8) {
    text.innerHTML = "Password is medium";
    text.style.color = "orange";
  } else if (passwordInput.value.length >= 8) {
    text.innerHTML = "Password is strong";
    text.style.color = "green";
  }
});

function closePopup() {
  popup.classList.remove("open-popup");
}
