// Botão de menu inicial

// Botão de menu mobile
// Animação do nome
// Animação das habilidades slider
    
    let numberImg ;
    let stringO ;
    let start = 0;
        stringO = document.querySelector('title').innerText;
        numberImg = document.querySelectorAll('.skill').length;

    function testar() {
        start ++;
        if(start > (numberImg -1)) {
            start = 0
        }
        
    }
    setInterval(testar, 3000);
           

    
   
