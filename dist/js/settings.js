export const classesToAdd = {
  active: 'active',
  addBtn: 'add-button',
  amount: 'amount',
  blur: 'blur',
  current: 'current',
  dropdown: 'dropdown',
  hide: 'hide',
  lack: 'lack',
  menu: 'menu',
  next: 'next',
  prev: 'prev',
  read: 'read-button',
  show: 'show',
  user: 'fa-user-alt'
};

export const select = {
  anchors: {
    booksList: 'a[data-target*="books"]',
    contact: 'li[data-target*="contact"]',
    recommended: 'li[data-target*="recommended"]'
  },
  buttons: {
    add: '.add-button',
    cartBtn: '.cartBtn',
    left: '.left',
    navbarButtons: '.navbar-buttons',
    removeBtn: 'fa-backspace',
    right: '.right',
  },
  cart: {
    amount: '.amount',
    delivery: 'deliverFee',
    price: '.price',
    product: 'amountOfProduct',
    productList: 'titlesOfProducts',
    stock: '.stock',
    subtotal: 'subtotal',
    total: 'totalPrice'
  },
  items: {
    books: '.books',
    cart: '.cart',
    dropdown: '.dropdown',
    dropdownMenu: '.dropdown-menu',
    hamburger: 'hamburger',
    navbarLink: 'navbar-link',
    navbarLinks: 'navbar-links',
    navbarNav: '.navbar-nav',
    order3: '.order-3',
    secondImage: '.second-image',
    shopingCart: 'fa-shopping-cart',
    slides: '.slider-item',
    user: '.fa-user-alt'
  },
  list: {
    autors: '.autors-list',
    books: '.books-list',
    box: '.box',
    show: '.show'
  },
  modals: {
    describe: '.modal-read p',
    modalWrap: '.modal-wrap',
    modalClose: '.modalClose',
    modal: '.modal',
    modalRead: '.modal-read',
    title: '.modal-read h2',
  },

};

export const settings = {
  db: {
    url: '//localhost:3131',
    booksList: 'booksList',
    autorsList: 'autorsList',
    cart: 'cart',
    orders: 'orders'
  },
};

export const templates = {
  autorsList: Handlebars.compile(document.querySelector('#template-autors-list').innerHTML),
  booksList: Handlebars.compile(document.querySelector('#template-books-list').innerHTML),
  titlesProductInCart: Handlebars.compile(document.querySelector('#template-titles-list').innerHTML)
};