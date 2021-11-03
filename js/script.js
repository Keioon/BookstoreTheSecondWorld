const buttonListener = () => {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const dropdown = document.querySelector('.dropdown');
  const accountBtn = document.querySelector(".fa-user-alt");
  const modal = document.querySelector('.modal-wrap');
  const modalCloseBtn = document.querySelector('.modalClose')
  const modalBtn = document.querySelector('.modal');
  const modalRead = document.querySelector('.modal-read');
  let lastTarget = null;
  // const readButtons = document.querySelectorAll('.read-button');
  // console.log(readButtons);;

  blurToggler = () => {
    [...document.body.children].forEach(elem => {
      if(elem.classList != ""  || elem.localName == "footer") {
        elem.classList.toggle('blur');
      }
    })
    modal.classList.remove('blur');
  }
  
  accountBtn.addEventListener('click', () => {
    blurToggler();
    modal.classList.add('active');
    modalBtn.classList.add('active');
  })

  modalCloseBtn.addEventListener('click', () => {
    blurToggler();
    modal.classList.remove('active');
    modalBtn.classList.remove('active');
    modalRead.classList.remove('active');
  })

  showRemover = (list) => {
    for(li of list) {
      li.classList.remove('show');
    }
  }

  document.body.addEventListener('click', function(e){
    if(!e.target.classList.contains('menu')){
      e.target.preventDefault;
      const showedList = [...document.querySelectorAll('.show')];
      const booksList = [...document.querySelectorAll('.box')];

      showRemover(showedList);

      if(e.target.classList.contains('read-button')) {
        e.target.preventDefault;
        blurToggler();
        modal.classList.add('active');
        modalRead.classList.add('active');
        const id =  e.target.getAttribute("data-id");
        const title = dataSources.booksList[id].title;
        const discribe = dataSources.booksList[id].description;
        const amount = dataSources.booksList[id].amount;
        const price = dataSources.booksList[id].price;

        document.querySelector('.modal-read h2').innerHTML = title;
        document.querySelector('.modal-read p').innerHTML = discribe;
        document.querySelector('.add-button').setAttribute('data-id', id);
        if(dataSources.booksList[id].amount == 0) {
          document.querySelector('.add-button').classList.add('lack');
        }
        document.querySelector('.stock').innerHTML = `In stock: ${amount}`;
        document.querySelector('.price').innerHTML = `${price} PLN`;
      } else if(e.target == lastTarget) {
        e.target.preventDefault;
        booksList.forEach(box => {
          box.classList.remove('hide');
          lastTarget = null;
        })
      } else if(e.target.getAttribute("data-autor")) {
        e.target.preventDefault;
        booksList.filter(box => {
          const autor = box.getAttribute("data-autor");
          if(autor.includes(`${e.target.getAttribute("data-autor")}`)) {
            box.classList.remove('hide');
          } else {
            box.classList.add('hide');
          }
        });
        lastTarget = e.target;
        console.log(lastTarget);
      } else if(e.target.getAttribute("data-type")) {
        e.target.preventDefault;
        booksList.filter(box => {
          const type = box.getAttribute("data-type");
          if(type.includes(`${e.target.getAttribute("data-type")}`)) {
            //autor.includes(`${e.target.getAttribute("data-autor")}`)
            //e.target.getAttribute("data-autor");
            box.classList.remove('hide');
          } else {
            box.classList.add('hide');
          }
        });
      } 
    } else {
      e.target.preventDefault;
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

const autorsListCreate = autors => {
  const autorsList = document.querySelector('.autors-list');

  autors.forEach(autor => {
    const aElem = document.createElement("a");
    aElem.innerHTML = autor;
    aElem.setAttribute("data-autor", autor);
    autorsList.appendChild(aElem);
  })
}

const booksListCreate = books => {
  const booksList = document.querySelector('.books-list');
  books.forEach(elem => {
    const box = document.createElement('div');
    box.classList.add('box'); 
    box.setAttribute('data-id', elem.id);
    box.setAttribute('data-type', elem.type);
    box.setAttribute('data-autor', elem.autor);

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const img = document.createElement('img');
    img.src = elem.img;
    cardImage.appendChild(img);
    box.appendChild(cardImage);

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');

    const title = document.createElement('h2');
    title.innerHTML = elem.title;
    textDiv.appendChild(title);

    const boxButtons = document.createElement('div');
    boxButtons.classList.add('box-buttons');
    const addBtn = document.createElement('button');
    if(elem.amount == 0) {
      addBtn.classList.add('lack')
    } 
    addBtn.classList.add('add-button')
    addBtn.setAttribute('data-id', elem.id)

    addBtn.innerHTML = "Add to Cart";
    boxButtons.appendChild(addBtn);

    const readBtn = document.createElement('button');
    readBtn.classList.add('read-button');
    readBtn.setAttribute('data-id', elem.id)
    readBtn.innerHTML = "Read more";

    boxButtons.appendChild(readBtn);
    textDiv.appendChild(boxButtons);
    
    box.appendChild(textDiv);
    booksList.appendChild(box);
  })
}

autorsListCreate(dataSources.autorsList);
booksListCreate(dataSources.booksList)
sliderHandler()
buttonListener()
