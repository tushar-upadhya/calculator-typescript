// calculator.ts
// Get calculator elements
var screen = document.getElementById("screen");
var buttons = document.querySelectorAll(".btn");
// Initialize screen value
var screenValue = "";
// Add click event listeners to buttons
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var buttonText = button.textContent;
        if (buttonText === "C") {
            // Clear the screen
            screenValue = "";
        }
        else if (buttonText === "=") {
            try {
                // Evaluate the expression and display the result
                screenValue = eval(screenValue);
            }
            catch (error) {
                screenValue = "Error";
            }
        }
        else {
            // Append the button's text to the screen value
            screenValue += buttonText;
        }
        // Update the screen value
        screen.textContent = screenValue;
    });
});
