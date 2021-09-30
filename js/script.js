const navbarLinksButtonListener = () => {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const navbarLinksArray = [...document.querySelectorAll('.navbar-nav li')];
  for(let i=0; i<navbarLinksArray.length; i++) {
    navbarLinksArray[i].addEventListener('click', () => {
      navbarLinksArray[i].classList.toggle('show');
      i == 0 ? dropdownMenu.classList.toggle('show') : null;   
      for(let j=0; j<navbarLinksArray.length; j++) {
        if(j!=i) {
          navbarLinksArray[j].classList.remove('show');
          j == 0 ? dropdownMenu.classList.remove('show') : null;  
        }
        
      }
    });
  }
}

navbarLinksButtonListener()
