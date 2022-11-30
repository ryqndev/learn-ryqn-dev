let currentTheme = 'dark';

function toggleTheme() {
	console.log('hey someone clicked this button');

	if (currentTheme === 'dark') {
		document.getElementById('current-theme').innerHTML = 'Light';

		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';

        currentTheme = 'light';
	} else {
		document.getElementById('current-theme').innerHTML = 'Dark';

		document.body.style.backgroundColor = '#151515';
		document.body.style.color = 'white';

        currentTheme = 'dark';
	}
}
