
// Animate the loading box
anime({
    targets: ".box",
    translateX: [                                           //moving the box to a position on the x-axis
        { value: 400, duration: 1000,   delay: 500},        
        {  value: 0,  duration: 1000,   delay: 500 }
    ],
    translateY: [                                            //moving the box to a position on the y-axis
        { value: 0,  duration: 500, },                     
        { value: 200,  duration: 500, delay: 1000, },
        { value: 0,   duration: 500,  delay: 1000, }
    ],

    easing: "easeInOutCirc",                                //start and end of the movement is given a certain speed and quality with an easing.
    rotate: {  value: "1turn",  easing: "easeInOutSine" },
    loop: true,

})

//Animate color change in box
var colors = anime({
    targets: ".box",

    backgroundColor: [                          //choose colors to include in the animation
        {value: "rgb(255, 120, 66)" },
        {  value: "rgb(201, 66, 183)"},
        {  value: "hsl(50, 10%, 70%)"} 
    ],
    easing: "linear",
    direction: "alternate", //color change goes back and forth
    duration: 3500,
    loop: true
});

//Animating the counter, starting from the value in the counter field going up to 1000
var domAttributes = anime({
    targets: '#counter input',
    value: 1000,
    round: 1,
    duration: 3500,
    easing: 'easeInOutExpo',
    loop: true
});

anime.timeline()
.add({
    targets:"#inside-text",
    duration: 1000,
    easing: "easeOutExpo",
    Delay: 1000
})