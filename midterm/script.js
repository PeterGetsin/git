document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        form.reset();

        alert("Your message has been sent!")
    });
    
});




window.onload = function () {
    const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

    function askUserPreferences() {
        const userName = prompt("What is your name?");
        let colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

        if (colorChoice >= 0 && colorChoice <= 2) {
            const userInfo = { name: userName, selectedColor: colors[colorChoice] };
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            document.body.style.backgroundColor = userInfo.selectedColor;
        } else {
            alert("Invalid choice. Please reload and pick a valid color option (0, 1, or 2).");
        }
    }

    if (!localStorage.getItem("userInfo")) {
        askUserPreferences();
    } else {
        const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
        document.body.style.backgroundColor = storedUserInfo.selectedColor;
    }


    
    // Reset Button
    const resetButton = document.createElement("button");
    resetButton.id = "resetColorBtn";
    resetButton.textContent = "Change Color";
    resetButton.style.position = "fixed";
    resetButton.style.top = "10px";
    resetButton.style.right = "10px";
    resetButton.style.padding = "10px";
    resetButton.style.cursor = "pointer";
    document.body.appendChild(resetButton);

    resetButton.addEventListener("click", function () {
        localStorage.removeItem("userInfo"); // Clear stored data
        askUserPreferences(); // Ask again
    });

    console.log("The first color in the array is:", colors[0]); // should output grey HEX
};