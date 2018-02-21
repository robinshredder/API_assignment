var current = null;
var submit = null;

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

