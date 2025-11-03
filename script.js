let menuMob = document.querySelector('.menu-mobile');
let mmLines = document.querySelectorAll('.mm-line');
let currentIndex = 0;
   
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

// Criar area de serviço com map em projetos.js
const c = (el) => document.querySelector(el);
//const cA =(el) => document.querySelectorAll(el);

// Esconde o template antes de clonar e limpa a área antes de popular
const area = c('.area');
const templateProjeto = c('.area-projeto .projeto-1');
if (templateProjeto) {
  templateProjeto.style.display = 'none';
}
area.innerHTML = '';
projetos &&
projetos.forEach((item, index) => {

//criar um clone usando cloneNode()
  let projetoItem = templateProjeto.cloneNode(true);
  projetoItem.style.display = 'flex';

  projetoItem.querySelector('.projeto-title h2').textContent = item.titulo;
  projetoItem.querySelector('.projeto-image img').src = item.imagem;
item.descricao.map(e => {
  projetoItem.querySelector('.projeto-testo').innerHTML += ` <li>${e}</li> `;
});
  projetoItem.querySelector('.projeto-link-git a').href = item.linkgit;
  projetoItem.querySelector('.projeto-link-deploy a').href = item.linkdeploy;

  projetoItem.dataset.key = index;
  area.appendChild(projetoItem);
});

// Criar funçao que observa o scroll para por o active na section que estiver sendo exibida
const section = document.querySelectorAll('section');

function handleActiveSection() {
  section.forEach((item, index) => {
    const delimitador = item.getBoundingClientRect() //obter Cliente Delimitador Retângulo
    console.log(delimitador.top, delimitador.bottom, window.innerHeight)
    console.log(index)
    if (delimitador.top <= window.innerHeight/3 && delimitador.bottom >= window.innerHeight/3) {
      currentIndex = index;
      menuBtn.forEach((item, index) => {
        item.classList.remove('active');
        if(currentIndex === index) {
          item.classList.add('active');
        }
      });
      menuBtnMob.forEach((item, index) => {
         item.classList.remove('active');
        if(currentIndex === index) {
          item.classList.add('active');
        }
      })
    };
  });
};
window.addEventListener('scroll', handleActiveSection);


// Envio do email

const form = document.querySelector('#form-send');
const statusMessage = document.querySelector('#status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nome: form.nome.value,
    email: form.eamil.value,
    mensagem: form.mensagem.value
  };

  try {
    const response = await fetch('https://send-sirf.onrender.com/send', {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if(result.success) {
      statusMessage.textContent = "Mensagem enviada com sucesso!";
      form.reset();
    }else {
      statusMessage.textContent = "Erro ao enviar a mensagem. Tente novamente.";
    }
  } catch (err) {
    statusMessage.textContent = "Erro de conexão com o servidor";
  }

});



    
           

    
   
