window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.transition = 'background-color 0.5s ease';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        navbar.style.transition = 'background-color 0.5s ease';
    }
});

document.addEventListener('DOMContentLoaded', function () {
   
    var typedText = "Radwimps";

   
    var typingEffectElement = document.getElementById('typingEffect');

   
    var typingSpeed = 140;

   
    var index = 0;

    function type() {
        
        typingEffectElement.textContent += typedText[index];
        index++;

        
        if (index === typedText.length) {
            return;
        }

        
        setTimeout(type, typingSpeed);
    }

    
    type();
});


