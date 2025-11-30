function validateForm() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("rollNo").value;
    let event = document.getElementById("event").value;
    let dept = document.getElementById("dept").value;
    let amount = document.getElementById("amount").value;
    let payment = document.getElementById("payment").value;
    let account = document.getElementById("account").value;

    if (name === "") {
        alert("Name field is empty! Please enter your name.");
        return; 
    }

    if (roll === "") {
        alert("Roll number field is empty! Please enter your roll number.");
        return;
    }

    if (roll.length < 7) {
        alert("Roll number must be at least 7 digits.");
        return;
    }

    if (event === "") {
        alert("Please select an event");
        return;
    }

    if (dept === "") {
        alert("Please select your department");
        return;
    }

    if (amount === "" || amount <= 0) {
        alert("Please enter a valid ticket amount");
        return;
    }

    if (payment === "") {
        alert("Please select how the payment was made");
        return;
    }

    if (payment !== "Cash" && account === "") {
        alert("Please enter account number for non-cash payment");
        return;
    }

    let ticketMessage = "Ticket Generated Successfully!\n";
    ticketMessage += "Name: " + name + "\n";
    ticketMessage += "Roll No: " + roll + "\n";
    ticketMessage += "Event: " + event + "\n";
    ticketMessage += "Department: " + dept + "\n";
    ticketMessage += "Price: Rs. " + amount + "\n";

    if (payment !== "Cash") {
        ticketMessage += "Paid Through: " + payment + " (Account: " + account + ")";
    } else {
        ticketMessage += "Paid Through: Cash";
    }

    // Display ticket message in the page
    document.getElementById("message").textContent = ticketMessage;
}
