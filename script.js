
    let menuMob = document.querySelector('.menu-mobile');
    let mmLines = document.querySelectorAll('.mm-line');
   
  // abrir e feichar o menu
    function menuToggle() {
    if(menuMob.style.display === 'flex') {
      menuMob.style.opacity= '1';
      menuMob.style.animation= "0.3s closeMenu linear ";
    
      setTimeout(() => {
        //menuMob.style.animation= "0.5s openMenu linear ";
        menuMob.style.opacity= '0';
        menuMob.style.display = 'none';
      }, 300);
    }else{
      menuMob.style.opacity= '0';
      menuMob.style.animation= "0.3s openMenu linear ";
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
      menuMob.style.opacity = '1';
      menuMob.style.animation= "0.3s closeMenu linear ";
      setTimeout(() => {
        menuMob.style.opacity= '0';
        menuMob.style.display = 'none';
      }, 300);
      mmLines[0].classList.toggle('animationUp');
      mmLines[2].classList.toggle('animationLow');
      mmLines[1].classList.toggle('animationMiddle');
    }
    // ativar area de clique do menu
    let menuBtn = document.querySelectorAll('.menu li');
    
    menuBtn.forEach((item) => {
      item.addEventListener('click', () => {
        menuBtn.forEach((item) => {
          item.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
    // ativar area de clique do menu mobile
    
    let menuBtnMob = document.querySelectorAll('.menu-mobile li'); 

    menuBtnMob.forEach((item) => {
      item.addEventListener('click', () => {
        menuBtnMob.forEach((item) => {
          item.classList.remove('active');
        });
        item.classList.add('active');
      });
    });

//criar animação no nome e add um efeito no mouse
    


    
           

    
   
