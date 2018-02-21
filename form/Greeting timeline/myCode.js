/*anime ({
targets: ".dot",
translateX: 250,
loop:true

})*/

var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '#letterOne',
    translateX: 500,
    translateY:250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#letterTwo',
    translateX: 500,
    translateY:260,
    easing: 'easeOutExpo',
    offset: '-=500'
  })
  .add({
    targets: '#letterThree',
    translateX: 500,
    translateY:270,
    easing: 'easeOutExpo',
    offset: '-=400'
  })
  
  .add({
      targets: '#letterFour',
      translateX: 500,
      translateY:280,
      easing: 'easeOutExpo',
      offset: '-=200'
  });
