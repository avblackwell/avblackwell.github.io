// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup type effect
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `python hello.py
            I am a 21 year old aspiring web developer studying at Indiana University.
            I am currently looking for potential clients that need an updated website. 
            My skillset includes:
            - HTML/CSS
            - Javascript Basics
            - Python
            - Graphic Design
            - Responsive Design
            - Search Engine Optimization
            - Back End Basics
            - Testing and Debugging
            `;
  var speed = 10;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}



 

  

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

