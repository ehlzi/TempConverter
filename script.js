document.addEventListener('DOMContentLoaded', function() {

	function displayResults() {

		let fahrenheit = parseFloat(document.getElementById('fahrenheit-input').value);
		let celsius = parseFloat(document.getElementById('celsius-input').value);
		let kelvin = parseFloat(document.getElementById('kelvin-input').value);
		let newton = parseFloat(document.getElementById('newton-input').value);

		if (isNaN(fahrenheit || celsius || kelvin || newton)) {

			document.getElementById('result').innerHTML =
			`
			<p>Input Invalid</p>
			`
			;
			return;

			/*
			This results in a popup window:
			alert('Please enter a valid number');
			*/

		} else if (fahrenheit) {

			//Declaration of variables
			celsius = (fahrenheit - 32) * (5 / 9);
			kelvin = 273 - celsius;
			newton = celsius * (33 / 100);

			//Rounds to nearest integer
			fahrenheit = Math.floor(fahrenheit);
			celsius = Math.floor(celsius);
			kelvin = Math.floor(kelvin);
			newton = Math.floor(newton);

			const resultDiv = document.getElementById('result')
			resultDiv.innerHTML =
			`
			<p>Fahrenheit: ${fahrenheit}</p>
			<p>Celsius: ${celsius}</p>
			<p>Kelvin: ${kelvin}</p>
			<p>Newton: ${newton}</p>
			`
			;

		} else if (celsius) {

			//Declaration of variables
			kelvin = 273 - celsius;
			fahrenheit = celsius * (9 / 5) + 32;
			newton = celsius * (33 / 100);

			//Rounds to nearest integer
			fahrenheit = Math.floor(fahrenheit);
			celsius = Math.floor(celsius);
			kelvin = Math.floor(kelvin);
			newton = Math.floor(newton);

			const resultDiv = document.getElementById('result')
			resultDiv.innerHTML =
			`
			<p>Fahrenheit: ${fahrenheit}</p>
			<p>Celsius: ${celsius}</p>
			<p>Kelvin: ${kelvin}</p>
			<p>Newton: ${newton}</p>
			`
			;

		} else if (kelvin) {

			//Declaration of variables
			celsius = 273 - kelvin;
			fahrenheit = celsius * (9 / 5) + 32;
			newton = celsius * (33 / 100);

			//Rounds to nearest integer
			fahrenheit = Math.floor(fahrenheit);
			celsius = Math.floor(celsius);
			kelvin = Math.floor(kelvin);
			newton = Math.floor(newton);

			const resultDiv = document.getElementById('result')
			resultDiv.innerHTML =
			`
			<p>Fahrenheit: ${fahrenheit}</p>
			<p>Celsius: ${celsius}</p>
			<p>Kelvin: ${kelvin}</p>
			<p>Newton: ${newton}</p>
			`
			;

		} else if (newton) {

			//Declaration of variables
			celsius = newton * (100 / 33);
			kelvin = 273 - celsius;
			fahrenheit = celsius * (9 / 5) + 32;

			//Rounds to nearest integer
			fahrenheit = Math.floor(fahrenheit);
			celsius = Math.floor(celsius);
			kelvin = Math.floor(kelvin);
			newton = Math.floor(newton);

			const resultDiv = document.getElementById('result')
			resultDiv.innerHTML =
			`
			<p>Fahrenheit: ${fahrenheit}</p>
			<p>Celsius: ${celsius}</p>
			<p>Kelvin: ${kelvin}</p>
			<p>Newton: ${newton}</p>
			`
			;

		} else {

			document.getElementById('result').innerHTML =
			`
			<p>Input Invalid</p>
			`
			;
		}

	}

	function addEnterKeyListener(inputId) {

		document.getElementById(inputId).addEventListener('keyup', function (event) {

			if (event.key === 'Enter') {

				displayResults();

			}
		}
		)

	}

	addEnterKeyListener('fahrenheit-input');
	addEnterKeyListener('celsius-input');
	addEnterKeyListener('kelvin-input');
	addEnterKeyListener('newton-input');

	document.querySelector('.container').addEventListener('click', function (event) {

		if (event.target.id === 'convert-btn') {

			displayResults();

		} else if (event.target.id === 'clear-btn') {

			document.getElementById('fahrenheit-input').value = '';
			document.getElementById('celsius-input').value = '';
			document.getElementById('kelvin-input').value = '';
			document.getElementById('newton-input').value = '';

			document.getElementById('result').innerHTML = '';

		}
	}
	);

}
);
