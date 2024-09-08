function displayResults() {

	const kelvin = parseFloat(document.getElementById('kelvin-input').value);

	if (isNaN(kelvin)) {

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

	}

	//Declaration of variables
	const celsius = 273 - kelvin;
	let fahrenheit = celsius * (9 / 5) + 32;
	let newton = celsius * (33 / 100);

	//Rounds to nearest integer
	fahrenheit = Math.floor(fahrenheit);
	newton = Math.floor(newton);

	const resultDiv = document.getElementById('result')
	resultDiv.innerHTML =
		`
		<p>Fahrenheit: ${fahrenheit}</p>
		<p>Newton: ${newton}</p>
		`
		;

}

document.getElementById('convert-btn').addEventListener('click', displayResults);

document.getElementById('kelvin-input').addEventListener('keyup', function (event) {

	if (event.key === 'Enter') {
		displayResults();
	}

});

document.getElementById('clear-btn').addEventListener('click', function () {

	document.getElementById('kelvin-input').value = '';
	document.getElementById('result').innerHTML = '';

});

/*
This allows the function to run upon page loading:
window.onload = displayResults;
*/
