const menuToggle = document.querySelector('.main-nav__toggle');
const mainNavList = document.querySelector('.main-nav__list');
const mainNavWrapper = document.querySelector('.main-nav__wrapper');
const catalogTab = document.querySelectorAll('.catalog__tab');
const catalogContent = document.querySelectorAll('.catalog__content');
const placesLinkGreece = document.querySelector('.places__link--greece');
const placesLinkAlbania = document.querySelector('.places__link--albania');
const placesLinkMacedonia = document.querySelector('.places__link--macedonia');
const placesLinkMontenegro = document.querySelector('.places__link--montenegro');
const placesLinkCroatia = document.querySelector('.places__link--croatia');
const buttonPopup = document.querySelectorAll('.button--popup');
const popupForm = document.querySelector('.popup__form');
const succsess = document.querySelector('.success');
const popupClose = document.querySelectorAll('.popup__close');
const popup = document.querySelectorAll('.popup');


const onFormEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    popupForm.style.display = 'none';
    succsess.style.display = 'none';
  }
};

buttonPopup.forEach((item) =>  {
  item.addEventListener('click', () => {
    popupForm.style.display = 'block';
  })
});

popupClose.forEach((item) => {
  item.addEventListener('click', () => {
    popupForm.style.display = 'none';
    succsess.style.display = 'none';
  })
})

document.addEventListener('keydown', onFormEscKeydown);

popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  popupForm.style.display = 'none';
  succsess.style.display = 'flex';
})

mainNavList.classList.remove('main-nav__list--nojs');
mainNavWrapper.classList.remove('main-nav__wrapper--nojs');
mainNavList.classList.remove('main-nav__list--opened');

menuToggle.addEventListener('click', () => {
  mainNavList.classList.toggle('main-nav__list--opened');
})


catalogTab.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function() {
      let currentTab = item;
      let tabId = currentTab.getAttribute('data-tab');
      let currentContent = document.querySelector(tabId);

      if( !currentTab.classList.contains('catalog__tab--active') ) {
          catalogTab.forEach(function(item) {
              item.classList.remove('catalog__tab--active');
          });

          catalogContent.forEach(function(item) {
              item.classList.remove('catalog__content--active');
          });

          currentTab.classList.add('catalog__tab--active');
          currentContent.classList.add('catalog__content--active');
      }
  });
}

placesLinkGreece.addEventListener('click', () => {
  catalogTab.forEach(function(item) {
    item.classList.remove('catalog__tab--active');

    if (item.getAttribute('data-tab') === '#greece') {
      item.classList.add('catalog__tab--active')
    }
  });
  catalogContent.forEach(function(item) {
    item.classList.remove('catalog__content--active');

    if (item.classList.contains('catalog__content--greece')) {
      item.classList.add('catalog__content--active')
    }
  });
});

placesLinkAlbania.addEventListener('click', () => {
  catalogTab.forEach(function(item) {
    item.classList.remove('catalog__tab--active');

    if (item.getAttribute('data-tab') === '#albania') {
      item.classList.add('catalog__tab--active')
    }
  });
  catalogContent.forEach(function(item) {
    item.classList.remove('catalog__content--active');

    if (item.classList.contains('catalog__content--albania')) {
      item.classList.add('catalog__content--active')
    }
  });
});

placesLinkMacedonia.addEventListener('click', () => {
  catalogTab.forEach(function(item) {
    item.classList.remove('catalog__tab--active');

    if (item.getAttribute('data-tab') === '#macedonia') {
      item.classList.add('catalog__tab--active')
    }
  });
  catalogContent.forEach(function(item) {
    item.classList.remove('catalog__content--active');

    if (item.classList.contains('catalog__content--macedonia')) {
      item.classList.add('catalog__content--active')
    }
  });
});

placesLinkMontenegro.addEventListener('click', () => {
  catalogTab.forEach(function(item) {
    item.classList.remove('catalog__tab--active');

    if (item.getAttribute('data-tab') === '#montenegro') {
      item.classList.add('catalog__tab--active')
    }
  });
  catalogContent.forEach(function(item) {
    item.classList.remove('catalog__content--active');

    if (item.classList.contains('catalog__content--montenegro')) {
      item.classList.add('catalog__content--active')
    }
  });
});

placesLinkCroatia.addEventListener('click', () => {
  catalogTab.forEach(function(item) {
    item.classList.remove('catalog__tab--active');

    if (item.getAttribute('data-tab') === '#croatia') {
      item.classList.add('catalog__tab--active')
    }
  });
  catalogContent.forEach(function(item) {
    item.classList.remove('catalog__content--active');

    if (item.classList.contains('catalog__content--croatia')) {
      item.classList.add('catalog__content--active')
    }
  });
});
