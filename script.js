document.addEventListener("DOMContentLoaded", function () {
    // Function to display the conversion results
    function displayResults() {
        // Get input values and parse them as floats
        let fahrenheit = parseFloat(document.getElementById("fahrenheit-input").value);
        let celsius = parseFloat(document.getElementById("celsius-input").value);
        let kelvin = parseFloat(document.getElementById("kelvin-input").value);
        let newton = parseFloat(document.getElementById("newton-input").value);

        // Check if all inputs are NaN (invalid)
        if (isNaN(fahrenheit) && isNaN(celsius) && isNaN(kelvin) && isNaN(newton)) {
            document.getElementById("result").innerHTML = "<p>Please enter a valid temperature in one of the fields.</p>";
            return;
        }

        // Perform conversions based on which input is provided
        if (!isNaN(fahrenheit)) {
            // Convert Fahrenheit to other units
            celsius = (fahrenheit - 32) * (5 / 9);
            kelvin = celsius + 273.15;
            newton = celsius * (33 / 100);
        } else if (!isNaN(celsius)) {
            // Convert Celsius to other units
            kelvin = celsius + 273.15;
            fahrenheit = celsius * (9 / 5) + 32;
            newton = celsius * (33 / 100);
        } else if (!isNaN(kelvin)) {
            // Convert Kelvin to other units
            celsius = kelvin - 273.15;
            fahrenheit = celsius * (9 / 5) + 32;
            newton = celsius * (33 / 100);
        } else if (!isNaN(newton)) {
            // Convert Newton to other units
            celsius = newton * (100 / 33);
            fahrenheit = celsius * (9 / 5) + 32;
            kelvin = celsius + 273.15;
        } else {
            // If input is invalid, display an error message
            document.getElementById("result").innerHTML = "<p>Input Invalid</p>";
            return;
        }

        // Round the results to the nearest integer
        fahrenheit = Math.floor(fahrenheit);
        celsius = Math.floor(celsius);
        kelvin = Math.floor(kelvin);
        newton = Math.floor(newton);

        // Display the results in the result div
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <p>Fahrenheit: <br> ${fahrenheit}°F</p>
            <p>Celsius: <br> ${celsius}°C</p>
            <p>Kelvin: <br> ${kelvin}°K</p>
            <p>Newton: <br> ${newton}°N</p>
        `;
    }

    // Function to add Enter key listener to input fields
    function addEnterKeyListener(inputId) {
        document.getElementById(inputId).addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                displayResults();
            }
        });
    }

    // Add Enter key listeners to all input fields
    addEnterKeyListener("fahrenheit-input");
    addEnterKeyListener("celsius-input");
    addEnterKeyListener("kelvin-input");
    addEnterKeyListener("newton-input");

    // Add click event listeners to the container for convert and clear buttons
    document.querySelector(".container").addEventListener("click", function (event) {
        if (event.target.id === "convert-btn") {
            // Call displayResults function when convert button is clicked
            displayResults();
        } else if (event.target.id === "clear-btn") {
            // Clear all input fields and the result div when clear button is clicked
            document.getElementById("fahrenheit-input").value = "";
            document.getElementById("celsius-input").value = "";
            document.getElementById("kelvin-input").value = "";
            document.getElementById("newton-input").value = "";
            document.getElementById("result").innerHTML = "";
        }
    });
});
