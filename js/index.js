let otros = document.querySelector(".Otros");
let Deportes = document.querySelector(".Deportes");
let dbz = document.querySelector(".Dbz");
let span = document.createElement("span");
let imgDbz = document.querySelector(".Dbz__img");
let imgGym = document.querySelector(".gym__img");
let imgFutbol = document.querySelector(".futbol__img");

let imgGeo = document.querySelector(".geo__img");
let imgTec = document.querySelector(".tecno__img");

let d1 = document.querySelector(".d1");
let d2 = document.querySelector(".d2");
let d3 = document.querySelector(".d3");
let d4 = document.querySelector(".d4");
let o1 = document.querySelector(".o1");
let o2 = document.querySelector(".o2");
let o3 = document.querySelector(".o3");
let o4 = document.querySelector(".o4");
let b = document.querySelector(".b");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");

let audioIndex = () => {
  let audioI = document.createElement("audio");
  let audioii = document.createElement("source");
  audioI.id = "Sound-Correct-Option";
  audioii.src = "/audio/index.wav";
  audioI.appendChild(audioii);
  if (audioI.paused) {
    audioI.currentTime = 0;
  }
  audioI.play();
};

let functionHoverDbz = () => {
  b.style.display = "inline-block";
  imgDbz.style.filter = "contrast(20%)";
};
let functionHoverOutDbz = () => {
  b.style.display = "none";
  imgDbz.style.filter = "contrast(100%)";
};
let functionHoverOutGym = () => {
  b2.style.display = "none";
  imgGym.style.filter = "contrast(100%)";
};
let functionHoverOutFutbol = () => {
  b3.style.display = "none";
  imgFutbol.style.filter = "contrast(100%)";
};

let functionHoverOutGeo = () => {
  b6.style.display = "none";
  imgGeo.style.filter = "contrast(100%)";
};
let functionHoverOutTecno = () => {
  b7.style.display = "none";
  imgTec.style.filter = "contrast(100%)";
};

let functionHoverGym = () => {
  b2.style.display = "inline-block";
  imgGym.style.filter = "contrast(20%)";
};
let functionHoverFutbol = () => {
  b3.style.display = "inline-block";
  imgFutbol.style.filter = "contrast(20%)";
};

let functionHoverGeo = () => {
  b6.style.display = "inline-block";
  imgGeo.style.filter = "contrast(20%)";
};
let functionHoverTecno = () => {
  b7.style.display = "inline-block";
  imgTec.style.filter = "contrast(20%)";
};

dbz.addEventListener("mouseover", functionHoverDbz);
dbz.addEventListener("mouseover", audioIndex);
dbz.addEventListener("mouseout", functionHoverOutDbz);

d1.addEventListener("mouseover", functionHoverGym);
d1.addEventListener("mouseover", audioIndex);
d1.addEventListener("mouseout", functionHoverOutGym);

d2.addEventListener("mouseover", functionHoverFutbol);
d2.addEventListener("mouseover", audioIndex);
d2.addEventListener("mouseout", functionHoverOutFutbol);

o1.addEventListener("mouseover", functionHoverGeo);
o1.addEventListener("mouseout", functionHoverOutGeo);
o1.addEventListener("mouseover", audioIndex);

o2.addEventListener("mouseover", functionHoverTecno);
o2.addEventListener("mouseover", audioIndex);
o2.addEventListener("mouseout", functionHoverOutTecno);
