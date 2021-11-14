'use strict';
import dataSources from './data.js';

const appStart = () => {

  const templates = {
    autorsList: Handlebars.compile(document.querySelector('#template-autors-list').innerHTML),
    booksList: Handlebars.compile(document.querySelector('#template-books-list').innerHTML),
    titlesProductInCart: Handlebars.compile(document.querySelector('#template-titles-list').innerHTML)
  };

  const buttonListener = () => {
    const booksAnchor = [...document.querySelectorAll('a[data-target*="books"]')];
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdown = document.querySelector('.dropdown');
    const accountBtn = document.querySelector('.fa-user-alt');
    const modal = document.querySelector('.modal-wrap');
    const modalCloseBtn = document.querySelector('.modalClose');
    const modalBtn = document.querySelector('.modal');
    const modalRead = document.querySelector('.modal-read');
    const cart = document.querySelector('.cart');
    let lastTarget = null;

    booksAnchor.forEach(anchor => {
      anchor.addEventListener('click', () => {
        window.scrollTo({
          top: document.querySelector('.books').offsetTop - 64,
          behavior: 'smooth'
        });
      });
    });

    document.querySelector('li[data-target*="recommended"]').addEventListener('click', () => {
      window.scrollTo({
        top: document.querySelector('.second-image').offsetTop - 64,
        behavior: 'smooth'
      });
    });

    document.querySelector('li[data-target*="contact"]').addEventListener('click', () => {
      window.scrollTo({
        top: document.querySelector('.order-3').offsetTop - 64,
        behavior: 'smooth'
      });
    });
  
    const blurToggler = () => {
      [...document.body.children].forEach(elem => {
        if(elem.classList != ''  || elem.localName == 'footer') {
          elem.classList.toggle('blur');
        }
      });
      modal.classList.remove('blur');
    };
    
    accountBtn.addEventListener('click', () => {
      blurToggler();
      modal.classList.add('active');
      modalBtn.classList.add('active');
    });
  
    modalCloseBtn.addEventListener('click', () => {
      blurToggler();
      modal.classList.remove('active');
      modalBtn.classList.remove('active');
      modalRead.classList.remove('active');
    });
  
    const showRemover = (list) => {
      for(let li of list) {
        li.classList.remove('show');
      }
    };
  
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
          const id =  e.target.getAttribute('data-id');
          const title = dataSources.booksList[id].title;
          const discribe = dataSources.booksList[id].description;
          const amount = dataSources.booksList[id].amount;
          const price = dataSources.booksList[id].price;
  
          document.querySelector('.modal-read h2').innerHTML = title;
          document.querySelector('.modal-read p').innerHTML = discribe;
          document.querySelector('.add-button').setAttribute('data-id', id);
  
          if(dataSources.booksList[id].amount == 0) {
            document.querySelector('.add-button').classList.add('lack');
          } else {
            document.querySelector('.add-button').classList.remove('lack');
          }
          document.querySelector('.stock').innerHTML = `In stock: ${amount}`;
          document.querySelector('.price').innerHTML = `${price} PLN`;
        } else if(e.target == lastTarget) {
          e.target.preventDefault;
          booksList.forEach(box => {
            box.classList.remove('hide');
            lastTarget = null;
          });
        } else if(e.target.getAttribute('data-autor')) {
          
          booksList.filter(box => {
            const autor = box.getAttribute('data-autor');
            if(autor.includes(`${e.target.getAttribute('data-autor')}`)) {
              box.classList.remove('hide');
            } else {
              box.classList.add('hide');
            }
          });
  
          lastTarget = e.target;
        } else if(e.target.getAttribute('data-type')) {
          booksList.filter(box => {
            const type = box.getAttribute('data-type');
            if(type.includes(`${e.target.getAttribute('data-type')}`)) {
              box.classList.remove('hide');
            } else {
              box.classList.add('hide');
            }
          });
        } else if((e.target.classList.contains('add-button')) & (!e.target.classList.contains('lack'))) {
          addToCart(e.target.getAttribute('data-id'));
        } else if(e.target.classList.contains('fa-backspace')) {
          removeFromCart(e.target.parentNode.innerText);
        }
      } else {
        e.target.preventDefault;
        const showedList = [...document.querySelectorAll('.show')];
        if(e.target.classList.contains('navbar-links') || e.target.classList.contains('dropdown')) {
          dropdown.classList.toggle('show');
          dropdownMenu.classList.toggle('show');
          cart.classList.remove('active');
          showRemover(showedList);
        } else if(e.target.classList.contains('navbar-link')) {
          console.log(e.target);
          e.target.classList.toggle('show');
          showRemover(showedList);
        } else if(e.target.classList.contains('hamburger')) {
          document.querySelector('.navbar-nav').classList.toggle('active');
          document.querySelector('.navbar-buttons').classList.toggle('active');
          showRemover(showedList);
        } else if((e.target.classList.contains('fa-shopping-cart')) || (e.target.classList.contains('amount'))) {
          document.querySelector('.cartBtn').classList.toggle('active');
          cart.classList.toggle('active');
          showRemover(showedList);
        } else if(e.target.classList.contains('fa-user-alt')) {
          e.target.parentNode.classList.toggle('show');
          showRemover(showedList);
        } 
      }
    });
  };
  
  const sliderHandler = () => {
    let current = null;
    let prev = null;
    let next = null;
    let didSlideEnd = true;
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');
  
    const currentSlideCheck = (slideAmount, current) => {
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
    };
  
    const changeSlideOnNext = () => {
      didSlideEnd = false;
      const slideList = [...document.querySelectorAll('.slider-item')];
      slideList.forEach((elem, id) => {
        if(elem.classList.contains('current')) {
          current = id;
        }
      });
  
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
    };
  
    let regularSlideChange = null;
  
    leftBtn.addEventListener('click', () => {
      if(didSlideEnd){
        didSlideEnd = false;
        const slideList = [...document.querySelectorAll('.slider-item')];
        slideList.forEach((elem, id) => {
          if(elem.classList.contains('current')) {
            current = id;
          }
        });
        
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
    });
  
    rightBtn.addEventListener('click', () => {
      if(didSlideEnd){
        changeSlideOnNext();
        clearInterval(regularSlideChange);
        regularSlideChange = setInterval(changeSlideOnNext, 5000);
      }
    });
  
    regularSlideChange = setInterval(changeSlideOnNext, 5000);
  };
  
  const autorsListCreate = autors => {
    const autorsList = document.querySelector('.autors-list');
    const generatedHTMLAutors = templates.autorsList({autors});
    autorsList.insertAdjacentHTML('beforeend', generatedHTMLAutors);
  };
  
  const booksListCreate = books => {
    const booksList = document.querySelector('.books-list');
    const generatedHTMLBooks = templates.booksList({books});
    booksList.insertAdjacentHTML('beforeend', generatedHTMLBooks);
  };
  
  const cartAktualization = (elem, type) => {
    const addButtonList = document.querySelectorAll('.add-button');
    const amountProduct = dataSources.cart.amountOfProduct;
    document.querySelector('.amount').innerHTML = amountProduct;
    document.getElementById('amountOfProduct').innerHTML = `Amount of product: ${amountProduct}`;
    document.querySelector('.stock').innerHTML = `In stock: ${dataSources.booksList[elem].amount}`;
    document.getElementById('subtotal').innerHTML = `Subtotal: ${dataSources.cart.price.toFixed(2)}`;
    document.getElementById('deliverFee').innerHTML = `Deliverdy cost: ${dataSources.cart.deliveryFee}`;
    document.getElementById('totalPrice').innerHTML = `Total price: ${dataSources.cart.totalPrice.toFixed(2)}`;
  
    const titlesOfProduct = document.getElementById('titlesOfProducts');
    if(type == 'add') {
      const titleData = {id: elem, title: dataSources.booksList[elem].title};
      const generatedHTMLTitles = templates.titlesProductInCart(titleData);
      titlesOfProduct.insertAdjacentHTML('beforeend', generatedHTMLTitles);
    } else {
      titlesOfProduct.innerHTML = 'Product in cart:';
      dataSources.cart.products.forEach(product => {
        const titleData = {id: product.id, title: dataSources.booksList[product.id].title};
        const generatedHTMLTitles = templates.titlesProductInCart(titleData);
        titlesOfProduct.insertAdjacentHTML('beforeend', generatedHTMLTitles);
      });
    }
  
    if(dataSources.booksList[elem].amount == 0) {
      addButtonList.forEach(btn => {
        if(btn.getAttribute('data-id') == elem) {
          btn.classList.add('lack');
        }
      });
    } else {
      addButtonList.forEach(btn => {
        if(btn.getAttribute('data-id') == elem) {
          btn.classList.remove('lack');
        }
      });
    }
  };

  const deliveryCost = () => {
    if(dataSources.cart.amountOfProduct == 0) {
      dataSources.cart.totalPrice = 0;
      dataSources.cart.deliveryFee = 0;
    } else if(dataSources.cart.amountOfProduct < 3) {
      dataSources.cart.deliveryFee = 20;
      dataSources.cart.totalPrice = dataSources.cart.price + dataSources.cart.deliveryFee;
    } else {
      dataSources.cart.deliveryFee = 0;
      dataSources.cart.totalPrice = dataSources.cart.price;
    }
  };
  
  const addToCart = id => {
    let alreadyInCart = false;
    dataSources.cart.products.forEach(elem => {
      if(elem.id == id) {
        alreadyInCart = true;
      }
    });
  
    if(!alreadyInCart) { 
      dataSources.booksList[id].amount -= 1;
      dataSources.cart.amountOfProduct += 1;
      const title = dataSources.booksList[id].title;
      const price = dataSources.booksList[id].price;
      const product = {id, title, price};
      dataSources.cart.price += product.price;
      dataSources.cart.products.push(product);
  
      deliveryCost();
      cartAktualization(id, 'add');
    } else {
      alert('This book is already in cart');
    }
  };
  
  const removeFromCart = title => {
    let idInBooksList = null;
    dataSources.cart.products.forEach((elem, elemId) => {

      if(title == elem.title) {
        idInBooksList = elem.id;
        dataSources.cart.products.splice(elemId, 1);
        dataSources.cart.price -= elem.price;
      }
    });
    dataSources.cart.amountOfProduct -= 1;
    dataSources.booksList[idInBooksList].amount += 1;

    if(dataSources.cart.amountOfProduct == 0) {
      dataSources.cart.price = 0;
    }
  
    deliveryCost();
    cartAktualization(idInBooksList, 'remove');
  };
  
  autorsListCreate(dataSources.autorsList);
  booksListCreate(dataSources.booksList);
  sliderHandler();
  buttonListener();
};
appStart();
