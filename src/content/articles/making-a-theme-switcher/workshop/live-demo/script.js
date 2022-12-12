let currentTheme = 'dark';
let popupOpen = false;

function move(e) {
    console.log(e);
}

function toggleTheme() {
    // console.log("hey this fucntion is called!!");

    if(popupOpen) {
        // document.getElementById('popup').style.display = 'none';
        document.getElementById('popup').style.opacity = 0;
        popupOpen = false;
    } else {
        document.getElementById('popup').style.opacity = 1;
        popupOpen = true;

    }

    // if (currentTheme === 'dark') {
    //     document.getElementById('current-theme').innerHTML = 'Light';

    //     document.body.style.backgroundColor = 'white';
    //     document.body.style.color = 'black';

    //     currentTheme = 'light';

    // } else {
    //     document.getElementById('current-theme').innerHTML = 'Dark';

    //     document.body.style.backgroundColor = '#151515';
    //     document.body.style.color = 'white';

    //     currentTheme = 'dark';
    // }



}


