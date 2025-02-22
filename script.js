
    let menuMob = document.querySelector('.menu-mobile');
    let mmLines = document.querySelectorAll('.mm-line');
   

    function menuToggle() {
    if(menuMob.style.display === 'flex') {
      menuMob.style.display = 'none';
    }else{
      menuMob.style.display = 'flex';
    }
      mmLines[0].classList.toggle('animationUp');
      mmLines[2].classList.toggle('animationLow');
      mmLines[1].classList.toggle('animationMiddle')  ;      
    }

    function closeMenu() {
      
      setTimeout(() => {
        
        menuMob.style.display = 'none'
      }, 50);
      mmLines[0].classList.toggle('animationUp');
      mmLines[2].classList.toggle('animationLow');
      mmLines[1].classList.toggle('animationMiddle');
    }
    
    


    
           

    
   
