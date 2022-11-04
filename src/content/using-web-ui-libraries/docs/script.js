$(document).ready(load);

function load() {
    $('.shape').shape();
    
    setInterval(function(){
        $('.shape').shape('flip up');
    }, 1000);
}
