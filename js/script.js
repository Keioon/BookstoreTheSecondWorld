const navbarButtonListener = () => {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const dropdown = document.querySelector('.dropdown');
  // const hamburger = document.querySelector('.navbar-hamburger');
  const navbarLinksArray = [...document.querySelectorAll('.navbar-nav li')];
  console.log(navbarLinksArray);

  const showRemover = (list) => {
    for(li of list) {
      li.classList.remove('show');
    }
  }

  document.body.addEventListener('click', function(e){
    if(!e.target.classList.contains('menu')){
      const showedList = [...document.querySelectorAll('.show')];
      showRemover(showedList);
      console.log(e.target);
    } else {
      const showedList = [...document.querySelectorAll('.show')];
      if(e.target.classList.contains('navbar-links') || e.target.classList.contains('dropdown')) {
        dropdown.classList.toggle('show');
        dropdownMenu.classList.toggle('show');
        showRemover(showedList);
      } else if(e.target.classList.contains('navbar-link')) {
        console.log(e.target);
        e.target.classList.toggle('show');
        showRemover(showedList);
      } else if(e.target.classList.contains('fas') || e.target.classList.contains('hamburger')) {
        console.log(e.target);
        document.querySelector('.navbar-nav').classList.toggle('active');
        document.querySelector('.navbar-buttons').classList.toggle('active');

        showRemover(showedList);
      }
    
    }
  })
}

const sliderHandler = () => {
  let currentSlide = null;
  let prevSlide = null;
  let nextSlide = null;
  const leftBtn = document.querySelector('.left');
  const rightBtn = document.querySelector('.right');
  const slideList = [...document.querySelectorAll('.slider-item')];

  const currentSlideCheck = () => {
    slideList.forEach((elem, id) => {
      if(elem.classList.contains('current')) {
        currentSlide = id;
        prevSlide = currentSlide - 1;
        nextSlide = currentSlide + 1
      }
      if(prevSlide < 0) {
        prevSlide = slideList.length -1;
      } else if(nextSlide > slideList.length -1) {
        nextSlide = 0;
      }
    })
  }


  leftBtn.addEventListener('click', () => {
    currentSlideCheck();
    console.log(currentSlide);

    slideList.forEach(slide => slide.classList.remove('next'));

    slideList[currentSlide].classList.add('next');
    slideList[currentSlide].classList.remove('current');
    slideList[prevSlide].classList.add('current');
    console.log(leftBtn);
  })

  rightBtn.addEventListener('click', () => {
    currentSlideCheck();
    console.log(currentSlide);
    
    slideList.forEach(slide => slide.classList.remove('prevHide'));
    slideList[currentSlide].classList.add('prevHide');
    slideList[currentSlide].classList.remove('current');
    slideList[nextSlide].classList.add('current');
    console.log(rightBtn);
  })

}

sliderHandler()
navbarButtonListener()
