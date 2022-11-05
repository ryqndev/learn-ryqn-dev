$(document).ready(load);

function load() {
    $('.shape').shape();
}


function calculate(event) {
    event.preventDefault();
    console.log(event)

    const answer = eval(`${event.target[0].value }${event.target[1].value}${event.target[2].value}`)

    document.getElementById('answer').innerHTML 
        = event.target[0].value 
        + event.target[1].value
        + event.target[2].value
        + '='
        + answer;

    $('.shape').shape('flip over');

}
