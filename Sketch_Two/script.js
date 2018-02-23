
if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {

    var animateProgress = anime({
        targets: 'progress',
        value: 100,
        easing: 'linear',
        autoplay: false
    });

    var animateReset = anime({
        targets: 'progress',
        value: 0,
        duration:2000,
        autoplay: false
    });

    document.getElementById("p-button").addEventListener("click", function(event){
        event.preventDefault();
        animateProgress.restart();
    });

    document.getElementById("reset-button").addEventListener("click", function(event){
        event.preventDefault();
        animateReset.restart();
    });

}



  