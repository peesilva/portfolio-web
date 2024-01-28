let btnMenu = document.getElementById('btn-menu')
let Menu = document.getElementById('menu-mobile')
let Overlay = document.getElementById('overlay-menu')
let typed;

btnMenu.addEventListener('click', ()=>{
    Menu.classList.add('abrir-menu')
} )

Menu.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
} )

Overlay.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
} )

document.getElementById('projetos').addEventListener('click', function(event) {
    event.preventDefault(); 
    

    const projetos = document.getElementById('projetos');
    

    projetos.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('formulario').addEventListener('click', function(event) {
    event.preventDefault(); 
    
 
    const formulario = document.getElementById('formulario');
    

    formulario.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('sobre').addEventListener('click', function(event) {
    event.preventDefault(); 
    

    const sobre = document.getElementById('sobre');
    
   
    sobre.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("emailBtn").addEventListener("click", function() {
    window.location.href = "mailto:pedrosilva.profissional.ti@gmail.com";
});

document.getElementById("linkedinBtn").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/pedro-augusto-pereira-borges-da-silva-05a57722b/";
});

document.getElementById("githubBtn").addEventListener("click", function() {
    window.location.href = "https://github.com/peesilva?tab=repositories";
});


const textos = {
    'bemVindo': {
        'pt': 'Este portfólio parece ser de um dev frontend, mas não, sou dev backend',
        'en': 'This portfolio seems to be from a frontend developer, but no, I\'m a backend developer'
    },
    'typing': {
        'pt': 'Seja bem vindo ao meu portfólio web, conheca um pouquinho sobre mim...',
        'en': 'Welcome to my web portfolio, get to know a little about me...'
        },
    'inicio': {
        'pt': 'Início',
        'en': 'Home'
    },
    'especialidades': {
        'pt': 'Especialidades',
        'en': 'Specialties'
    },
    'sobre': {
        'pt': 'Sobre mim',
        'en': 'About me'
    },
    'projetos': {
        'pt': 'Projetos',
        'en': 'Projects'
    },
    'certificados': {
        'pt': 'Certificados',
        'en': 'Certificates'
    },
    'contato': {
        'pt': 'Contato',
        'en': 'Contact'
    },
    'entreEmContato': {
        'pt': 'Entre em contato',
        'en': 'Get in touch'
    },
    'sobreTitulo': {
        'pt': 'Olá, mundo!',
        'en': 'Hello, World!'
    },
    'sobreTituloName': {
        'pt': 'Sou o Pedro Silva',
        'en': 'I\'m Pedro Silva'
    },
    'paragrafo1': {
        'pt': 'Olá, mundo! Meu nome é Pedro Silva, tenho 19 anos, sou formado em técnico de informática pelo Colégio Técnico Bento Quirino e estou cursando Sistemas de Informação na Unimetrocamp. Minhas habilidades em inglês (B2) e alemão (A1) contribuem positivamente para uma comunicação eficaz no mercado de trabalho.',
        'en': 'Hello, world! My name is Pedro Silva, I\'m 19 years old, I have a degree in computer science from Bento Quirino, and I\'m currently studying Information Systems at Unimetrocamp. My English (B2) and German (A1) skills contribute positively to effective communication in the workplace.'
    },
    'paragrafo2': {
        'pt': 'Comecei a estagiar na Digiage em maio de 2022. Durante esse período, aprendi os conceitos Linux, boas práticas de desenvolvimento, resolução de problemas, atendimento de chamados com o cliente e melhorei minha comunicação assertiva. Após 8 meses de muita dedicação, recebi uma proposta para iniciar como Analista de Sistemas Júnior. Durante 9 meses como Analista de Sistemas Júnior, conquistei 3 certificados WSO2, (ferramenta de gerenciamento e desenvolvimento de APIs). Desenvolvi scripts para automatizar funcionalidades de software, aprimorei minhas análises em incidentes e realizei algumas trocas de certificados SSL nos clientes. Nos meus momentos livres, busquei expandir meus conhecimentos de desenvolvimento de sistemas. Apaixonado pelo desenvolvimento backend, aprofundei meus conhecimentos em Java e Spring. Em agosto de 2023, iniciei na Digiage como Desenvolvedor Backend Júnior, onde estou atuando diretamente no desenvolvimento de novas funcionalidades em sistemas já existentes. Busco sempre expandir minhas habilidades, estou adquirindo experiência prática com os serviços cloud da AWS.',
        'en': 'I started my internship at Digiage in May 2022. During this period, I learned Linux concepts, best development practices, problem-solving, customer support, and improved my assertive communication. After 8 months of dedication, I received an offer to start as a Junior Systems Analyst. During my 9 months as a Junior Systems Analyst, I earned 3 WSO2 certificates (a tool for managing and developing APIs). I developed scripts to automate software functionalities, enhanced my incident analysis skills, and conducted some SSL certificate replacements for clients. In my free time, I sought to expand my knowledge of system development. Being passionate about backend development, I deepened my knowledge of Java and Spring. In August 2023, I started at Digiage as a Junior Backend Developer, where I am directly involved in developing new features in existing systems. I am looking to broaden my horizons, gaining practical experience with AWS services.'
    },
    'paragrafo3': {
        'pt': 'Esse portfólio está hospedado em um S3 e o domínio associado a ele está registrado no Route 53, ambos serviços de cloud da AWS',
        'en': 'This portfolio is hosted on an S3 and the associated domain is registered in Route 53, both AWS cloud services'
    },
    'meus': {
        'pt': 'Meus ',
        'en': 'My '
    },
    'projetos': {
        'pt': 'Projetos',
        'en': 'Projects'
    },
    'minhas1': {
        'pt': 'Minhas ',
        'en': 'My '
    },
    'especialidades1': {
        'pt': 'Especialidades',
        'en': 'Specialties'
    },
    'minhas2': {
        'pt': 'Minhas ',
        'en': 'My '
    },
    'certificacoes': {
        'pt': 'Certificações',
        'en': 'Certifications'
    },
    'fale': {
        'pt': 'Fale ',
        'en': 'Talk '
    },
    'comigo': {
        'pt': 'Comigo',
        'en': 'to me'
    },
    'versionamento': {
        'pt': 'Testes Unitários',
        'en': 'Unit Tests'
    },
    'textver': {
        'pt': 'Experiência com criação e implementação de testes unitários utilizando JUnit, Mockito e TestNG',
        'en': 'Experience in creating and implementing unit tests using JUnit, Mockito and TestNG '
    },
    'textcloud': {
        'pt': 'Conhecimento técnico e prático com serviços AWS, entre eles, EC2, Route 53, S3, Elastic Beanstalk, SES, etc.',
        'en': 'Technical and practical knowledge with AWS services, including EC2, Route 53, S3, Elastic Beanstalk, SES, etc.'
    },
    'textjava': {
        'pt': 'Desenvolvimento Java Spring Conhecimento sólido no desenvolvimento de APIs SOAP e REST',
        'en': 'Java Spring Development Solid knowledge in the development of SOAP and REST APIs'
    },
    'overlay1': {
        'pt': 'CRUD Java usando banco h2',
        'en': 'Java CRUD using H2 database'
    },
    'overlay2': {
        'pt': 'Estoque de veículos',
        'en': 'Vehicle inventory'
    },
    'overlay3': {
        'pt': ' Portfólio Web responsivo',
        'en': 'Responsive Web Portfolio'
    },
    'meus2': {
        'pt': 'Meus ',
        'en': 'My '
    },
    'cursos': {
        'pt': 'Cursos',
        'en': 'Courses'
    },
    'cursos2': {
        'pt': 'Cursos',
        'en': 'Courses'
    },
    // Adicione mais textos aqui
};

// Variável para rastrear o idioma atual
let idiomaAtual = 'pt'; // Português como padrão

function alterarIdioma(idioma) {
    idiomaAtual = idioma;
    const elementosTraduzir = document.querySelectorAll('[data-traducao]');
    elementosTraduzir.forEach(elemento => {
        const chave = elemento.getAttribute('data-traducao');
        const textoTraduzido = textos[chave][idioma];
        const emojiElement = elemento.querySelector('.emoji');
        const textToTranslateElement = elemento.querySelector('.text-to-translate');
        const inicioElement = elemento.querySelector('.inicio');
        const especialidadesElement = elemento.querySelector('.especialidades');
        const sobremimElement = elemento.querySelector('.sobre-mim');
        const projectsElement = elemento.querySelector('.projects');
        const certificadosElement = elemento.querySelector('.certificados');
        const contactElement = elemento.querySelector('.contact');
        const entreEmContatoElement = elemento.querySelector('.entreEmContato');
        const parumElement = elemento.querySelector('.par1');
        const pardoisElement = elemento.querySelector('.par2');
        const partresElement = elemento.querySelector('.par3');
        const helloElement = elemento.querySelector('.hello');
        const mynameElement = elemento.querySelector('.myname');
        const meusElement = elemento.querySelector('.meus');
        const projetosElement = elemento.querySelector('.projetos');
        const minhas1Element = elemento.querySelector('.minhas1');
        const especialidades1Element = elemento.querySelector('.especialidades1');
        const minhas2Element = elemento.querySelector('.minhas2');
        const certificacoesElement = elemento.querySelector('.certificacoes');
        const faleElement = elemento.querySelector('.fale');
        const comigoElement = elemento.querySelector('.comigo');
        const versionamentoElement = elemento.querySelector('.versionamento');
        const textverElement = elemento.querySelector('.textver');
        const textcloudElement = elemento.querySelector('.textcloud');
        const textjavaElement = elemento.querySelector('.textjava');
        const typedTranslate = textos['typing'][idioma];
        const overlay1Element = elemento.querySelector('.overlay1');
        const overlay2Element = elemento.querySelector('.overlay2');
        const overlay3Element = elemento.querySelector('.overlay3');
        const meus2Element = elemento.querySelector('.meus2');
        const cursosElement = elemento.querySelector('.cursos');
        const cursos2Element = elemento.querySelector('.cursos2');

        if (typed) {
            typed.destroy(); // Destrua a instância atual do Typed.js
            }

        typed = new Typed('.multiple', {
            strings: [typedTranslate],
            typeSpeed: 45,
            backSpeed: 70,
            backDelay: 56,
            loop: false,
            onComplete: function() {
            setTimeout(function() {
            document.querySelector('.typed-cursor').style.display = 'none'; // para esconder o cursor
            }, 1790); // 1.7s
            }
            }); 

        //elemento.textContent = textos[chave][idioma];
           
        if (emojiElement) {
            emojiElement.style.color = '#00ff06'; // Define a cor desejada para o elemento com a classe "emoji"
        }
        
        if (textToTranslateElement) {
            textToTranslateElement.style.color = '#ffff'; // Define a cor desejada para o texto
            textToTranslateElement.textContent = textoTraduzido;
        }
        if (inicioElement) {
            inicioElement.style.color = ''; // Define a cor desejada para o texto
            inicioElement.textContent = textoTraduzido;
        }
        if (especialidadesElement) {
            especialidadesElement.style.color = ''; // Define a cor desejada para o texto
            especialidadesElement.textContent = textoTraduzido;
        }
        if (sobremimElement) {
            sobremimElement.style.color = ''; // Define a cor desejada para o texto
            sobremimElement.textContent = textoTraduzido;
        }
        if (projectsElement) {
            projectsElement.style.color = ''; // Define a cor desejada para o texto
            projectsElement.textContent = textoTraduzido;
        }
        if (certificadosElement) {
            certificadosElement.style.color = ''; // Define a cor desejada para o texto
            certificadosElement.textContent = textoTraduzido;
        }
        if (contactElement) {
            contactElement.style.color = ''; // Define a cor desejada para o texto
            contactElement.textContent = textoTraduzido;
        }
        if (entreEmContatoElement) {
            entreEmContatoElement.style.color = ''; // Define a cor desejada para o texto
            entreEmContatoElement.textContent = textoTraduzido;
        }
        if (parumElement) {
            parumElement.style.color = ''; // Define a cor desejada para o texto
            parumElement.textContent = textoTraduzido;
        }
        if (pardoisElement) {
            pardoisElement.style.color = ''; // Define a cor desejada para o texto
            pardoisElement.textContent = textoTraduzido;
        }
        if (partresElement) {
            partresElement.style.color = ''; // Define a cor desejada para o texto
            partresElement.textContent = textoTraduzido;
        }
        if (helloElement) {
            helloElement.style.color = '#fff'; // Define a cor desejada para o texto
            helloElement.textContent = textoTraduzido;
        }
        if (mynameElement) {
            mynameElement.style.color = '#00ff06'; // Define a cor desejada para o texto
            mynameElement.textContent = textoTraduzido;
        }
        if (meusElement) {
            meusElement.style.color = '#ffff'; // Define a cor desejada para o texto
            meusElement.textContent = textoTraduzido;
        }
        if (projetosElement) {
            projetosElement.style.color = '#00ff06'; // Define a cor desejada para o texto
            projetosElement.textContent = textoTraduzido;
        }
        if (minhas1Element) {
            minhas1Element.style.color = '#ffff'; // Define a cor desejada para o texto
            minhas1Element.textContent = textoTraduzido;
        } 
        if (especialidades1Element) {
            especialidades1Element.style.color = '#00ff06'; // Define a cor desejada para o texto
            especialidades1Element.textContent = textoTraduzido;
        }
        if (minhas2Element) {
            minhas2Element.style.color = '#ffff'; // Define a cor desejada para o texto
            minhas2Element.textContent = textoTraduzido;
        } 
        if (certificacoesElement) {
            certificacoesElement.style.color = '#00ff06'; // Define a cor desejada para o texto
            certificacoesElement.textContent = textoTraduzido;
        }
        if (faleElement) {
            faleElement.style.color = '#ffff'; // Define a cor desejada para o texto
            faleElement.textContent = textoTraduzido;
        } 
        if (comigoElement) {
            comigoElement.style.color = '#00ff06'; // Define a cor desejada para o texto
            comigoElement.textContent = textoTraduzido;
        }
        if (versionamentoElement) {
            versionamentoElement.style.color = '#ffff'; // Define a cor desejada para o texto
            versionamentoElement.textContent = textoTraduzido;
        } 
        if (textverElement) {
            textverElement.style.color = '#ffff'; // Define a cor desejada para o texto
            textverElement.textContent = textoTraduzido;
        } 
        if (textcloudElement) {
            textcloudElement.style.color = '#ffff'; // Define a cor desejada para o texto
            textcloudElement.textContent = textoTraduzido;
        } 
        if (textjavaElement) {
            textjavaElement.style.color = '#ffff'; // Define a cor desejada para o texto
            textjavaElement.textContent = textoTraduzido;
        } 
        if (overlay1Element) {
            overlay1Element.style.color = '#ffff'; // Define a cor desejada para o texto
            overlay1Element.textContent = textoTraduzido;
        } 
        if (overlay2Element) {
            overlay2Element.style.color = '#ffff'; // Define a cor desejada para o texto
            overlay2Element.textContent = textoTraduzido;
        } 
        if (overlay3Element) {
            overlay3Element.style.color = '#ffff'; // Define a cor desejada para o texto
            overlay3Element.textContent = textoTraduzido;
        } 
        if (meus2Element) {
            meus2Element.style.color = '#ffff'; // Define a cor desejada para o texto
            meus2Element.textContent = textoTraduzido;
        } 
        if (cursosElement) {
            cursosElement.style.color = '#00ff06'; // Define a cor desejada para o texto
            cursosElement.textContent = textoTraduzido;
        }
        if (cursos2Element) {
            cursos2Element.style.color = ''; // Define a cor desejada para o texto
            cursos2Element.textContent = textoTraduzido;
        } 
    });
}

// ...

// Função para alternar o idioma com base no estado do checkbox
function toggleIdioma() {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt'; // Alterna entre 'pt' e 'en'
    alterarIdioma(idiomaAtual);
}


// Inicialize os elementos com o idioma padrão
alterarIdioma(idiomaAtual);

// Função para alternar o idioma com base no estado do checkbox
function toggleIdioma() {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt'; // Alterna entre 'pt' e 'en'
    alterarIdioma(idiomaAtual);
}

// Vincule a função toggleIdioma à mudança de estado do checkbox
document.getElementById('language-switch').addEventListener('change', toggleIdioma);





//Aqui eh o botao de scroll back //
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Mostrar o botão quando o usuário rolar para baixo
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Rolar suavemente para o topo quando o botão for clicado
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const formulario2 = document.getElementById("formulario2");
  const toggleLanguage = document.getElementById("language-switch");


  toggleLanguage.addEventListener("click", function() {
    if (formulario2.classList.contains("formulario-hidden")) {
      formulario2.classList.remove("formulario-hidden");
    } else {
      formulario2.classList.add("formulario-hidden");
    }
  });
});

const toggleButton = document.getElementById('newbutton');
const toggleLanguage = document.querySelector('.toggle-language');
let isFixed = true;

toggleButton.addEventListener('click', () => {
    if (isFixed) {
        toggleLanguage.style.position = 'absolute';
        toggleButton.style.position = 'absolute'; // Adicione esta linha
        isFixed = false;
    } else {
        toggleLanguage.style.position = 'fixed';
        toggleButton.style.position = 'fixed'; // Adicione esta linha
        isFixed = true;
    }
});