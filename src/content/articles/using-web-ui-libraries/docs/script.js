$(document).ready(load);

function load() {
    $('.ui.dropdown').dropdown();
}


function calculate(event) {
    event.preventDefault();

    const answer = eval(`${event.target[0].value }${event.target[1].value}${event.target[2].value}`)

    document.getElementById('answer').innerHTML 
        = event.target[0].value 
        + event.target[1].value
        + event.target[2].value
        + '='
        + answer;
}
