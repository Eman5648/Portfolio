window.onload = function () {
  Particles.init({
    // normal options
    selector: '.background',
    maxParticles: 110,
    color: '#FFFFFF',
    connectParticles: true,

    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 60,
          color: '#FFFFFF',
          connectParticles: true
        }
      }
      , {
        breakpoint: 525,
        options: {
          maxParticles: 40,
          connectParticles: true
        }
      }, {
        breakpoint: 320,
        options: {
          maxParticles: 25
        }
      }
    ]
  });
};

$(document).ready(function(){
    var typed = new Typed(".typing", {
                            strings: ["Student", "Software Developer", "Web Developer", "Data Analyst", "Network Engineer"],
                            typeSpeed: 100,
                            backSpeed: 100,
                            loop: true
                            
                        
                            
                    });
                });
function formResponse() {
                        alert("Thank you, Your message is sent. I will get back to you as soon as possible.");
}

