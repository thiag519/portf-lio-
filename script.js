
    let menuMob = document.querySelector('.menu-mobile');
    let mmLines = document.querySelectorAll('.mm-line');
   
  // abrir e feichar o menu
    function menuToggle() {
    if(menuMob.style.display === 'flex') {
      menuMob.style.display = 'none';
    }else{
      menuMob.style.opacity= '0';
      setTimeout( () =>{
        menuMob.style.display = 'flex';
        menuMob.style.opacity= '1';
      }, 300)
      
    }
      mmLines[0].classList.toggle('animationUp');
      mmLines[2].classList.toggle('animationLow');
      mmLines[1].classList.toggle('animationMiddle')  ;      
    }
    // feichar o menu quando clicar em um item no menu
    function closeMenu() {
      menuMob.style.opacity= '1';
      setTimeout(() => {
        menuMob.style.opacity= '0';
        menuMob.style.display = 'none';
      }, 300);
      mmLines[0].classList.toggle('animationUp');
      mmLines[2].classList.toggle('animationLow');
      mmLines[1].classList.toggle('animationMiddle');
    }
    
    


    
           

    
   
