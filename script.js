document.addEventListener("DOMContentLoaded", function(){
/*
TweenLite.defaultEase = Linear.easeNone;
const time = 1.5;
const d = 0.2;
const master = new TimelineMax({repeat:-1, yoyo:true, paused:true});

TweenMax.set(".flower, .leftleaf, .rightleaf", { transformOrigin:"center bottom"});

for (let j = 1; j < 5; j++) {

  let tl = new TimelineMax();

  tl.to("#tulip" + j + " .flower", time, {rotation: -20}, 0);
  tl.to("#tulip" + j + " .leftleaf", time, {rotation: 5}, 0);
  tl.to("#tulip" + j + " .rightleaf", time, {rotation: 5}, 0);
  tl.to(".stemStart" + j , time, {morphSVG:".stemEnd" + j}, 0);

  master.add(tl, (j-1) * d);
}

master.play();*/

TweenLite.defaultEase = Linear.easeNone;

/* velocidad base */
const baseTime = 1;
const d = 0.2;

const master = new TimelineMax({repeat:-1, yoyo:true, paused:true});

TweenMax.set(".flower, .leftleaf, .rightleaf", { transformOrigin:"center bottom"});


/* ANIMACION DE FLORES */
for (let j = 1; j < 5; j++) {

  /* cada flor con velocidad diferente */
  let time = baseTime + Math.random();

  let tl = new TimelineMax();

  tl.to("#tulip" + j + " .flower", time, {
      rotation: -20 - Math.random()*10
  }, 0);

  tl.to("#tulip" + j + " .leftleaf", time, {
      rotation: 5 + Math.random()*5
  }, 0);

  tl.to("#tulip" + j + " .rightleaf", time, {
      rotation: 5 + Math.random()*5
  }, 0);

  tl.to(".stemStart" + j , time, {
      morphSVG:".stemEnd" + j
  }, 0);

  master.add(tl, (j-1) * d);
}

master.play();



/* TEXTO QUE SE ESCRIBE */
const texto = "Feliz día de la mujer, mi amorcito Kiarita ❤️ una gran mujer en mi vida ☺️";
let index = 0;

function escribir(){

  const elemento = document.getElementById("typing");

  if(!elemento) return;

  if(index < texto.length){
    elemento.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escribir,70);
  }
}

escribir();


/* GENERAR PETALOS */
function crearPetalos(){

  const contenedor = document.querySelector(".petals");

  if(!contenedor) return;

  for(let k=0;k<30;k++){

    const petal=document.createElement("div");
    petal.classList.add("petal");

    petal.style.left=Math.random()*100+"%";
    petal.style.animationDuration=(5+Math.random()*5)+"s";
    petal.style.opacity=Math.random();

    contenedor.appendChild(petal);
  }
}

crearPetalos();

/*
const fotos = [
"foto1.jpg",
"foto2.jpg",
"foto3.jpg",
"foto4.jpg",
"foto5.jpg",
"foto6.jpg"
];

let indiceFoto = 0;

setInterval(function(){

  const img = document.getElementById("fotoAmor");

  img.style.opacity = 0;

  setTimeout(function(){

    indiceFoto++;

    if(indiceFoto >= fotos.length){
      indiceFoto = 0;
    }

    img.src = fotos[indiceFoto];

    img.style.opacity = 1;

  },1000);

},4000);

});

*/
const fotos=[
"foto1.jpg",
"foto2.jpg",
"foto3.jpg",
"foto4.jpg",
"foto5.jpg",
"foto6.jpg"
];

const nombres=[
"Te amo mi Kiaris 💛",
"Mi preciosa🌸",
"Super inteligente 🧠✨",
"La reina de las fotos 📸",
"Modelo fitness 💪🔥 y siempre crema ",
"Elegante y coqueta 💃✨"
];

let indice=0;

setInterval(function(){

let img=document.getElementById("fotoAmor");
let nombre=document.getElementById("nombreFoto");

img.style.opacity=0;
nombre.style.opacity=0;

setTimeout(function(){

indice++;

if(indice>=fotos.length){
indice=0;
}

img.src=fotos[indice];
nombre.innerText=nombres[indice];

img.style.opacity=1;
nombre.style.opacity=1;

},1000);

},4000);


});

/* 🎵 MUSICA (FUERA DEL DOMContentLoaded) */
function iniciarMusica(){
let musica = document.getElementById("musica");
musica.play();
}