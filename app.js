let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let nameField = document.querySelector(".nameField");
let emailField = document.getElementById("email");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");
let passwordField = document.getElementById("password");
let togglePassword = document.querySelector(".password-toggle-icon i")

signInBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    text.innerHTML = "Forgot Password"
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    underline.style.transform = "translateX(35px)"; 
    nameField.value = "";
    emailField.value = "";
    passwordField.value = "";
});
signUpBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    text.innerHTML = "Password suggestions";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    underline.style.transform = "translateX(0)"; 
    emailField.value = "";
    passwordField.value = "";
});

togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye");
    }
  });