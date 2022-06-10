'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Elements
const navLinks = document.querySelectorAll('.nav__link');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

const nav = document.querySelector('.nav');

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Solution with for()
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// Solution with forEach()
btnsOpenModal.forEach(btnOpenModal =>
  btnOpenModal.addEventListener('click', openModal)
);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Selecting elements
console.log(document.documentElement); //It returns HTMLCollection <html><head>....
console.log(document.head); // <head>...  </head>
console.log(document.body); // <body>...</body>

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

///////////////////////////////////////
// Creating and inserting elements

// Using .insertAdjacentHTML
// document.querySelector('h4').insertAdjacentHTML('beforeend', '<strong>inserted text</strong>')

// Using createElement, innerHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functtionality and analytics.'
message.innerHTML =
  'We use cookied for improved functtionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message); // Message is added as first child of <header> element
header.append(message); // Message is added as last child of <header> element
// header.append(message.cloneNode(true));

// Another way is using before and after
// header.before(message);
// header.after(message);

///////////////////////////////////////
// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //porque ya tenemos almacenado en variable "message"  Very modern JS
    // message.parentElement.removeChild(message); // Old way to remove element
  });

///////////////////////////////////////
// Syles
message.style.backgroundColor = '#37383d';
// message.style.width = '120px'; //px, %

console.log(message.style.color); //It doesn't return anything because color property is not a inline style. message when has been created doesn't have color property and it can not access to properties from styles
console.log(message.style.backgroundColor); //it returrns #37383d because is inline style

console.log(getComputedStyle(message).color); //To get styles from styles css file
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

message.style.display = 'none'; //Just to hide the element

// document.documentElement.style.setProperty('--color-primary', 'orangered');

///////////////////////////////////////
// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo.';

// Non-standard
console.log(logo.designer); //undefined because it not default property for img element
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'BankistCompany');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

///////////////////////////////////////
// Data Attributes: Special attributes, allows us to store  data in the UI (in the HTML markup). Always start with data-
// example data-version-number => to get the value the - are removed and it looks: versionNumber
console.log(logo.dataset.versionNumber);

///////////////////////////////////////
// Classess
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use this way:
// logo.className = 'new-logo'; //It will remove all the existing clases and it will add only one class = new-logo

///////////////////////////////////////
// Scroll-to
const bttnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

bttnScrollTo.addEventListener('click', function (event) {
  event.preventDefault();

  // get the coordinates
  const section1Coords = section1.getBoundingClientRect();
  // console.log(section1Coords);

  // getBoundingClientRect gives the value relative of the size of the viewport(la parte visible de acuerdo al tamanio)
  // Por ello cada que haces sroll los valores cambian
  // console.log(event.target.getBoundingClientRect()); //event.target means btnScrollTo

  // console.log('Current scroll (X/Y):', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // console.log(section1Coords);
  // window.scrollTo(section1Coords.left + window.pageXOffset, section1Coords.top + window.pageYOffset);

  // Scrolling nicer smooth effect
  // window.scrollTo({
  //   left: section1Coords.left + window.pageXOffset,
  //   top: section1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  // Modern way to do it the same, it works only on modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Events
const h1 = document.querySelector('h1');

// h1.addEventListener('click', function (e) {
//   alert('addEventListener: Great! you are reading the heading :D');
// });

const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');

  h1.removeEventListener('mouseenter', alertH1); // The event works only once and then is removed.
};

// Old way to do it:
// h1.onmouseenter = function (e) { //onmouseenter, click
//   alert('onmouseenter: Great! you are reading the heading :D');
// };

// Modern and best way to do it:
// h1.addEventListener('mouseenter', alertH1); //mouseenter, click

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Event propagation
// rgb(255,255,255) generate a random color
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget); //e.target indica el elemento donde se ha hecho click. Donde se ha hecho click

//   console.log(e.currentTarget === this);

//   // // stop propagation
//   // e.stopPropagation();   //but it's not recommended
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // this.style.backgroundColor = randomColor();
//   console.log('conaitiner', e.target);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   // this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target);
// });

///////////////////////////////////////
// Page Navigation
// Without delegation
// navLinks.forEach(navLink => {
//   navLink.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); //this is navLink
//     const sectionEl = document.querySelector(id);
//     sectionEl.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// With Event Delegation
// 1. Add event listener to common parent element
// 2. Determine whatt element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target); //e.target give exactly the event where it was clicked

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Going downwards: Child

// const h1 = document.querySelector('h1');
console.log('--------- CHILDREN ----------');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
console.log(h1.firstChild);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

///////////////////////////////////////
// Going upwards: Parents
console.log('--------- PARENTS ----------');
console.log(h1.parentNode); //h1 give me your node parents
console.log(h1.parentElement); // h1 give me your element parents

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)'; //It returns the H1 itself

///////////////////////////////////////
// Going sideways: siblings
console.log(h1.previousElementSibling); // Si h1 no tuviera previous element como hermano entonces retorna null
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// If we need more siblings, we can do it using parentElement
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (element) {
  //Modifying all siblings except h1
  if (element !== h1) {
    // element.style.transform = 'scale(0.5)';
  }
});

///////////////////////////////////////
// Tabbed component
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

// One way without delegation
// tabs.forEach(function (tab) {
//   tab.addEventListener('click', function (e) {
//     e.preventDefault();
//   });
// });

// Another way with delegation: We add the event click to the parent
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');
  if (clicked) {
    // Adding active tab class
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    // Activate content area
    tabsContent.forEach(tabContent =>
      tabContent.classList.remove('operations__content--active')
    );

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  }

  // if(!clicked) return; //another way
});

///////////////////////////////////////
// Menu fade animation

const handleHover = function (event, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(function (element) {
      if (element !== link) {
        element.style.opacity = opacity;
      }
    });

    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

// Another way to do it:
// Passing "argument" innto handler
// nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky navigation, one way: Not good for performance

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   const initialCoords = section1.getBoundingClientRect();
//   console.log(initialCoords);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

///////////////////////////////////////
// Sticky navigation, better way using Inttersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null, //el elemento cuando se intersectan
//   // threshold: 0.1, //the percentage to obser, to make something cuando suceda la interseccion (10% = 0.1) 10% que esta dentro el viewport. 0.2=20%
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);

//  const header = document.querySelector('. header');

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries; //first element entries[0]

  if (!entry.isIntersecting) {
    // the same like: entry.isIntersecting === false
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //cuando 0% del header es visible en la pantalla (viewport) entonces hacemos algo
  // rootMargin: '-90px', //margen outside of our element target, in this case of the header. Con threshold decimos hacer algo cuando header es 0 % visible, pero con root margin, le decimos hacer algo -90px antes q el header desaparezca (0%)

  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
// Reveal sections effect to be displayed

const allMainSections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
  const [entry] = entries; //entries[0]

  if (entry.isIntersecting === true) {
    entry.target.classList.remove('section--hidden');

    // Para que el elemento ya no sea observado, mejorando performance
    observer.unobserve(entry.target); //que elemento debe dejar de ser observado? entry.target
  }

  // if (!entry.isIntersecting) return; //another way
  // entry.target.classList.remove('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, //solo cuando la seccion sea visible 15% sera observado y se hace algo. Cuando intercede con el viewport en 15%
});

allMainSections.forEach(function (section) {
  // Para observar cada seccion usamos la funcion observe
  sectionObserver.observe(section);

  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]'); // Todas las imagenes que tengan data-scr <img data-src="">

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log('the entry');
  console.log(entry);

  if (entry.isIntersecting == true) {
    // Replace src with data-scr
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      //Cuando la imagen termine de cargarse 'load' => entonces quitamos lazy-img
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  }
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null, // to set up the view to all the viewport
  threshold: 0,
  rootMargin: '150px', //To make the image load a bit faster
});

imgTargets.forEach(function (img) {
  imgObserver.observe(img);
});

///////////////////////////////////////
// Slider

const mainSlider = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const sliderBtnLeft = document.querySelector('.slider__btn--left');
  const sliderBtnRight = document.querySelector('.slider__btn--right');
  let currentSlide = 0;
  const maxSlide = slides.length;

  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  // Functions
  const goToSlide = function (curSlide) {
    slides.forEach(function (slide, index) {
      // currrentSlide index 1= -100%, 0%, 100%, 200%, 300% (100% * index)
      slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });
  };

  // Next slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // Prev slide
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // Dots pager for the slider
  const dotContainer = document.querySelector('.dots');

  const createDots = function () {
    slides.forEach(function (slider, index) {
      //if in the parametres we use _ means parametre we don't use
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };

  const activateDot = function (slideNumber) {
    document.querySelectorAll('.dots__dot').forEach(function (dotElement) {
      dotElement.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slideNumber}"]`)
      .classList.add('dots__dot--active');
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0); // 0%, 100%, 200%, 300% (100% * index)
  };

  init();

  // Actions
  // To make the slider work with the left and right buttons from keyboard
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  sliderBtnRight.addEventListener('click', nextSlide);

  sliderBtnLeft.addEventListener('click', prevSlide);

  // One way without event delegation
  // document.querySelectorAll('.dots__dot').forEach(function (dot) {
  //   dot.addEventListener('click', function () {});
  // });

  // Another way with event delegation
  dotContainer.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('dots__dot')) {
      const currentSlide = e.target.dataset.slide; //= same const {slide} = e.target.dataset
      goToSlide(currentSlide);

      activateDot(currentSlide);
    }
  });
};

mainSlider();

///////////////////////////////////////
// Extra default function

// To verify if the HTMTL and javascript was loaded already
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree build!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// Default message displayed when the user leaves the page. Basically when close tab is clicked
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
