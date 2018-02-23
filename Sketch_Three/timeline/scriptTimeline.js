/* animates the easings of squares*/

var line = anime({
    targets: '#relativeOffset .line',
    translateX: 250,
    easing: [.90,-0.54,.50,1]
});
/*animates the relative-positioning of the squares*/
relativeOffset = anime.timeline();
relativeOffset
    .add({
        targets: '#relativeOffset .square.el',
        translateX: 450,
        translateY:200,
        easing: 'easeOutExpo'
    })
    .add({
        targets: '#relativeOffset .circle.el',
        translateX: 650,
        translateY: 400,
        easing: 'easeOutExpo',
        offset: '-=600' // Starts 600ms before the previous animation ends
    })
    .add({
        targets: '#relativeOffset .triangle.el',
        translateX: 850,
        translateY: 200,
        easing: 'easeOutExpo',
        offset: '-=800' // Starts 800ms before the previous animation ends
    });
