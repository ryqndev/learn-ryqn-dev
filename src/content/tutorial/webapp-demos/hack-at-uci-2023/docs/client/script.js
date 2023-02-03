function clicked() {
    let userInput;
    userInput = document.getElementById('user-input').value;

    console.log(userInput);


    document.getElementById('display').innerHTML = 'Here\'s a list of restuarnats I found: ';
    document.getElementById('display').innerHTML += '<div class="result">BCD</div>';
    document.getElementById('display').innerHTML += '<div class="result">yupdduk</div>';
}

