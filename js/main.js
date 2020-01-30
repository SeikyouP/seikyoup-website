// Define Variables
var body = document.querySelector('body');
var header = document.querySelector('header');
var aside = document.querySelector('aside');
var asideBtn = document.querySelector('.hamburger');
var asideMenu = document.querySelector('.moblie-menu');
var topBtn = document.querySelector('.top-btn');
var modal = document.querySelector('.modal');
var asideLists = document.querySelectorAll('.moblie-menu a');

// Include Smooth Scroll JS functionality
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  updateURL: false
});

// Include WOW JS functionality
new WOW().init();

// Event Handlers
asideBtn.addEventListener('click', navButton);
window.addEventListener('scroll', topButton);
window.addEventListener('scroll', headerTop);
modal.addEventListener('click', outsideClick);
window.addEventListener('scroll', modalSize);

// Listen for clicks on sidebar navigation links
asideLists.forEach(function(asideList) {
  asideList.addEventListener('click', listClose);
});

// Event Functions
function navButton() {
  asideBtn.classList.toggle('is-active');
  asideMenu.classList.toggle('open');
  modal.classList.toggle('active');
}

// Check where (y-position) the top button should be visible/invisible
function topButton() {
  // Check where (y-position) the top button should be visible
  if (window.pageYOffset >= 150) {
    topBtn.classList.add('active');
  }

  // Otherwise, check which Y-position the top button should be invisible
  else if (window.pageYOffset < 50) {
    topBtn.classList.remove('active');
  }
}

function headerTop() {
  // Change header opacity/color when scrolled away from top
  if (window.pageYOffset > 0) {
    header.classList.add('active');
    aside.classList.add('active');
  }

  // Otherwise, revert header opacity/color when scrolled back to top
  else if (window.pageYOffset === 0) {
    header.classList.remove('active');
    aside.classList.remove('active');
  }
}

function modalSize() {
  // Change modal height to 100% when scrolled away from top
  if (window.pageYOffset >= 150) {
    modal.classList.add('scrolled');
  }

  // Otherwise, revert modal size to default when scrolled back to top
  else if (window.pageYOffset < 150) {
    modal.classList.remove('scrolled');
  }
}

// Listen for outside clicks
function outsideClick() {
  asideBtn.classList.remove('is-active');
  asideMenu.classList.remove('open');
  modal.classList.remove('active');
}

// Close the mobile menu when navigation links are clicked
function listClose() {
  outsideClick();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// var sections = document.querySelectorAll('section');
// var position = document.querySelectorAll('.header-menu a');

// // Determine if an element is in the visible viewport
// function isVisible(ele) {
//   const { top, bottom } = ele.getBoundingClientRect();
//   const vHeight = window.innerHeight || document.documentElement.clientHeight;

//   return (top > 0 || bottom > 0) && top < vHeight;
// }

// //The above function could be used by adding a “scroll” event listener to the window and then calling isInViewport().
// window.addEventListener('scroll', function() {
//   for (i = 0; i < sections.length; i++) {
//     if (isVisible(sections[i])) {
//       position[i].classList.add('current');
//     } else {
//       position[i].classList.remove('current');
//     }
//   }
// });
