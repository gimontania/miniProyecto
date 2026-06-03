import './style.css' //poner import todos juntos arriba por buena práctica
import {habilidades} from './habilidades.js'

const darkModeBtn = document.getElementById('darkModeBtn')

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light")    
})

const mainSkillsContainer = document.getElementById("skills-container");

const myMainSkills = [
  {
      nombre:"",
      picture: "../public/logoHtml.png",
       
  },
  {
      nombre: "",
      picture: "../public/logoCSS.png",
         
  },
  {
      nombre: "",
      picture: "../public/logoJS.png",
         
  },
  {
      nombre: "",
      picture: "../public/logoTailwind.png",
       
  },
  {
      nombre: "",
      picture: "../public/logoJS2.png",
       
  },
  {
      nombre: "",
      picture: "../public/logoGit.png",
       
  }
];

let mainSkillsHTML = "";
myMainSkills.forEach(function(skill) { //array que veo, array que itero :))
  mainSkillsHTML += `
      <div class ="bg-[#1E293B] p-4 rounded-xl text-center hover:scale-105 transition mb-4">
          <img src="${skill.picture}" alt="${skill.skillname}" class="w-16 h-16">
      </div>
    `;
});

mainSkillsContainer.insertAdjacentHTML('afterbegin', mainSkillsHTML); //profe la ia me dijo esto del afterbegin y el insertAdjacentHTML pero me sirvió porque ya aprendí una nueva función :))

// const skillsContainer = document.getElementById('skills-container');
// const myskills = [
//     {
//         nombre:"",
//         imagen:"../public/img/favproject3.jpg"
//     },
//     {
//         nombre:"",
//         imagen:"../public/logoCSS.png"
//     },
//     {
//         nombre:"",
//         imagen:"../public/img/logoJS.png"
//     },
//     {
//         nombre:"",
//         imagen:"../public/img/logoTailwind.png"
//     },
//     {
//         nombre:"",
//         imagen:"../src/img/logoJS2.png"
//     },
//     {
//         nombre:"",
//         imagen:"../src/img/logoGit.png"
//     },
// ]
// habilidades.forEach((habilidad) => {
//     skillsContainer.innerHTML += `
    
//     <div class ="bg-[#1E293B] p-4 rounded-xl text-center hover:scale-105 transition">

//     <img src="${habilidad.imagen}" alt="${habilidad.nombre}" class="w-16 mx-auto mb-2">

//     <p>${habilidad.nombre}</p>

//     </div>

//     `
// })



const menuBtn = document.getElementById('menuBtn')
const mobileMenu = document.getElementById('mobileMenu')

menuBtn.addEventListener('click', () =>{
    mobileMenu.classList.toggle('hidden')
})


//projectContainer
const projectContainer = document.getElementById('projects');
const myprojects = [
    {
        nombre:"Proyecto 1",
        imagen:"../public/img/proyecto1.png"
    },
    {
        nombre:"Proyecto 2",
        imagen:"../public/img/proyecto2.png"
    },
    {
        nombre:"Proyecto 3",
        imagen:"../public/img/proyecto3.png"
    },
]

myprojects.forEach((project) => {
    projectContainer.innerHTML += `
    
    <div class ="bg-[#1E293B] p-4 rounded-xl text-center hover:scale-105 transition mb-4">

    <img src="${project.imagen}" alt="${project.nombre}" class="w-16 mx-auto mb-2">

    <p>${project.nombre}</p>

    </div>

    `
})


//favContainer
const favContainer = document.getElementById('favprojects');
const myfavprojects = [
    {
        nombre:"FProyecto 1",
        imagen:"../public/img/favproject1.jpg"
    },
    {
        nombre:"FProyecto 2",
        imagen:"../public/img/favproject2.jpg"
    },
    {
        nombre:"FProyecto 3",
        imagen:"../public/img/favproject3.jpg"
    },
]

myfavprojects.forEach((favprojects) => {
    favContainer.innerHTML += `
    
    <div class ="bg-[#1E293B] p-4 rounded-xl text-center hover:scale-105 transition mb-4">

    <img src="${favprojects.imagen}" alt="${favprojects.nombre}" class="w-16 mx-auto mb-2">

    <p>${favprojects.nombre}</p>

    </div>

    `
})

