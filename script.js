const form = document.getElementById("registerForm");
form.addEventListener("submit",function(e){
e.preventDefault();
let name =
document.getElementById("name").value.trim();
let email =
document.getElementById("email").value.trim();
let password =
document.getElementById("password").value;
let confirmPassword =
document.getElementById("confirmPassword").value;
let valid = true;
// Clear previous errors
document.querySelectorAll("span")
.forEach(span=>span.innerHTML="");
document.getElementById("successMessage")
.innerHTML="";

// Name validation

if(name===""){
document.getElementById("nameError")
.innerHTML="Name is required";
valid=false;

}

// Email validation
let emailPattern =
^[^\s@]+@[^\s@]+\.[^\s@]+$;
if(email===""){
document.getElementById("emailError")
.innerHTML="Email is required";
valid=false;
}
else if(!email.match(emailPattern)){
document.getElementById("emailError")
.innerHTML="Enter a valid email";
valid=false;

}
// Password validation

if(password.length < 6){
document.getElementById("passwordError")
.innerHTML=
"Password must contain minimum 6 characters";
valid=false;

}
// Confirm password

if(password !== confirmPassword){
document.getElementById("confirmError")
.innerHTML=
"Passwords do not match";
valid=false;
}
// Success
if(valid){
document.getElementById("successMessage")
.innerHTML=
"Registration successful! 🎉";
form.reset();
}
});
