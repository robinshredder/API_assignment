anime({
    targets: 'div.box', //targets my box. If I were to add more boxes with the class of "box", this would affect them too.
   
    //Animating something to move on the Y-axis
    translateY: [{
        delay: 500, // after this many miliseconds I want the box to move
        easing: "easeInOutSine", //gives a particular speed and quality to the beginning and ending of the box's animated path 
            value: 500 ,//y-axis position that I want the box to go to
            duration: 1400 ,//how long it will take for the box to move
        }],

//add a little spin before the box moves horizontally
    rotate: { 
            delay: 1400, //after this many miliseconds I want the box to rotate
        value: "1turn", //this many turns
        easing: "easeInOutQuint" }, //example of another kind of easing, making the start and end of the rotation look smooth

    translateX: [{
        delay:2200,
        easing: "easeInOutCubic", //another easing available in Anime.js
        value: 500,
        duration: 1400,
    }],




   

    loop: true
    
})

