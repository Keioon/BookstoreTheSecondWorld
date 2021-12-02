'use strict';
import dataSources from './data.js';
import {classesToAdd, select, templates} from './settings.js';

const appStart = () => {
  const buttonListener = () => {
    const booksAnchor = [...document.querySelectorAll(select.anchors.booksList)];
    const dropdownMenu = document.querySelector(select.items.dropdownMenu);
    const dropdown = document.querySelector(select.items.dropdown);
    const accountBtn = document.querySelector(select.items.user);
    const modal = document.querySelector(select.modals.modalWrap);
    const modalCloseBtn = document.querySelector(select.modals.modalClose);
    const modalBtn = document.querySelector(select.modals.modal);
    const modalRead = document.querySelector(select.modals.modalRead);
    const cart = document.querySelector(select.items.cart);
    let lastTarget = null;

    booksAnchor.forEach(anchor => {
      anchor.addEventListener('click', () => {
        window.scrollTo({
          top: document.querySelector(select.items.books).offsetTop - 64,
          behavior: 'smooth'
        });
      });
    });

    document.querySelector(select.anchors.recommended).addEventListener('click', () => {
      window.scrollTo({
        top: document.querySelector(select.items.secondImage).offsetTop - 64,
        behavior: 'smooth'
      });
    });

    document.querySelector(select.anchors.contact).addEventListener('click', () => {
      window.scrollTo({
        top: document.querySelector(select.items.order3).offsetTop - 64,
        behavior: 'smooth'
      });
    });
  
    const blurToggler = () => {
      [...document.body.children].forEach(elem => {
        if(elem.classList != ''  || elem.localName == 'footer') {
          elem.classList.toggle(classesToAdd.blur);
        }
      });
      modal.classList.remove(classesToAdd.blur);
    };
    
    accountBtn.addEventListener('click', () => {
      blurToggler();
      modal.classList.add(classesToAdd.active);
      modalBtn.classList.add(classesToAdd.active);
    });
  
    modalCloseBtn.addEventListener('click', () => {
      blurToggler();
      modal.classList.remove(classesToAdd.active);
      modalBtn.classList.remove(classesToAdd.active);
      modalRead.classList.remove(classesToAdd.active);
    });
  
    const showRemover = (list) => {
      for(let li of list) {
        li.classList.remove(classesToAdd.show);
      }
    };
  
    document.body.addEventListener('click', function(e){
      if(!e.target.classList.contains(classesToAdd.menu)){
        e.target.preventDefault;
        const showedList = [...document.querySelectorAll(select.list.show)];
        const booksList = [...document.querySelectorAll(select.list.box)];
  
        showRemover(showedList);
  
        if(e.target.classList.contains(classesToAdd.read)) {
          e.target.preventDefault;
          blurToggler();
          modal.classList.add(classesToAdd.active);
          modalRead.classList.add(classesToAdd.active);
          const id =  e.target.getAttribute('data-id');
          const title = dataSources.booksList[id].title;
          const discribe = dataSources.booksList[id].description;
          const amount = dataSources.booksList[id].amount;
          const price = dataSources.booksList[id].price;
  
          document.querySelector(select.modals.title).innerHTML = title;
          document.querySelector(select.modals.describe).innerHTML = discribe;
          console.log(document.querySelector(select.buttons.add).setAttribute('data-id', id));
          document.querySelector(select.buttons.add).setAttribute('data-id', id);
  
          // console.log('i');

          if(dataSources.booksList[id].amount == 0) {
            document.querySelector(select.buttons.add).classList.add(classesToAdd.lack);
          } else {
            document.querySelector(select.buttons.add).classList.remove(classesToAdd.lack);
          }
          document.querySelector(select.cart.stock).innerHTML = `In stock: ${amount}`;
          document.querySelector(select.cart.price).innerHTML = `${price} PLN`;
        } else if(e.target == lastTarget) {
          e.target.preventDefault;
          booksList.forEach(box => {
            box.classList.remove(classesToAdd.hide);
            lastTarget = null;
          });
        } else if(e.target.getAttribute('data-autor')) {
          
          booksList.filter(box => {
            const autor = box.getAttribute('data-autor');
            if(autor.includes(`${e.target.getAttribute('data-autor')}`)) {
              box.classList.remove(classesToAdd.hide);
            } else {
              box.classList.add(classesToAdd.hide);
            }
          });
  
          lastTarget = e.target;
        } else if(e.target.getAttribute('data-type')) {
          booksList.filter(box => {
            const type = box.getAttribute('data-type');
            if(type.includes(`${e.target.getAttribute('data-type')}`)) {
              box.classList.remove(classesToAdd.hide);
            } else {
              box.classList.add(classesToAdd.hide);
            }
          });
        } else if((e.target.classList.contains(classesToAdd.addBtn)) & (!e.target.classList.contains(classesToAdd.lack))) {
          addToCart(e.target.getAttribute('data-id'));
        } else if(e.target.classList.contains(select.buttons.removeBtn)) {
          removeFromCart(e.target.parentNode.innerText);
        }
      } else {
        e.target.preventDefault;
        const showedList = [...document.querySelectorAll(select.list.show)];
        if(e.target.classList.contains(select.items.navbarLinks) || e.target.classList.contains(classesToAdd.dropdown)) {
          dropdown.classList.toggle(classesToAdd.show);
          dropdownMenu.classList.toggle(classesToAdd.show);
          document.querySelector(select.buttons.cartBtn).classList.remove(classesToAdd.active);
          cart.classList.remove(classesToAdd.active);
          showRemover(showedList);
        } else if(e.target.classList.contains(select.items.navbarLink)) {
          e.target.classList.toggle(classesToAdd.show);
          showRemover(showedList);
        } else if(e.target.classList.contains(select.items.hamburger)) {
          document.querySelector(select.items.navbarNav).classList.toggle(classesToAdd.active);
          document.querySelector(select.buttons.navbarButtons).classList.toggle(classesToAdd.active);
          showRemover(showedList);
        } else if((e.target.classList.contains(select.items.shopingCart)) || (e.target.classList.contains(classesToAdd.amount))) {
          document.querySelector(select.buttons.cartBtn).classList.toggle(classesToAdd.active);
          cart.classList.toggle(classesToAdd.active);
          showRemover(showedList);
        } else if(e.target.classList.contains(classesToAdd.user)) {
          e.target.parentNode.classList.toggle(classesToAdd.show);
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
    const leftBtn = document.querySelector(select.buttons.left);
    const rightBtn = document.querySelector(select.buttons.right);
  
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
      const slideList = [...document.querySelectorAll(select.items.slides)];
      slideList.forEach((elem, id) => {
        if(elem.classList.contains(classesToAdd.current)) {
          current = id;
        }
      });
  
      currentSlideCheck(slideList.length, current);
  
      slideList[current].classList.add(classesToAdd.prev);
      slideList[prev].classList.remove(classesToAdd.prev);
      slideList[prev].classList.add(classesToAdd.hide);
      slideList[prev].classList.add(classesToAdd.next);
      slideList[next].classList.add(classesToAdd.current);
      slideList[next].classList.remove(classesToAdd.next);
  
      setTimeout( function() {
        slideList[current].classList.remove(classesToAdd.current);
        slideList[prev].classList.remove(classesToAdd.hide);
        didSlideEnd = true;
      }, 600);
    };
  
    let regularSlideChange = null;
  
    leftBtn.addEventListener('click', () => {
      if(didSlideEnd){
        didSlideEnd = false;
        const slideList = [...document.querySelectorAll(select.items.slides)];
        slideList.forEach((elem, id) => {
          if(elem.classList.contains(classesToAdd.current)) {
            current = id;
          }
        });
        
        currentSlideCheck(slideList.length, current);
  
        slideList[current].classList.add(classesToAdd.next);
        slideList[prev].classList.add(classesToAdd.current);
        slideList[next].classList.remove(classesToAdd.next);
        slideList[next].classList.add(classesToAdd.hide);
        slideList[next].classList.add(classesToAdd.prev);
        slideList[prev].classList.remove(classesToAdd.prev);
  
        setTimeout( function() {
          slideList[current].classList.remove(classesToAdd.current);
          slideList[next].classList.remove(classesToAdd.hide);
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
    const autorsList = document.querySelector(select.list.autors);
    const generatedHTMLAutors = templates.autorsList({autors});
    autorsList.insertAdjacentHTML('beforeend', generatedHTMLAutors);
  };
  
  const booksListCreate = books => {
    const booksList = document.querySelector(select.list.books);
    const generatedHTMLBooks = templates.booksList({books});
    booksList.insertAdjacentHTML('beforeend', generatedHTMLBooks);
  };
  
  const cartAktualization = (elem, type) => {
    const addButtonList = document.querySelectorAll(select.buttons.add);
    const amountProduct = dataSources.cart.amountOfProduct;
    document.querySelector(select.cart.amount).innerHTML = amountProduct;
    document.getElementById(select.cart.product).innerHTML = `Amount of product: ${amountProduct}`;
    document.querySelector(select.cart.stock).innerHTML = `In stock: ${dataSources.booksList[elem].amount}`;
    document.getElementById(select.cart.subtotal).innerHTML = `Subtotal: ${dataSources.cart.price.toFixed(2)}`;
    document.getElementById(select.cart.delivery).innerHTML = `Deliverdy cost: ${dataSources.cart.deliveryFee}`;
    document.getElementById(select.cart.total).innerHTML = `Total price: ${dataSources.cart.totalPrice.toFixed(2)}`;
  
    const titlesOfProduct = document.getElementById(select.cart.productList);
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
          btn.classList.add(classesToAdd.lack);
        }
      });
    } else {
      addButtonList.forEach(btn => {
        if(btn.getAttribute('data-id') == elem) {
          btn.classList.remove(classesToAdd.lack);
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
    console.log(dataSources.cart);
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