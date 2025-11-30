document.getElementById("sendBtn").onclick = function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "") {
        alert("Enter your name");
        return;
    }

    if (email === "") {
        alert("Enter your email");
        return;
    }

    if (message === "") {
        alert("Enter your message");
        return;
    }

    alert("Message sent!");
};
