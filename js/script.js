const navbarButtonListener = () => {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const dropdown = document.querySelector('.dropdown');

  const showRemover = (list) => {
    for(li of list) {
      li.classList.remove('show');
    }
  }

  document.body.addEventListener('click', function(e){
    if(!e.target.classList.contains('menu')){
      const showedList = [...document.querySelectorAll('.show')];
      //console.log(e.target);
      showRemover(showedList);
    } else {
      //console.log(e.target);
      const showedList = [...document.querySelectorAll('.show')];
      if(e.target.classList.contains('navbar-links') || e.target.classList.contains('dropdown')) {
        dropdown.classList.toggle('show');
        dropdownMenu.classList.toggle('show');
        showRemover(showedList);
      } else if(e.target.classList.contains('navbar-link')) {
        e.target.classList.toggle('show');
        showRemover(showedList);
      } else if(e.target.classList.contains('hamburger')) {
        document.querySelector('.navbar-nav').classList.toggle('active');
        document.querySelector('.navbar-buttons').classList.toggle('active');
        showRemover(showedList);
      } else if(e.target.classList.contains('fa-shopping-cart')) {
        e.target.parentNode.classList.toggle('show');
        showRemover(showedList);
      } else if(e.target.classList.contains('fa-user-alt')) {
        e.target.parentNode.classList.toggle('show');
        showRemover(showedList);
      }
    
    }
  })
}

const sliderHandler = () => {
  let current = null;
  let prev = null;
  let next = null;
  let didSlideEnd = true;
  const leftBtn = document.querySelector('.left');
  const rightBtn = document.querySelector('.right');

  currentSlideCheck = (slideAmount, current) => {
    if(current == slideAmount - 1) {
      prev = slideAmount - 2;
      next = 0;
    } else if(current == 0) {
      prev = slideAmount - 1;
      next = current + 1;
    } else {
      next = current + 1;
      prev = current - 1;
    }
  }

  changeSlideOnNext = () => {
    didSlideEnd = false;
    const slideList = [...document.querySelectorAll('.slider-item')];
    slideList.forEach((elem, id) => {
      if(elem.classList.contains('current')) {
        current = id;
      }
    })

    currentSlideCheck(slideList.length, current);

    slideList[current].classList.add('prev');
    slideList[prev].classList.remove('prev');
    slideList[prev].classList.add('hide');
    slideList[prev].classList.add('next');
    slideList[next].classList.add('current');
    slideList[next].classList.remove('next');

    setTimeout( function() {
      slideList[current].classList.remove('current');
      slideList[prev].classList.remove('hide');
      didSlideEnd = true;
    }, 600);
  }

  leftBtn.addEventListener('click', () => {
    if(didSlideEnd){
      didSlideEnd = false;
      const slideList = [...document.querySelectorAll('.slider-item')];
      slideList.forEach((elem, id) => {
        if(elem.classList.contains('current')) {
          current = id;
        }
      })
      
      currentSlideCheck(slideList.length, current);

      slideList[current].classList.add('next');
      slideList[prev].classList.add('current');
      slideList[next].classList.remove('next');
      slideList[next].classList.add('hide');
      slideList[next].classList.add('prev');
      slideList[prev].classList.remove('prev');

      setTimeout( function() {
        slideList[current].classList.remove('current');
        slideList[next].classList.remove('hide');
        didSlideEnd = true;
      }, 600);
      clearInterval(regularSlideChange);
      regularSlideChange = setInterval(changeSlideOnNext, 5000);
    } 
  })

  rightBtn.addEventListener('click', () => {
    if(didSlideEnd){
      changeSlideOnNext();
      clearInterval(regularSlideChange);
      regularSlideChange = setInterval(changeSlideOnNext, 5000);
    }
  })

  regularSlideChange = setInterval(changeSlideOnNext, 5000);
}

const autorsListCreate = (autors) => {
  const autorsList = document.querySelector('.autors-list');

  autors.forEach(autor => {
    const aElem = document.createElement("a");
    aElem.innerHTML = autor;
    aElem.href = `#${autor}`;
    autorsList.appendChild(aElem);
  })
  console.log('done');
}

autorsListCreate(dataSources.autorsList);
sliderHandler()
navbarButtonListener()
