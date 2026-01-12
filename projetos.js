const projetos = [
  { id:1, 
    titulo:'Salão de Beleza',
    imagem: 'projetos/Império-da-Beleza.PNG', 
    tecnologias: ['React', 'TypeScript', 'Next','Tailwind css'],
    descricao: [
      "Desafio: Desenvolver um site institucional que transmitisse profissionalismo, apresentasse claramente os serviços do salão e facilitasse o contato com clientes.", 
      "Solução: Criação de uma aplicação web responsiva utilizando React, Next.js, TypeScript e Tailwind CSS, com foco em componentização, organização do código e boas práticas de usabilidade. O projeto foi versionado com Git, garantindo controle e rastreabilidade das alterações.", 
      "Resultado: O cliente passou a contar com uma presença digital mais profissional, melhorando a comunicação com os clientes e fortalecendo a identidade visual do negócio. O projeto também demonstra minha capacidade de planejar e entregar interfaces modernas e bem estruturadas."] ,
    linkgit: 'https://github.com/thiag519/salao-de-beleza-copia.git',
    linkdeploy: 'https://www.imperiodabelezaposse.com.br/'
  },
   { 
    id:2, 
    titulo:'Envio de Email',
    imagem: 'projetos/Area-de-envio.PNG', 
    tecnologias: ['Node','TypeScript','API REST'],
    descricao: [
      "Desafio: Criar uma solução back-end para envio de e-mails a partir de um formulário web, garantindo comunicação eficiente entre front-end e servidor.", 
      "Solução: Desenvolvimento de uma API REST em Node.js utilizando Express, TypeScript e CORS, integrada à API de e-mail Resend. A aplicação recebe as mensagens do formulário, processa os dados e realiza o envio de e-mails de forma segura. O projeto foi hospedado em ambiente serverless na Vercel.",
      "Resultado: Implementação de uma funcionalidade funcional e escalável de envio de e-mails, melhorando o fluxo de contato do site e demonstrando integração entre front-end, back-end e serviços externos."] ,
    linkgit: 'https://github.com/thiag519/send-.git',
    linkdeploy: 'https://thiag519.github.io/portf-lio-/#footer-contact'
  },
  {
    id: 3,
    titulo: 'Calculadora IMC',
    imagem: 'projetos/IMC.PNG',
    tecnologias: ['React', 'TypeScript', 'CSS'],
    descricao: [
      'Desafio: Desenvolver uma calculadora de IMC que permita ao usuário informar peso e altura e receber, de forma clara e imediata, a classificação do índice de massa corporal.',
      'Solução: Desenvolvimento da aplicação utilizando React com componentização, TypeScript para maior organização do código e CSS para estilização da interface.',
      'Resultado: Entrega de uma aplicação funcional e responsiva, demonstrando capacidade de criar interfaces interativas e aplicar lógica de negócio no front-end.'
    ],
    linkgit: 'https://github.com/thiag519/react-calc-imc.git',
    linkdeploy: 'https://react-calc-imc-delta.vercel.app/'
  },
   {
    id: 4,
    titulo: 'Página Starbucks',
    imagem: 'projetos/Pagina-Starbucks.png',
    tecnologias: ['HTML', 'JypeScript', 'CSS Grid'],
    descricao: [
      'Desafio: Reproduzir a interface do site da Starbucks com foco em layout, organização visual e responsividade.',
      'Solução: Desenvolvimento da página utilizando CSS Grid para construção do layout, aplicando boas práticas de responsividade e organização visual.',
      'Resultado: Projeto que consolidou minha capacidade de desenvolver layouts modernos e responsivos, demonstrando domínio de CSS Grid e atenção à estrutura visual.'
    ],
    linkgit: 'https://github.com/thiag519/c-pia-starbucks.git',
    linkdeploy: 'https://thiag519.github.io/c-pia-starbucks/'
  },
   {
    id: 5,
    titulo: 'Pizzaria',
    imagem: 'projetos/Pizzas.PNG',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    descricao: [
      'Desafio: Desenvolver um catálogo interativo de pizzas que permitisse ao usuário escolher sabor, tamanho, adicionar itens ao carrinho e visualizar o valor total do pedido em tempo real.',
      'Solução: Implementação da aplicação utilizando HTML para estruturação, CSS para estilização e layout responsivo, e JavaScript para lógica de negócio, controle do carrinho e interatividade.',
      'Resultado: Desenvolvimento de uma aplicação interativa e funcional, demonstrando domínio de JavaScript, organização da lógica de negócio e foco em usabilidade.'
    ],
    linkgit: 'https://github.com/thiag519/projeto_pizza.git',
    linkdeploy: 'https://thiag519.github.io/projeto_pizza/'
  }
]
  /*{ id:4,
    titulo:'Pagina Web',
    imagem:'projetos/Pagina-web.jpeg',
    descricao:' Este projeto é uma recriação de uma página web, desenvolvido com HTML e CSS.  O site apresenta um design responsivo, permitindo que os usuários visualizem as informações  sobre a empresa.',
    linkgit:'https://github.com/thiag519/site-web.git',
    linkdeploy:'https://thiag519.github.io/site-web/home.html'
  },
  { id:3,
    titulo:'Jogo da Velha',
    imagem:'projetos/Jogo-da-Velha.jpeg',
    descricao:['Permite que um ou dois usuários divirtam-se com um simples jogo da velha', 'Utilizando lógica de programação com JavaScript', 'Fácil interação e boa performance'],
    linkgit:'https://github.com/thiag519/jogo-da-velha.git',
    linkdeploy:'https://thiag519.github.io/jogo-da-velha/'
  },
{ id:3, 
    titulo:'Urna Eletronica',
    imagem: 'projetos/Urna.PNG', 
    descricao: [" Permiti o usuário escolher os seus candidatos, exibir na tela suas escolhas e confirmar seu voto. Conta ainda com area para ver candidados(colinha)" ,"Usando manipulção de elementos HTML com JavaScript e estilizando com CSS."," Intuitivo e de fácil interação. Permitindo armazenar votos, exibir voto e finalizar com o som classico da urna eletronica."] ,
    linkgit: 'https://github.com/thiag519/projeto-urna.git',
    linkdeploy: 'https://thiag519.github.io/projeto-urna/'
  },
,
   { id:6,
    titulo:'Quiz Dev',
    imagem:'projetos/Quiz-Dev.jpeg',
    descricao:['Quiz dinâmico onde o usuário responde uma série de perguntas de desenvolvimento web e tem o resultado da sua pontução no final','Utilizando HTML, CSS e JavaScript para criar a navegação e calcular a pontuação','Estilização, lógica e paginação'],
    linkgit:'https://github.com/thiag519/quiz-javascript.git',
    linkdeploy:'https://thiag519.github.io/relogio-analogico/'
  },
   
  */