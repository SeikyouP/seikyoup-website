// Define Variables
var header = document.querySelector('header')
var body = document.querySelector('body')
var container = document.querySelector('.container-1080')

var aside = document.querySelector('aside')
var asideBtn = document.querySelector('.hamburger')
var asideMenu = document.querySelector('.mobile-menu')
var asideLists = document.querySelectorAll('.mobile-menu a')

var asideModal = document.querySelector('#aside-modal')
var projectModal = document.querySelector('#project-modal')
var projectCards = document.querySelectorAll('figure')
var modalCard = document.querySelector('.modal-card')

var closeBtn = document.querySelector('.close-btn')
var topBtn = document.querySelector('.top-btn')

// Include Smooth Scroll JS
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true,
  updateURL: false,
  topOnEmptyHash: true,
})

// Include Menuspy JS
var elm = document.querySelector('#test') // Desktop Menu
var ms = new MenuSpy(elm, {
  activeClass: 'current',
  enableLocationHash: false,
})

var elm2 = document.querySelector('#test2') // Mobile Menu
var ms2 = new MenuSpy(elm2, {
  activeClass: 'current',
  enableLocationHash: false,
})

// Include WOW JS
new WOW().init()

// Event Handlers
asideBtn.addEventListener('click', toggleList)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('scroll', topButton)
window.addEventListener('scroll', headerTop)
window.addEventListener('scroll', asideTop)
window.addEventListener('click', outsideClick)

// Listen for clicks on sidebar navigation links

// asideLists.forEach(function(asideList) {
//   asideList.addEventListener('click', closeList);
// });

// Apparently Internet Explorer 11 does not support ForEach loops...
for (i = 0; i < asideLists.length; i++) {
  asideLists[i].addEventListener('click', closeList)
}

// Listen for clicks on project cards

// projectCards.forEach(function(projectCard) {
//   projectCard.addEventListener('click', openModal);
// });

// Apparently Internet Explorer 11 does not support ForEach loops...
for (i = 0; i < projectCards.length; i++) {
  projectCards[i].addEventListener('click', openModal)
}

// Listen for clicks on project cards and show the correct modal

// projectCards.forEach(function(projectCard) {
//   projectCard.addEventListener('click', showModal);
// });

// Apparently Internet Explorer 11 does not support ForEach loops...
// for (i = 0; i < projectCards.length; i++) {
window.addEventListener('click', showModal)
// }

// Event Functions
function topButton() {
  // Check where (y-position) the top button should be visible
  if (window.pageYOffset >= 150) {
    topBtn.classList.add('active')
  }

  // Otherwise, check which Y-position the top button should be invisible
  else if (window.pageYOffset < 50) {
    topBtn.classList.remove('active')
  }
}

function headerTop() {
  // Change header opacity/color/shadow/etc when scrolled away from top
  if (window.pageYOffset > 0) {
    header.classList.add('active')
  }

  // Otherwise, revert header opacity/color/shadow/etc when scrolled back to top
  else if (window.pageYOffset === 0) {
    header.classList.remove('active')
  }
}

function asideTop() {
  // Change aside opacity/color/shadow/etc when scrolled away from top
  if (window.pageYOffset > 0) {
    aside.classList.add('active')
  }

  // Otherwise, revert aside opacity/color/shadow/etc when scrolled back to top
  else if (window.pageYOffset === 0) {
    aside.classList.remove('active')
  }
}

// Function to open modal
function openModal() {
  projectModal.style.display = 'block'
  // body.classList.add('active');
  modalCard.classList.add('active')
  hasHorizontalScrollbar =
    projectModal.children[0].scrollWidth > projectModal.children[0].clientWidth
  hasVerticalScrollbar =
    projectModal.children[0].scrollHeight >
    projectModal.children[0].clientHeight

  // Check if the project card has a vertical scrollbar
  hasVerticalScrollbar ? enableScroll() : disableScroll()
}

// Function to close modal
function closeModal() {
  projectModal.style.display = 'none'
  var lis = document.querySelectorAll('.tech-used li')

  // Remove/Reset tech-used items when clicked
  for (i = 0; i < lis.length; i++) {
    lis[i].remove()
  }

  enableScroll()
}

// Function to show modal
function showModal(e) {
  // Declare Local Variables
  var title = document.querySelector('.modal-title')
  var description = document.querySelector('.modal-description')
  var websiteBtn = document.querySelector('#website-btn a')
  var githubBtn = document.querySelector('#github-btn a')
  var modalImage = document.querySelector('.modal-image img')

  // Note: CSS Pointer-events is set to "none" for this to work properly
  switch (e.target.id) {
    // =============== //
    // Project 1 Modal //
    // =============== //
    case 'project-1':
      title.textContent = 'Project #1'
      description.textContent = 'Modal 1'
      modalImage.src = '#'

      // Check if image src is present
      if (
        modalImage.getAttribute('src') === '' ||
        modalImage.getAttribute('src') === '/' ||
        modalImage.getAttribute('src') === '#'
      ) {
        modalImage.style.display = 'none'
      } else if (
        modalImage.getAttribute('src') !== '' ||
        modalImage.getAttribute('src') !== '/' ||
        modalImage.getAttribute('src') !== '#'
      ) {
        modalImage.style.display = 'block'
      }

      // Function to create li or lis
      function createListItem(text) {
        var li = document.createElement('li')
        li.className = 'test'
        li.textContent = text
        return li
      }

      // Function to append li or lis into ul
      function appendChildren(parent, children) {
        children.forEach(function (child) {
          parent.appendChild(child)
        })
      }

      //  Select element to be used as parent
      var ul = document.querySelector('.tech-used ul')

      // Add Text Content into each li (child/children)
      var lis = [
        createListItem('HTML'),
        createListItem('CSS'),
        createListItem('HTML Email'),
      ]

      // Call the function
      appendChildren(ul, lis)

      // Reset link defaults
      websiteBtn.href = 'https://seikyoup.com/'
      githubBtn.href = 'https://github.com/SeikyouP/seikyoup-website'

      // Remove website link completely if href link does not exist
      if (
        websiteBtn.getAttribute('href') === '' ||
        websiteBtn.getAttribute('href') === '/' ||
        websiteBtn.getAttribute('href') === '#'
      ) {
        websiteBtn.removeAttribute('href')
      }

      // Remove github link completely if href link does not exist
      if (
        githubBtn.getAttribute('href') === '' ||
        githubBtn.getAttribute('href') === '/' ||
        githubBtn.getAttribute('href') === '#'
      ) {
        githubBtn.removeAttribute('href')
      }

      break

    // =============== //
    // Project 2 Modal //
    // =============== //
    case 'project-2':
      title.textContent = 'Project #2'
      description.textContent = 'Modal 2'
      modalImage.src = '#'

      // Check if image src is present
      if (
        modalImage.getAttribute('src') === '' ||
        modalImage.getAttribute('src') === '/' ||
        modalImage.getAttribute('src') === '#'
      ) {
        modalImage.style.display = 'none'
      } else if (
        modalImage.getAttribute('src') !== '' ||
        modalImage.getAttribute('src') !== '/' ||
        modalImage.getAttribute('src') !== '#'
      ) {
        modalImage.style.display = 'block'
      }

      // Function to create li or lis
      function createListItem(text) {
        var li = document.createElement('li')
        li.textContent = text
        return li
      }

      // Function to append li or lis into ul
      function appendChildren(parent, children) {
        children.forEach(function (child) {
          parent.appendChild(child)
        })
      }

      //  Select element to be used as parent
      var ul = document.querySelector('.tech-used ul')

      // Add Text Content into each li (child/children)
      var lis = [
        createListItem('HTML'),
        createListItem('CSS'),
        createListItem('HTML Email'),
      ]

      // Call the function
      appendChildren(ul, lis)

      // Reset link defaults
      websiteBtn.href = 'https://seikyoup.com/'
      githubBtn.href = 'https://github.com/SeikyouP/seikyoup-website'

      // Remove website link completely if href link does not exist
      if (
        websiteBtn.getAttribute('href') === '' ||
        websiteBtn.getAttribute('href') === '/' ||
        websiteBtn.getAttribute('href') === '#'
      ) {
        websiteBtn.removeAttribute('href')
      }

      // Remove github link completely if href link does not exist
      if (
        githubBtn.getAttribute('href') === '' ||
        githubBtn.getAttribute('href') === '/' ||
        githubBtn.getAttribute('href') === '#'
      ) {
        githubBtn.removeAttribute('href')
      }

      break

    // =============== //
    // Project 3 Modal //
    // =============== //
    case 'project-3':
      title.textContent = 'Project #3'
      description.textContent = 'Modal 3'
      modalImage.src = '#'

      // Check if image src is present
      if (
        modalImage.getAttribute('src') === '' ||
        modalImage.getAttribute('src') === '/' ||
        modalImage.getAttribute('src') === '#'
      ) {
        modalImage.style.display = 'none'
      } else if (
        modalImage.getAttribute('src') !== '' ||
        modalImage.getAttribute('src') !== '/' ||
        modalImage.getAttribute('src') !== '#'
      ) {
        modalImage.style.display = 'block'
      }

      // Function to create li or lis
      function createListItem(text) {
        var li = document.createElement('li')
        li.textContent = text
        return li
      }

      // Function to append li or lis into ul
      function appendChildren(parent, children) {
        children.forEach(function (child) {
          parent.appendChild(child)
        })
      }

      //  Select element to be used as parent
      var ul = document.querySelector('.tech-used ul')

      // Add Text Content into each li (child/children)
      var lis = [
        createListItem('HTML'),
        createListItem('CSS'),
        createListItem('HTML Email'),
      ]

      // Call the function
      appendChildren(ul, lis)

      // Reset link defaults
      websiteBtn.href = 'https://seikyoup.com/'
      githubBtn.href = 'https://github.com/SeikyouP/seikyoup-website'

      // Remove website link completely if href link does not exist
      if (
        websiteBtn.getAttribute('href') === '' ||
        websiteBtn.getAttribute('href') === '/' ||
        websiteBtn.getAttribute('href') === '#'
      ) {
        websiteBtn.removeAttribute('href')
      }

      // Remove github link completely if href link does not exist
      if (
        githubBtn.getAttribute('href') === '' ||
        githubBtn.getAttribute('href') === '/' ||
        githubBtn.getAttribute('href') === '#'
      ) {
        githubBtn.removeAttribute('href')
      }

      break

    // =============== //
    // Project 4 Modal //
    // =============== //
    case 'project-4':
      title.textContent = 'Project #4'
      description.textContent = 'Modal 4'
      modalImage.src = '#'

      // Check if image src is present
      if (
        modalImage.getAttribute('src') === '' ||
        modalImage.getAttribute('src') === '/' ||
        modalImage.getAttribute('src') === '#'
      ) {
        modalImage.style.display = 'none'
      } else if (
        modalImage.getAttribute('src') !== '' ||
        modalImage.getAttribute('src') !== '/' ||
        modalImage.getAttribute('src') !== '#'
      ) {
        modalImage.style.display = 'block'
      }

      // Function to create li or lis
      function createListItem(text) {
        var li = document.createElement('li')
        li.className = 'test'
        li.textContent = text
        return li
      }

      // Function to append li or lis into ul
      function appendChildren(parent, children) {
        children.forEach(function (child) {
          parent.appendChild(child)
        })
      }

      //  Select element to be used as parent
      var ul = document.querySelector('.tech-used ul')

      // Add Text Content into each li (child/children)
      var lis = [
        createListItem('HTML'),
        createListItem('CSS'),
        createListItem('HTML Email'),
      ]

      // Call the function
      appendChildren(ul, lis)

      // Reset link defaults
      websiteBtn.href = 'https://seikyoup.com/'
      githubBtn.href = 'https://github.com/SeikyouP/seikyoup-website'

      // Remove website link completely if href link does not exist
      if (
        websiteBtn.getAttribute('href') === '' ||
        websiteBtn.getAttribute('href') === '/' ||
        websiteBtn.getAttribute('href') === '#'
      ) {
        websiteBtn.removeAttribute('href')
      }

      // Remove github link completely if href link does not exist
      if (
        githubBtn.getAttribute('href') === '' ||
        githubBtn.getAttribute('href') === '/' ||
        githubBtn.getAttribute('href') === '#'
      ) {
        githubBtn.removeAttribute('href')
      }

      break

    // =============== //
    // Project 5 Modal //
    // =============== //
    case 'project-5':
      title.textContent = 'Project #5'
      description.textContent = 'Modal 5'
      modalImage.src = '#'

      // Check if image src is present
      if (
        modalImage.getAttribute('src') === '' ||
        modalImage.getAttribute('src') === '/' ||
        modalImage.getAttribute('src') === '#'
      ) {
        modalImage.style.display = 'none'
      } else if (
        modalImage.getAttribute('src') !== '' ||
        modalImage.getAttribute('src') !== '/' ||
        modalImage.getAttribute('src') !== '#'
      ) {
        modalImage.style.display = 'block'
      }

      // Function to create li or lis
      function createListItem(text) {
        var li = document.createElement('li')
        li.className = 'test'
        li.textContent = text
        return li
      }

      // Function to append li or lis into ul
      function appendChildren(parent, children) {
        children.forEach(function (child) {
          parent.appendChild(child)
        })
      }

      //  Select element to be used as parent
      var ul = document.querySelector('.tech-used ul')

      // Add Text Content into each li (child/children)
      var lis = [
        createListItem('HTML'),
        createListItem('CSS'),
        createListItem('HTML Email'),
      ]

      // Call the function
      appendChildren(ul, lis)

      // Reset link defaults
      websiteBtn.href = 'https://seikyoup.com/'
      githubBtn.href = 'https://github.com/SeikyouP/seikyoup-website'

      // Remove website link completely if href link does not exist
      if (
        websiteBtn.getAttribute('href') === '' ||
        websiteBtn.getAttribute('href') === '/' ||
        websiteBtn.getAttribute('href') === '#'
      ) {
        websiteBtn.removeAttribute('href')
      }

      // Remove github link completely if href link does not exist
      if (
        githubBtn.getAttribute('href') === '' ||
        githubBtn.getAttribute('href') === '/' ||
        githubBtn.getAttribute('href') === '#'
      ) {
        githubBtn.removeAttribute('href')
      }

      break

    // =============== //
    // Project 6 Modal //
    // =============== //
    case 'project-6':
      title.textContent = 'Project #6'
      description.textContent = 'Modal 6'
      modalImage.src = '../img/project6.png'

      // Check if image src is present
      if (
        modalImage.getAttribute('src') === '' ||
        modalImage.getAttribute('src') === '/' ||
        modalImage.getAttribute('src') === '#'
      ) {
        modalImage.style.display = 'none'
      } else if (
        modalImage.getAttribute('src') !== '' ||
        modalImage.getAttribute('src') !== '/' ||
        modalImage.getAttribute('src') !== '#'
      ) {
        modalImage.style.display = 'block'
      }

      // Function to create li or lis
      function createListItem(text) {
        var li = document.createElement('li')
        li.className = 'test'
        li.textContent = text
        return li
      }

      // Function to append li or lis into ul
      function appendChildren(parent, children) {
        children.forEach(function (child) {
          parent.appendChild(child)
        })
      }

      //  Select element to be used as parent
      var ul = document.querySelector('.tech-used ul')

      // Add Text Content into each li (child/children)
      var lis = [
        createListItem('HTML'),
        createListItem('CSS'),
        createListItem('SASS'),
        createListItem('Javascript'),
      ]

      // Call the function
      appendChildren(ul, lis)

      // Reset link defaults
      websiteBtn.href = 'https://seikyoup.com/'
      githubBtn.href = 'https://github.com/SeikyouP/seikyoup-website'

      // Remove website link completely if href link does not exist
      if (
        websiteBtn.getAttribute('href') === '' ||
        websiteBtn.getAttribute('href') === '/' ||
        websiteBtn.getAttribute('href') === '#'
      ) {
        websiteBtn.removeAttribute('href')
      }

      // Remove github link completely if href link does not exist
      if (
        githubBtn.getAttribute('href') === '' ||
        githubBtn.getAttribute('href') === '/' ||
        githubBtn.getAttribute('href') === '#'
      ) {
        githubBtn.removeAttribute('href')
      }

      break

    default:
      return
  }
}

// Function to open/close the mobile menu
function toggleList() {
  asideBtn.classList.toggle('is-active')
  asideMenu.classList.toggle('open')
  asideModal.classList.toggle('active')
  body.classList.toggle('active')
}

// Function to close the mobile menu if navigation links are clicked
function closeList() {
  asideBtn.classList.remove('is-active')
  asideMenu.classList.remove('open')
  asideModal.classList.remove('active')
  body.classList.remove('active')
}

// Function for outside clicks
function outsideClick(e) {
  // Close the mobile menu if clicked outside
  if (e.target == asideModal) {
    closeList()
  }

  // Close the project modal if clicked outside
  else if (e.target == projectModal) {
    closeModal()
  }
}
