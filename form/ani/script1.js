if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {

    var loading = document.getElementById("check-password");
    loading.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "http://127.0.0.1:5502/Loading%20bar/index.html";
    });

    var content;

    var specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "?", ":", ".", "(", ")", "[", "]", "{", "}"];
    var passwordTitle = document.getElementById("strength-title");

    var labelConfirm = document.getElementById("confirm-label");
    var passwordConfirm = document.getElementById("confirm-password");

    var text_input_box = document.getElementById('password');
    text_input_box.addEventListener("input", function (event) {
        event.preventDefault();
        content = event.target.value;
        var vx = determinePasswordStrength(content);
        console.log("Entered " + content + " - " + vx);
        if(content.length <= 0){
            moveToOriginalPosition();
            passwordTitle.innerHTML = "";
        }else{
            animatePasswordBoxStrength(vx);
        }
        
    });

    var conPassword = document.getElementById("confirm-password");
    conPassword.addEventListener("input", function(event){
        event.preventDefault();
        var myTimeline = anime.timeline();
        var con_content = event.target.value;
        console.log(con_content + " Length of password " + content.length);

        if(con_content.length >= content.length){
            //check if it match 
            if(con_content === content){
                //animate show good mark
                                
                myTimeline.add({
                    targets:document.querySelector("#mark"),
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutCubic',
                    duration: 2000,
                    begin: function(anim) {
                        document.querySelector('#mark').setAttribute("stroke", "#41cf2e");
                    },
                }).add({
                    targets:document.querySelector("#mbutton"),
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutCubic',
                    duration: 2000,
                    begin: function(anim) {
                        document.querySelector('#mbutton').setAttribute("stroke", "#41cf2e");
                    },
                });
               
                //animate the submit button

            }else{
                //animate bad mark
                var current = anime({
                    targets: 'path',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutCubic',
                    duration: 4000,
                    begin: function(anim) {
                        document.querySelector('path').setAttribute("stroke", "#41cf2e");
                      },
                });
            }
        }else{
            //not yet the size of the password
            myTimeline.reset();
        }

    });





    function checkPasswordLength(password) {
        if (password.length > 12) {
            //show animation and return
            return;
        }
    }

    function confirmPassword(value){
        var confirm = anime({
            targets:document.querySelectorAll('#confirm-label, #confirm-password'),
            duration: 1000,
            easing: 'linear',
            opacity: value,
        })
    }

    function moveToOriginalPosition(){
        var original = anime({
            targets: '.box1, .box2, .box3',
            duration: 2000,
            backgroundColor: '#847C95',
        });
    }


    function animatePasswordBoxStrength(strength) {      
        var mTarget;
        if (strength === "low") { 
            mTarget = ".box1"; 
            passwordTitle.innerHTML = "Low";
            confirmPassword(0);
            var rotateColor = anime({
                targets: '.box1',
                rotate: [{
                    value: 360,
                    duration: 500,
                    direction: 'alternate',                    
                    easing: 'easeInOutSine'
                  },{
                    value: 0,
                    duration: 500,
                    direction: 'alternate',                    
                    easing: 'easeInOutSine'
                  }],
                backgroundColor: '#b5f5a4',
            });
        }
        if (strength === "medium") { 
            mTarget = ".box1, .box2"; 
            passwordTitle.innerHTML = "Medium";
            confirmPassword(0);

            var rotateColor = anime({
                targets: '.box1, .box2',
                rotate: [{
                    value: 360,
                    duration: 500,
                    direction: 'alternate',                    
                    easing: 'easeInOutSine'
                  },{
                    value: 0,
                    duration: 500,
                    direction: 'alternate',                    
                    easing: 'easeInOutSine'
                  }],
                backgroundColor: '#79ca64',
            });
        }
        if (strength === "strong") { 
            mTarget = ".box1, .box2, .box3"; 
            passwordTitle.innerHTML = "Strong";
            confirmPassword(1);

            var rotateColor = anime({
                targets: '.box1, .box2, .box3',
                rotate: [{
                    value: 360,
                    duration: 500,
                    direction: 'alternate',                    
                    easing: 'easeInOutSine'
                  },{
                    value: 0,
                    duration: 500,
                    direction: 'alternate',                    
                    easing: 'easeInOutSine'
                  }],
                  backgroundColor: '#347c20',
            });
            
        }

        console.log("Target " + mTarget);
    }

    function enableSubmitButton(){

    }

    function determinePasswordStrength(password) {
        var returnValue;
        var isLowerCase = false;
        var isUpperCase = false;
        var isMixture = false;
        var isGeneral = false;
        if (password === password.toLowerCase()) {
            isLowerCase = true;
        }
        if (password === password.toUpperCase()) {
            isUpperCase = true;
        }

        if (password.replace(/[^A-Z]/g, "").length > 0) {
            isLowerCase = false;
            isUpperCase = false;
            isMixture = true;
        }

        if (doesWordContainSpecialCharacters(password)) {
            isLowerCase = false;
            isUpperCase = false;
            isGeneral = true;
        }

        if (isLowerCase || isUpperCase) {
            returnValue = "low";
        }
        if (isMixture && !isGeneral) {
            returnValue = "medium";
        }
        if(isMixture && password.length < 3){
            returnValue = "low";
        }
        if (isMixture && isGeneral && password.length <= 6) {
            returnValue = "medium";
        }
        if (isMixture && isGeneral && password.length > 6) {
            returnValue = "strong";
        }
        return returnValue;
    }

    function doesWordContainSpecialCharacters(password) {
        var isPresent = false;
        specialCharacters.forEach(function (letter) {
            if (password.includes(letter)) {
                isPresent = true;
            }
        });
        return isPresent;
    }








}