var current = null;
var submit = null;

var rootpath = "http://127.0.0.1:5500/";

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = rootpath + "ani/index.html";
});
/* Current animation creates lines animated for textfields */
document.querySelector('#firstname').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#lastname').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#email').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -672,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
/*Creates animation for button. Depending on mouseover or mouseout*/
document.querySelector('#submit').addEventListener('mouseover', function(e) {
    if (submit) submit.pause();
    submit = anime({
        targets: '#submit',
        width: {
            value: '+=20',
            duration: 500,
            easing: 'easeInOutSine'
        },
        height: {
            value: '+=12',
            duration: 500,
            easing: 'easeInOutSine'
        },
        direction: 'alternate'
    });
});
document.querySelector('#submit').addEventListener('mouseout', function(e) {
    if (submit) submit.pause();
    submit = anime({
        targets: '#submit',
        width: {
            value: '-=20',
            duration: 500,
            easing: 'easeInOutSine'
        },
        height: {
            value: '-=12',
            duration: 500,
            easing: 'easeInOutSine'
        },
        direction: 'alternate'
    });
});


//GREETING "Hey" animation
var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '#letterOne',
    translateX: 600,
    translateY:250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#letterTwo',
    translateX: 600,
    translateY:260,
    easing: 'easeOutExpo',
    offset: '-=500'
  })
  .add({
    targets: '#letterThree',
    translateX: 600,
    translateY:270,
    easing: 'easeOutExpo',
    offset: '-=400'
  })

  .add({
      targets: '#letterFour',
      translateX: 600,
      translateY:280,
      easing: 'easeOutExpo',
      offset: '-=600'
  });
