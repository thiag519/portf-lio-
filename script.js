
    let menuMob = document.querySelector('.menu-mobile');
    let mmLines = document.querySelectorAll('.mm-line');
   
  // abrir e feichar o menu
    function menuToggle() {
    if(menuMob.style.display === 'flex') {
      menuMob.style.opacity= '1';
      setTimeout(() => {
        menuMob.style.opacity= '0';
        menuMob.style.display = 'none';
      }, 500);
    }else{
      menuMob.style.opacity= '0';
      setTimeout( () =>{
        menuMob.style.display = 'flex';
        menuMob.style.opacity= '1';
      }, 500)
      
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
    
  let countN = 0;
  let count =    document.querySelector(".count").value;
  
  document.addEventListener(
    'visibilitychange', () => {
    if(document.visibilityState === "visible") {
       count.innerHTML = "acesso é "+(countN + 1);
    }
    }
  );
  console.log(countN)
    


    
           

    
   
