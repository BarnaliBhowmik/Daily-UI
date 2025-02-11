document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (name.length < 20) {
        document.getElementById("message").innerText = "Name must be at least 20 characters long.";
        return;
    }
    if (password.length < 6) {
        document.getElementById("message").innerText = "Password must be at least 6 characters long.";
        return;
    }
    
    alert("Sign-up successful!");
});