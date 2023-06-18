//? Get calculator elements
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

//? Initialize screen value
let screenValue = "";

//? Add click event listeners to buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "C") {
            //* Clear the screen

            screenValue = "";
        } else if (buttonText === "=") {
            try {
                //* Evaluate the expression and display the result

                screenValue = eval(screenValue);
            } catch (error) {
                screenValue = "Error";
            }
        } else {
            //* Append the button's text to the screen value

            screenValue += buttonText;
        }

        //* Update the screen value

        screen.textContent = screenValue;
    });
});

export {};
