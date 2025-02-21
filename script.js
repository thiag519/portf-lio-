
    let menuMob = document.querySelector('.menu-mobile');
    let mmLines = document.querySelectorAll('.mm-line');
   

    function menuToggle() {
      menuMob.style.display === 'flex'? 
      menuMob.style.display = 'none':
      menuMob.style.display = 'flex';
      mmLines[0].classList.toggle('animationUp')
      mmLines[2].classList.toggle('animationLow')
      mmLines[1].classList.toggle('animationMiddle')        
    }

    


    
           

    
   
