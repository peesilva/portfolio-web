let btnMenu = document.getElementById('btn-menu')
let Menu = document.getElementById('menu-mobile')
let Overlay = document.getElementById('overlay-menu')

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