document.addEventListener('DOMContentLoaded', function() {
    // Listen to scroll events
    window.addEventListener('scroll', function() {
        // List of elements to fade in up
        var fadeUpElements = document.querySelectorAll('.fade-up');

        // Loop through each element
        for (var i = 0; i < fadeUpElements.length; i++) {
            // Get the current element
            var element = fadeUpElements[i];

            // Get the element's distance from the top of the page
            var elementDistance = element.getBoundingClientRect().top;

            // Get the height of the window
            var windowHeight = window.innerHeight;

            // If the element is halfway vertically into the window
            if (elementDistance < windowHeight / 2) {
                // Fade it in using CSS transitions
                element.classList.add('in');
            }
            else{
                element.classList.remove('in');
            }
            
        }
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
} 