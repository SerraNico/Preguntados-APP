let container = document.querySelector(".container"),
  answer = document.querySelector(".answer"),
  h1 = document.querySelector("h1"),
  span = document.querySelector(".span"),
  hearts = document.querySelector(".hearts"),
  heart = document.querySelector(".heart"),
  buttonOfStart = document.querySelector(".start-the-game"),
  musicBack = document.querySelector(".background-music-icon"),
  music = document.querySelector(".background-music"),
  musicBackSilence = document.querySelector(".background-music-icon-silence"),
  timeOfStart = document.getElementById("time-Starting"),
  back = document.querySelector(".back"),
  hour = document.createElement("div"),
  audioC = document.createElement("audio"),
  e1 = document.createElement("audio"),
  buttonLevel1_1 = document.createElement("button"),
  buttonLevel1_2 = document.createElement("button"),
  buttonLevel1_3 = document.createElement("button"),
  buttonLevel1_4 = document.createElement("button"),
  buttonLevel1_5 = document.createElement("button"),
  buttonLevel2_1 = document.createElement("button"),
  buttonLevel2_2 = document.createElement("button"),
  buttonLevel2_3 = document.createElement("button"),
  buttonLevel2_4 = document.createElement("button"),
  buttonLevel2_5 = document.createElement("button"),
  buttonLevel3_1 = document.createElement("button"),
  buttonLevel3_2 = document.createElement("button"),
  buttonLevel3_3 = document.createElement("button"),
  buttonLevel3_4 = document.createElement("button"),
  buttonLevel3_5 = document.createElement("button"),
  buttonLevel4_1 = document.createElement("button"),
  buttonLevel4_2 = document.createElement("button"),
  buttonLevel4_3 = document.createElement("button"),
  buttonLevel4_4 = document.createElement("button"),
  buttonLevel4_5 = document.createElement("button"),
  buttonLevel5_1 = document.createElement("button"),
  buttonLevel5_2 = document.createElement("button"),
  buttonLevel5_3 = document.createElement("button"),
  buttonLevel5_4 = document.createElement("button"),
  buttonLevel5_5 = document.createElement("button"),
  buttonLevel6_1 = document.createElement("button"),
  buttonLevel6_2 = document.createElement("button"),
  buttonLevel6_3 = document.createElement("button"),
  buttonLevel6_4 = document.createElement("button"),
  buttonLevel6_5 = document.createElement("button"),
  buttonLevel7_1 = document.createElement("button"),
  buttonLevel7_2 = document.createElement("button"),
  buttonLevel7_3 = document.createElement("button"),
  buttonLevel7_4 = document.createElement("button"),
  buttonLevel7_5 = document.createElement("button"),
  buttonLevel8_1 = document.createElement("button"),
  buttonLevel8_2 = document.createElement("button"),
  buttonLevel8_3 = document.createElement("button"),
  buttonLevel8_4 = document.createElement("button"),
  buttonLevel8_5 = document.createElement("button"),
  buttonLevel9_1 = document.createElement("button"),
  buttonLevel9_2 = document.createElement("button"),
  buttonLevel9_3 = document.createElement("button"),
  buttonLevel9_4 = document.createElement("button"),
  buttonLevel9_5 = document.createElement("button"),
  buttonLevel10_1 = document.createElement("button"),
  buttonLevel10_2 = document.createElement("button"),
  buttonLevel10_3 = document.createElement("button"),
  buttonLevel10_4 = document.createElement("button"),
  buttonLevel10_5 = document.createElement("button"),
  audioIndex = () => {
    let e = document.createElement("audio"),
      n = document.createElement("source");
    (e.id = "Sound-Correct-Option"),
      (n.src = "/audio/index.wav"),
      e.appendChild(n),
      e.paused && (e.currentTime = 0),
      e.play();
  },
  audioOptions = () => {
    let e = document.createElement("audio"),
      n = document.createElement("source");
    (e.id = "Sound-Correct-Option"),
      (n.src = "/audio/Button-option.wav"),
      e.appendChild(n),
      e.paused && (e.currentTime = 0),
      e.play();
  };
buttonLevel1_1.addEventListener("mouseover", audioOptions),
  buttonLevel1_2.addEventListener("mouseover", audioOptions),
  buttonLevel1_3.addEventListener("mouseover", audioOptions),
  buttonLevel1_4.addEventListener("mouseover", audioOptions),
  buttonLevel1_5.addEventListener("mouseover", audioOptions),
  buttonLevel2_1.addEventListener("mouseover", audioOptions),
  buttonLevel2_2.addEventListener("mouseover", audioOptions),
  buttonLevel2_3.addEventListener("mouseover", audioOptions),
  buttonLevel2_4.addEventListener("mouseover", audioOptions),
  buttonLevel2_5.addEventListener("mouseover", audioOptions),
  buttonLevel3_1.addEventListener("mouseover", audioOptions),
  buttonLevel3_2.addEventListener("mouseover", audioOptions),
  buttonLevel3_3.addEventListener("mouseover", audioOptions),
  buttonLevel3_4.addEventListener("mouseover", audioOptions),
  buttonLevel3_5.addEventListener("mouseover", audioOptions),
  buttonLevel4_1.addEventListener("mouseover", audioOptions),
  buttonLevel4_2.addEventListener("mouseover", audioOptions),
  buttonLevel4_3.addEventListener("mouseover", audioOptions),
  buttonLevel4_4.addEventListener("mouseover", audioOptions),
  buttonLevel4_5.addEventListener("mouseover", audioOptions),
  buttonLevel5_1.addEventListener("mouseover", audioOptions),
  buttonLevel5_2.addEventListener("mouseover", audioOptions),
  buttonLevel5_3.addEventListener("mouseover", audioOptions),
  buttonLevel5_4.addEventListener("mouseover", audioOptions),
  buttonLevel5_5.addEventListener("mouseover", audioOptions),
  buttonLevel6_1.addEventListener("mouseover", audioOptions),
  buttonLevel6_2.addEventListener("mouseover", audioOptions),
  buttonLevel6_3.addEventListener("mouseover", audioOptions),
  buttonLevel6_4.addEventListener("mouseover", audioOptions),
  buttonLevel6_5.addEventListener("mouseover", audioOptions),
  buttonLevel7_1.addEventListener("mouseover", audioOptions),
  buttonLevel7_2.addEventListener("mouseover", audioOptions),
  buttonLevel7_3.addEventListener("mouseover", audioOptions),
  buttonLevel7_4.addEventListener("mouseover", audioOptions),
  buttonLevel7_5.addEventListener("mouseover", audioOptions),
  buttonLevel8_1.addEventListener("mouseover", audioOptions),
  buttonLevel8_2.addEventListener("mouseover", audioOptions),
  buttonLevel8_3.addEventListener("mouseover", audioOptions),
  buttonLevel8_4.addEventListener("mouseover", audioOptions),
  buttonLevel8_5.addEventListener("mouseover", audioOptions),
  buttonLevel9_1.addEventListener("mouseover", audioOptions),
  buttonLevel9_2.addEventListener("mouseover", audioOptions),
  buttonLevel9_3.addEventListener("mouseover", audioOptions),
  buttonLevel9_4.addEventListener("mouseover", audioOptions),
  buttonLevel9_5.addEventListener("mouseover", audioOptions),
  buttonLevel10_1.addEventListener("mouseover", audioOptions),
  buttonLevel10_2.addEventListener("mouseover", audioOptions),
  buttonLevel10_3.addEventListener("mouseover", audioOptions),
  buttonLevel10_4.addEventListener("mouseover", audioOptions),
  buttonLevel10_5.addEventListener("mouseover", audioOptions),
  back.addEventListener("mouseover", audioIndex),
  musicBack.addEventListener("mouseover", audioIndex),
  musicBackSilence.addEventListener("mouseover", audioIndex);
let audioGymCorrect = () => {
    let e = document.createElement("audio"),
      n = document.createElement("source");
    (e.id = "Sound-Correct-Option"),
      (n.src = "/audio/correctOption.wav"),
      e.appendChild(n),
      e.paused && (e.currentTime = 0),
      e.play();
  },
  audioCountdown = () => {
    let e = document.createElement("source");
    (audioC.id = "Sound-Correct-Option"),
      (e.src = "/audio/countdown-Start.wav"),
      audioC.appendChild(e),
      audioC.paused && (audioC.currentTime = 0),
      audioC.play();
  },
  audioGymIncorrect = () => {
    let e = document.createElement("audio"),
      n = document.createElement("source");
    (e.id = "Sound-Correct-Option"),
      (n.src = "/audio/incorrectOption.wav"),
      e.appendChild(n),
      e.paused && (e.currentTime = 0),
      e.play();
  },
  audioGymGameover = () => {
    let e = document.createElement("audio"),
      n = document.createElement("source");
    (e.id = "Sound-Correct-Option"),
      (n.src = "/audio/gameOver.wav"),
      e.appendChild(n),
      e.paused && (e.currentTime = 0),
      e.play();
  },
  audioGymWin = () => {
    let e = document.createElement("audio"),
      n = document.createElement("source");
    (e.id = "Sound-Correct-Option"),
      (n.src = "/audio/Win.wav"),
      e.appendChild(n),
      e.paused && (e.currentTime = 0),
      e.play();
  },
  countdown = () => {
    (t = document.createElement("source")),
      (e1.id = "Sound-Correct-Option"),
      (t.src = "/audio/countdown.wav"),
      e1.appendChild(t),
      e1.paused && (e1.currentTime = 0),
      e1.play();
  },
  timeOver = 5,
  Time = () => {
    (timeOfStart.innerHTML = timeOver),
      timeOver <= 0
        ? ((musicBack.style.visibility = "visible"),
          functionOfStart(),
          buttonOfStart.remove(),
          timeOfStart.parentNode.removeChild(timeOfStart),
          audioC.pause(),
          music.play())
        : 4 === timeOver
        ? ((timeOfStart.style.transform = "scale(1.2)"),
          timeOver--,
          setTimeout(Time, 1e3))
        : 3 === timeOver
        ? ((timeOfStart.style.transform = "scale(1)"),
          timeOver--,
          setTimeout(Time, 1e3))
        : 2 === timeOver
        ? ((timeOfStart.style.transform = "scale(1.2)"),
          timeOver--,
          setTimeout(Time, 1e3))
        : 1 === timeOver
        ? ((timeOfStart.style.transform = "scale(1)"),
          timeOver--,
          setTimeout(Time, 1e3))
        : (timeOver--, setTimeout(Time, 1e3));
  };
window.onload = function () {
  Time(),
    audioCountdown(),
    music.pause(),
    (musicBack.style.visibility = "hidden");
};
let styleCorrectOption1 = function () {
    (buttonLevel1_2.style.pointerEvents = "none"),
      (buttonLevel1_3.style.pointerEvents = "none"),
      (buttonLevel1_4.style.pointerEvents = "none"),
      (buttonLevel1_5.style.pointerEvents = "none");
  },
  styleCorrectOption2 = function () {
    (buttonLevel2_1.style.pointerEvents = "none"),
      (buttonLevel2_2.style.pointerEvents = "none"),
      (buttonLevel2_4.style.pointerEvents = "none"),
      (buttonLevel2_5.style.pointerEvents = "none");
  },
  styleCorrectOption3 = function () {
    (buttonLevel3_1.style.pointerEvents = "none"),
      (buttonLevel3_3.style.pointerEvents = "none"),
      (buttonLevel3_4.style.pointerEvents = "none"),
      (buttonLevel3_5.style.pointerEvents = "none");
  },
  styleCorrectOption4 = function () {
    (buttonLevel4_1.style.pointerEvents = "none"),
      (buttonLevel4_2.style.pointerEvents = "none"),
      (buttonLevel4_3.style.pointerEvents = "none"),
      (buttonLevel4_4.style.pointerEvents = "none");
  },
  styleCorrectOption5 = function () {
    (buttonLevel5_2.style.pointerEvents = "none"),
      (buttonLevel5_3.style.pointerEvents = "none"),
      (buttonLevel5_4.style.pointerEvents = "none"),
      (buttonLevel5_5.style.pointerEvents = "none");
  },
  styleCorrectOption6 = function () {
    (buttonLevel6_2.style.pointerEvents = "none"),
      (buttonLevel6_3.style.pointerEvents = "none"),
      (buttonLevel6_4.style.pointerEvents = "none"),
      (buttonLevel6_5.style.pointerEvents = "none");
  },
  styleCorrectOption7 = function () {
    (buttonLevel7_1.style.pointerEvents = "none"),
      (buttonLevel7_2.style.pointerEvents = "none"),
      (buttonLevel7_4.style.pointerEvents = "none"),
      (buttonLevel7_5.style.pointerEvents = "none");
  },
  styleCorrectOption8 = function () {
    (buttonLevel8_1.style.pointerEvents = "none"),
      (buttonLevel8_2.style.pointerEvents = "none"),
      (buttonLevel8_4.style.pointerEvents = "none"),
      (buttonLevel8_5.style.pointerEvents = "none");
  },
  styleCorrectOption9 = function () {
    (buttonLevel9_1.style.pointerEvents = "none"),
      (buttonLevel9_2.style.pointerEvents = "none"),
      (buttonLevel9_3.style.pointerEvents = "none"),
      (buttonLevel9_4.style.pointerEvents = "none");
  },
  styleCorrectOption10 = function () {
    (buttonLevel10_1.style.pointerEvents = "none"),
      (buttonLevel10_3.style.pointerEvents = "none"),
      (buttonLevel10_4.style.pointerEvents = "none"),
      (buttonLevel10_5.style.pointerEvents = "none");
  };
musicBack.addEventListener("click", () => {
  music.paused
    ? ((musicBack.style.visibility = "visible"),
      (musicBackSilence.style.visibility = "hidden"),
      music.play())
    : ((musicBack.style.visibility = "hidden"),
      (musicBackSilence.style.visibility = "visible"),
      music.pause());
}),
  musicBackSilence.addEventListener("click", () => {
    music.paused
      ? ((musicBack.style.visibility = "visible"),
        (musicBackSilence.style.visibility = "hidden"),
        music.play())
      : (music.pause(),
        (musicBack.style.visibility = "hidden"),
        (musicBackSilence.style.visibility = "visible"));
  }),
  (hour.id = "timeOut");
let timeOver2 = 80,
  time = () => {
    (hour.innerHTML = timeOver2),
      0 === timeOver2
        ? ((container.innerHTML = `<strong class="lose">SE TE ACABO EL TIEMPO:(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
          span.remove(),
          hour.remove(),
          music.pause(),
          musicBack.remove(),
          musicBackSilence.remove(),
          timeOver2.remove(),
          audioGymGameover())
        : 30 === timeOver2
        ? ((hour.style.backgroundColor = "rgb(234, 255, 0)"),
          timeOver2--,
          setTimeout(time, 1e3))
        : 10 === timeOver2
        ? ((hour.style.backgroundColor = "rgb(255, 179, 0)"),
          timeOver2--,
          setTimeout(time, 1e3))
        : 9 === timeOver2
        ? (countdown(), timeOver2--, setTimeout(time, 1e3))
        : 5 === timeOver2
        ? ((hour.style.backgroundColor = "#ff0000"),
          timeOver2--,
          setTimeout(time, 1e3))
        : (timeOver2--, setTimeout(time, 1e3));
  },
  functionOfStart = () => {
    setTimeout(() => {
      time(),
        [].push(
          buttonLevel1_2FF,
          buttonLevel1_3FF,
          buttonLevel1_4FF,
          buttonLevel1_5FF
        ),
        (span.style.display = "block"),
        (h1.style.display = "inline"),
        (answer.style.display = "flex"),
        (hearts.style.display = "block"),
        container.appendChild(hour),
        answer.appendChild(buttonLevel1_1),
        answer.appendChild(buttonLevel1_2),
        answer.appendChild(buttonLevel1_3),
        answer.appendChild(buttonLevel1_4),
        answer.appendChild(buttonLevel1_5),
        (buttonLevel1_1.textContent = "20kg"),
        (buttonLevel1_2.textContent = "10kg"),
        (buttonLevel1_3.textContent = "15kg"),
        (buttonLevel1_4.textContent = "12kg"),
        (buttonLevel1_5.textContent = "5kg"),
        buttonLevel1_1.classList.add("btn-level-1"),
        buttonLevel1_2.classList.add("btn-level-1"),
        buttonLevel1_3.classList.add("btn-level-1"),
        buttonLevel1_4.classList.add("btn-level-1"),
        buttonLevel1_5.classList.add("btn-level-1"),
        (h1.innerHTML = `\xbfCuanto pesa una barra olimpica?`),
        buttonLevel1_1.addEventListener("click", buttonLevel1_1F),
        buttonLevel1_1.addEventListener("click", buttonLevel1_1FF),
        buttonLevel1_2.addEventListener("click", buttonLevel1_2F),
        buttonLevel1_2.addEventListener("click", buttonLevel1_2FF),
        buttonLevel1_3.addEventListener("click", buttonLevel1_3F),
        buttonLevel1_3.addEventListener("click", buttonLevel1_3FF),
        buttonLevel1_4.addEventListener("click", buttonLevel1_4F),
        buttonLevel1_4.addEventListener("click", buttonLevel1_4FF),
        buttonLevel1_5.addEventListener("click", buttonLevel1_5F),
        buttonLevel1_5.addEventListener("click", buttonLevel1_5FF);
    }, 1300);
  },
  buttonLevel1_1F = () => {
    (buttonLevel1_1.style.backgroundColor = "#24df07"),
      (buttonLevel1_1.style.transition = ".3s"),
      (buttonLevel1_1.style.pointerEvents = "none"),
      (buttonLevel1_1.style.transform = "scale(1.2)"),
      (buttonLevel1_1.style.transition = ".1s"),
      styleCorrectOption1(),
      audioGymCorrect();
  },
  buttonLevel1_2F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel1_2.style.backgroundColor = "red"),
      (buttonLevel1_2.style.transition = ".3s"),
      (buttonLevel1_2.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel1_3F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel1_3.style.backgroundColor = "red"),
      (buttonLevel1_3.style.transition = ".3s"),
      (buttonLevel1_3.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel1_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel1_4.style.backgroundColor = "red"),
      (buttonLevel1_4.style.transition = ".3s"),
      (buttonLevel1_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel1_5F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel1_5.style.backgroundColor = "red"),
      (buttonLevel1_5.style.transition = ".3s"),
      (buttonLevel1_5.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel1_2FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel1_3FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel1_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel1_5FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel1_1FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel1_2FF,
        buttonLevel1_3FF,
        buttonLevel1_4FF,
        buttonLevel1_5FF
      ),
        buttonLevel1_1.remove(),
        buttonLevel1_2.remove(),
        buttonLevel1_3.remove(),
        buttonLevel1_4.remove(),
        buttonLevel1_5.remove(),
        answer.appendChild(buttonLevel2_1),
        answer.appendChild(buttonLevel2_2),
        answer.appendChild(buttonLevel2_3),
        answer.appendChild(buttonLevel2_4),
        answer.appendChild(buttonLevel2_5),
        (buttonLevel2_1.textContent = "Lumbares"),
        (buttonLevel2_2.textContent = "Biceps"),
        (buttonLevel2_3.textContent = "Cuadriceps"),
        (buttonLevel2_4.textContent = "Isquios"),
        (buttonLevel2_5.textContent = "Gemelos"),
        buttonLevel2_1.classList.add("btn-level-2"),
        buttonLevel2_2.classList.add("btn-level-2"),
        buttonLevel2_3.classList.add("btn-level-2"),
        buttonLevel2_4.classList.add("btn-level-2"),
        buttonLevel2_5.classList.add("btn-level-2"),
        (h1.innerHTML = `\xbfque musculo trabaja este ejercicio en principal?
<div class="img-of-Ps-level-2">
<img src="https://i.blogs.es/1fd119/sentadilla/450_1000.webp" class="img-Ps">
</div>`),
        buttonLevel2_1.addEventListener("click", buttonLevel2_1F),
        buttonLevel2_1.addEventListener("click", buttonLevel2_1FF),
        buttonLevel2_2.addEventListener("click", buttonLevel2_2F),
        buttonLevel2_2.addEventListener("click", buttonLevel2_2FF),
        buttonLevel2_3.addEventListener("click", buttonLevel2_3F),
        buttonLevel2_3.addEventListener("click", buttonLevel2_3FF),
        buttonLevel2_4.addEventListener("click", buttonLevel2_4F),
        buttonLevel2_4.addEventListener("click", buttonLevel2_4FF),
        buttonLevel2_5.addEventListener("click", buttonLevel2_5F),
        buttonLevel2_5.addEventListener("click", buttonLevel2_5FF);
    }, 1300);
  },
  buttonLevel2_1F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel2_1.style.backgroundColor = "red"),
      (buttonLevel2_1.style.transition = ".3s"),
      (buttonLevel2_1.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel2_2F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel2_2.style.backgroundColor = "red"),
      (buttonLevel2_2.style.transition = ".3s"),
      (buttonLevel2_2.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel2_3F = () => {
    (buttonLevel2_3.style.backgroundColor = "#24df07"),
      (buttonLevel2_3.style.transition = ".3s"),
      (buttonLevel2_3.style.pointerEvents = "none"),
      (buttonLevel2_3.style.transform = "scale(1.2)"),
      (buttonLevel2_3.style.transition = ".1s"),
      styleCorrectOption2(),
      audioGymCorrect();
  },
  buttonLevel2_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel2_4.style.backgroundColor = "red"),
      (buttonLevel2_4.style.transition = ".3s"),
      (buttonLevel2_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel2_5F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel2_5.style.backgroundColor = "red"),
      (buttonLevel2_5.style.transition = ".3s"),
      (buttonLevel2_5.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel2_1FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel2_2FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 0 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel2_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel2_5FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = container.innerHTML =
        `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel2_3FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel2_1FF,
        buttonLevel2_2FF,
        buttonLevel2_4FF,
        buttonLevel2_5FF
      ),
        buttonLevel2_1.remove(),
        buttonLevel2_2.remove(),
        buttonLevel2_3.remove(),
        buttonLevel2_4.remove(),
        buttonLevel2_5.remove(),
        answer.appendChild(buttonLevel3_1),
        answer.appendChild(buttonLevel3_2),
        answer.appendChild(buttonLevel3_3),
        answer.appendChild(buttonLevel3_4),
        answer.appendChild(buttonLevel3_5),
        (buttonLevel3_1.textContent = "Creatina"),
        (buttonLevel3_2.textContent = "Proteina"),
        (buttonLevel3_3.textContent = "Trembo"),
        (buttonLevel3_4.textContent = "Testoterona"),
        (buttonLevel3_5.textContent = "Vitamina A"),
        buttonLevel3_1.classList.add("btn-level-3"),
        buttonLevel3_2.classList.add("btn-level-3"),
        buttonLevel3_3.classList.add("btn-level-3"),
        buttonLevel3_4.classList.add("btn-level-3"),
        buttonLevel3_5.classList.add("btn-level-3"),
        (h1.innerHTML = `\xbfQue suplemento regenera el musculo?
 `),
        buttonLevel3_1.addEventListener("click", buttonLevel3_1F),
        buttonLevel3_1.addEventListener("click", buttonLevel3_1FF),
        buttonLevel3_2.addEventListener("click", buttonLevel3_2F),
        buttonLevel3_2.addEventListener("click", buttonLevel3_2FF),
        buttonLevel3_3.addEventListener("click", buttonLevel3_3F),
        buttonLevel3_3.addEventListener("click", buttonLevel3_3FF),
        buttonLevel3_4.addEventListener("click", buttonLevel3_4F),
        buttonLevel3_4.addEventListener("click", buttonLevel3_4FF),
        buttonLevel3_5.addEventListener("click", buttonLevel3_5F),
        buttonLevel3_5.addEventListener("click", buttonLevel3_5FF);
    }, 1300);
  },
  buttonLevel3_1F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel3_1.style.backgroundColor = "red"),
      (buttonLevel3_1.style.transition = ".3s"),
      (buttonLevel3_1.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel3_2F = () => {
    (buttonLevel3_2.style.backgroundColor = "#24df07"),
      (buttonLevel3_2.style.transition = ".3s"),
      (buttonLevel3_2.style.pointerEvents = "none"),
      (buttonLevel3_2.style.transform = "scale(1.2)"),
      (buttonLevel3_2.style.transition = ".1s"),
      styleCorrectOption3(),
      audioGymCorrect();
  },
  buttonLevel3_3F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel3_3.style.backgroundColor = "red"),
      (buttonLevel3_3.style.transition = ".3s"),
      (buttonLevel3_3.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel3_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel3_4.style.backgroundColor = "red"),
      (buttonLevel3_4.style.transition = ".3s"),
      (buttonLevel3_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel3_5F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel3_5.style.backgroundColor = "red"),
      (buttonLevel3_5.style.transition = ".3s"),
      (buttonLevel3_5.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel3_1FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel3_3FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel3_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel3_5FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel3_2FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel3_1FF,
        buttonLevel3_3FF,
        buttonLevel3_4FF,
        buttonLevel3_5FF
      ),
        buttonLevel3_1.remove(),
        buttonLevel3_2.remove(),
        buttonLevel3_3.remove(),
        buttonLevel3_4.remove(),
        buttonLevel3_5.remove(),
        answer.appendChild(buttonLevel4_1),
        answer.appendChild(buttonLevel4_2),
        answer.appendChild(buttonLevel4_3),
        answer.appendChild(buttonLevel4_4),
        answer.appendChild(buttonLevel4_5),
        (buttonLevel4_1.textContent = "pecho"),
        (buttonLevel4_2.textContent = "hombros"),
        (buttonLevel4_3.textContent = "trapecio"),
        (buttonLevel4_4.textContent = "lumbares"),
        (buttonLevel4_5.textContent = "ninguno"),
        buttonLevel4_1.classList.add("btn-level-4"),
        buttonLevel4_2.classList.add("btn-level-4"),
        buttonLevel4_3.classList.add("btn-level-4"),
        buttonLevel4_4.classList.add("btn-level-4"),
        buttonLevel4_5.classList.add("btn-level-4"),
        (h1.innerHTML = `\xbfque musculo en principal trabaja el remo?`),
        buttonLevel4_1.addEventListener("click", buttonLevel4_1F),
        buttonLevel4_1.addEventListener("click", buttonLevel4_1FF),
        buttonLevel4_2.addEventListener("click", buttonLevel4_2F),
        buttonLevel4_2.addEventListener("click", buttonLevel4_2FF),
        buttonLevel4_3.addEventListener("click", buttonLevel4_3F),
        buttonLevel4_3.addEventListener("click", buttonLevel4_3FF),
        buttonLevel4_4.addEventListener("click", buttonLevel4_4F),
        buttonLevel4_4.addEventListener("click", buttonLevel4_4FF),
        buttonLevel4_5.addEventListener("click", buttonLevel4_5F),
        buttonLevel4_5.addEventListener("click", buttonLevel4_5FF);
    }, 1300);
  },
  buttonLevel4_1F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel4_1.style.backgroundColor = "red"),
      (buttonLevel4_1.style.transition = ".3s"),
      (buttonLevel4_1.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel4_2F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel4_2.style.backgroundColor = "red"),
      (buttonLevel4_2.style.transition = ".3s"),
      (buttonLevel4_2.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel4_3F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel4_3.style.backgroundColor = "red"),
      (buttonLevel4_3.style.transition = ".3s"),
      (buttonLevel4_3.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel4_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel4_4.style.backgroundColor = "red"),
      (buttonLevel4_4.style.transition = ".3s"),
      (buttonLevel4_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel4_5F = () => {
    (buttonLevel4_5.style.backgroundColor = "#24df07"),
      (buttonLevel4_5.style.transition = ".3s"),
      (buttonLevel4_5.style.pointerEvents = "none"),
      (buttonLevel4_5.style.transform = "scale(1.2)"),
      (buttonLevel4_5.style.transition = ".1s"),
      styleCorrectOption4(),
      audioGymCorrect();
  },
  buttonLevel4_1FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove());
  },
  buttonLevel4_2FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel4_3FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel4_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel4_5FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel4_1FF,
        buttonLevel4_2FF,
        buttonLevel4_3FF,
        buttonLevel4_4FF
      ),
        buttonLevel4_1.remove(),
        buttonLevel4_2.remove(),
        buttonLevel4_3.remove(),
        buttonLevel4_4.remove(),
        buttonLevel4_5.remove(),
        answer.appendChild(buttonLevel5_1),
        answer.appendChild(buttonLevel5_2),
        answer.appendChild(buttonLevel5_3),
        answer.appendChild(buttonLevel5_4),
        answer.appendChild(buttonLevel5_5),
        (buttonLevel5_1.textContent = "Ronnie Coleman"),
        (buttonLevel5_2.textContent = "Jay Cutler"),
        (buttonLevel5_3.textContent = "Arnold Schwarzenegger "),
        (buttonLevel5_4.textContent = "ninguno"),
        (buttonLevel5_5.textContent = "Markus R\xfchl"),
        buttonLevel5_1.classList.add("btn-level-6"),
        buttonLevel5_2.classList.add("btn-level-6"),
        buttonLevel5_3.classList.add("btn-level-6"),
        buttonLevel5_4.classList.add("btn-level-6"),
        buttonLevel5_5.classList.add("btn-level-6"),
        (h1.innerHTML = `\xbfQuien gano el mr. olympia en 1998?`),
        buttonLevel5_1.addEventListener("click", buttonLevel5_1F),
        buttonLevel5_1.addEventListener("click", buttonLevel5_1FF),
        buttonLevel5_2.addEventListener("click", buttonLevel5_2F),
        buttonLevel5_2.addEventListener("click", buttonLevel5_2FF),
        buttonLevel5_3.addEventListener("click", buttonLevel5_3F),
        buttonLevel5_3.addEventListener("click", buttonLevel5_3FF),
        buttonLevel5_4.addEventListener("click", buttonLevel5_4F),
        buttonLevel5_4.addEventListener("click", buttonLevel5_4FF),
        buttonLevel5_5.addEventListener("click", buttonLevel5_5F),
        buttonLevel5_5.addEventListener("click", buttonLevel5_5FF);
    }, 1300);
  },
  buttonLevel5_1F = () => {
    (buttonLevel5_1.style.backgroundColor = "#24df07"),
      (buttonLevel5_1.style.transition = ".3s"),
      (buttonLevel5_1.style.pointerEvents = "none"),
      (buttonLevel5_1.style.transform = "scale(1.2)"),
      (buttonLevel5_1.style.transition = ".1s"),
      styleCorrectOption5(),
      audioGymCorrect();
  },
  buttonLevel5_2F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel5_2.style.backgroundColor = "red"),
      (buttonLevel5_2.style.transition = ".3s"),
      (buttonLevel5_2.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel5_3F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel5_3.style.backgroundColor = "red"),
      (buttonLevel5_3.style.transition = ".3s"),
      (buttonLevel5_3.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel5_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel5_4.style.backgroundColor = "red"),
      (buttonLevel5_4.style.transition = ".3s"),
      (buttonLevel5_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel5_5F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel5_5.style.backgroundColor = "red"),
      (buttonLevel5_5.style.transition = ".3s"),
      (buttonLevel5_5.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel5_2FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
        <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel5_3FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel5_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel5_5FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel5_1FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel5_2FF,
        buttonLevel5_3FF,
        buttonLevel5_4FF,
        buttonLevel5_5FF
      ),
        buttonLevel5_1.remove(),
        buttonLevel5_2.remove(),
        buttonLevel5_3.remove(),
        buttonLevel5_4.remove(),
        buttonLevel5_5.remove(),
        answer.appendChild(buttonLevel6_1),
        answer.appendChild(buttonLevel6_2),
        answer.appendChild(buttonLevel6_3),
        answer.appendChild(buttonLevel6_4),
        answer.appendChild(buttonLevel6_5),
        (buttonLevel6_1.textContent = "Chris Bumstead"),
        (buttonLevel6_2.textContent = "Ronnie Coleman"),
        (buttonLevel6_3.textContent = "Jay Cutler"),
        (buttonLevel6_4.textContent = "Sergio Oliva"),
        (buttonLevel6_5.textContent = "Joan Pradells"),
        buttonLevel6_1.classList.add("btn-level-6"),
        buttonLevel6_2.classList.add("btn-level-6"),
        buttonLevel6_3.classList.add("btn-level-6"),
        buttonLevel6_4.classList.add("btn-level-6"),
        buttonLevel6_5.classList.add("btn-level-6"),
        (h1.innerHTML = `\xbfQuien es este fisicoculturista
<div class="img-of-Ps-level-2">
<img src="https://estaticos-cdn.elperiodico.com/clip/5c93583a-5d76-44b8-9d80-e08bd6bdae00_alta-libre-aspect-ratio_default_0.jpg" class="img-Ps">
</div>`),
        buttonLevel6_1.addEventListener("click", buttonLevel6_1F),
        buttonLevel6_1.addEventListener("click", buttonLevel6_1FF),
        buttonLevel6_2.addEventListener("click", buttonLevel6_2F),
        buttonLevel6_2.addEventListener("click", buttonLevel6_2FF),
        buttonLevel6_3.addEventListener("click", buttonLevel6_3F),
        buttonLevel6_3.addEventListener("click", buttonLevel6_3FF),
        buttonLevel6_3.addEventListener("click", buttonLevel6_4FF),
        buttonLevel6_5.addEventListener("click", buttonLevel6_5F),
        buttonLevel6_5.addEventListener("click", buttonLevel6_5FF);
    }, 1300);
  },
  buttonLevel6_1F = () => {
    (buttonLevel6_1.style.backgroundColor = "#24df07"),
      (buttonLevel6_1.style.transition = ".3s"),
      (buttonLevel6_1.style.pointerEvents = "none"),
      (buttonLevel6_1.style.transform = "scale(1.2)"),
      (buttonLevel6_1.style.transition = ".1s"),
      styleCorrectOption6(),
      audioGymCorrect();
  },
  buttonLevel6_2F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel6_2.style.backgroundColor = "red"),
      (buttonLevel6_2.style.transition = ".3s"),
      (buttonLevel6_2.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel6_3F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel6_3.style.backgroundColor = "red"),
      (buttonLevel6_3.style.transition = ".3s"),
      (buttonLevel6_3.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel6_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel6_4.style.backgroundColor = "red"),
      (buttonLevel6_4.style.transition = ".3s"),
      (buttonLevel6_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel6_5F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel6_5.style.backgroundColor = "red"),
      (buttonLevel6_5.style.transition = ".3s"),
      (buttonLevel6_5.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel6_2FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel6_3FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel6_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel6_5FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel6_1FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel6_2FF,
        buttonLevel6_3FF,
        buttonLevel6_4FF,
        buttonLevel6_5FF
      ),
        buttonLevel6_1.remove(),
        buttonLevel6_2.remove(),
        buttonLevel6_3.remove(),
        buttonLevel6_4.remove(),
        buttonLevel6_5.remove(),
        answer.appendChild(buttonLevel7_1),
        answer.appendChild(buttonLevel7_2),
        answer.appendChild(buttonLevel7_3),
        answer.appendChild(buttonLevel7_4),
        answer.appendChild(buttonLevel7_5),
        (buttonLevel7_1.textContent = "400kg y 840kg"),
        (buttonLevel7_2.textContent = "200kg y 900kg"),
        (buttonLevel7_3.textContent = "360kg y 1.043kg"),
        (buttonLevel7_4.textContent = "280kg y 720kg"),
        (buttonLevel7_5.textContent = "300kg y 800kg"),
        buttonLevel7_1.classList.add("btn-level-7"),
        buttonLevel7_2.classList.add("btn-level-7"),
        buttonLevel7_3.classList.add("btn-level-7"),
        buttonLevel7_4.classList.add("btn-level-7"),
        buttonLevel7_5.classList.add("btn-level-7"),
        (h1.innerHTML = `\xbfcual fue el maximo peso que levanto Ronnie Coleman en sentadilla y prensa?`),
        buttonLevel7_1.addEventListener("click", buttonLevel7_1F),
        buttonLevel7_1.addEventListener("click", buttonLevel7_1FF),
        buttonLevel7_2.addEventListener("click", buttonLevel7_2F),
        buttonLevel7_2.addEventListener("click", buttonLevel7_2FF),
        buttonLevel7_3.addEventListener("click", buttonLevel7_3F),
        buttonLevel7_3.addEventListener("click", buttonLevel7_3FF),
        buttonLevel7_4.addEventListener("click", buttonLevel7_4F),
        buttonLevel7_4.addEventListener("click", buttonLevel7_4FF),
        buttonLevel7_5.addEventListener("click", buttonLevel7_5F),
        buttonLevel7_5.addEventListener("click", buttonLevel7_5FF);
    }, 1300);
  },
  buttonLevel7_1F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel7_1.style.backgroundColor = "red"),
      (buttonLevel7_1.style.transition = ".3s"),
      (buttonLevel7_1.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel7_2F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel7_2.style.backgroundColor = "red"),
      (buttonLevel7_2.style.transition = ".3s"),
      (buttonLevel7_2.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel7_3F = () => {
    (buttonLevel7_3.style.backgroundColor = "#24df07"),
      (buttonLevel7_3.style.transition = ".3s"),
      (buttonLevel7_3.style.pointerEvents = "none"),
      (buttonLevel7_3.style.transform = "scale(1.2)"),
      (buttonLevel7_3.style.transition = ".1s"),
      styleCorrectOption7(),
      audioGymCorrect();
  },
  buttonLevel7_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel7_4.style.backgroundColor = "red"),
      (buttonLevel7_4.style.transition = ".3s"),
      (buttonLevel7_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel7_5F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel7_5.style.backgroundColor = "red"),
      (buttonLevel7_5.style.transition = ".3s"),
      (buttonLevel7_5.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel7_1FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel7_2FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel7_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel7_5FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel7_3FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel7_1FF,
        buttonLevel7_2FF,
        buttonLevel7_4FF,
        buttonLevel7_5FF
      ),
        buttonLevel7_1.remove(),
        buttonLevel7_2.remove(),
        buttonLevel7_3.remove(),
        buttonLevel7_4.remove(),
        buttonLevel7_5.remove(),
        answer.appendChild(buttonLevel8_1),
        answer.appendChild(buttonLevel8_2),
        answer.appendChild(buttonLevel8_3),
        answer.appendChild(buttonLevel8_4),
        answer.appendChild(buttonLevel8_5),
        (buttonLevel8_1.textContent = "Biceps"),
        (buttonLevel8_2.textContent = "Pecho"),
        (buttonLevel8_3.textContent = "Pierna"),
        (buttonLevel8_4.textContent = "Hombro"),
        (buttonLevel8_5.textContent = "Espalda"),
        buttonLevel8_1.classList.add("btn-level-8"),
        buttonLevel8_2.classList.add("btn-level-8"),
        buttonLevel8_3.classList.add("btn-level-8"),
        buttonLevel8_4.classList.add("btn-level-8"),
        buttonLevel8_5.classList.add("btn-level-8"),
        (h1.innerHTML = `\xbfcual fue el mejor musculo en su epoca de fisico-culturista Tom Platz?`),
        buttonLevel8_1.addEventListener("click", buttonLevel8_1F),
        buttonLevel8_1.addEventListener("click", buttonLevel8_1FF),
        buttonLevel8_2.addEventListener("click", buttonLevel8_2F),
        buttonLevel8_2.addEventListener("click", buttonLevel8_2FF),
        buttonLevel8_3.addEventListener("click", buttonLevel8_3F),
        buttonLevel8_3.addEventListener("click", buttonLevel8_3FF),
        buttonLevel8_4.addEventListener("click", buttonLevel8_4F),
        buttonLevel8_4.addEventListener("click", buttonLevel8_4FF),
        buttonLevel8_5.addEventListener("click", buttonLevel8_5F),
        buttonLevel8_5.addEventListener("click", buttonLevel8_5FF);
    }, 1300);
  },
  buttonLevel8_1F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel8_1.style.backgroundColor = "red"),
      (buttonLevel8_1.style.transition = ".3s"),
      (buttonLevel8_1.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel8_2F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel8_2.style.backgroundColor = "red"),
      (buttonLevel8_2.style.transition = ".3s"),
      (buttonLevel8_2.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel8_3F = () => {
    (buttonLevel8_3.style.backgroundColor = "#24df07"),
      (buttonLevel8_3.style.transition = ".3s"),
      (buttonLevel8_3.style.pointerEvents = "none"),
      (buttonLevel8_3.style.transform = "scale(1.2)"),
      (buttonLevel8_3.style.transition = ".1s"),
      styleCorrectOption8(),
      audioGymCorrect();
  },
  buttonLevel8_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel8_4.style.backgroundColor = "red"),
      (buttonLevel8_4.style.transition = ".3s"),
      (buttonLevel8_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel8_5F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel8_5.style.backgroundColor = "red"),
      (buttonLevel8_5.style.transition = ".3s"),
      (buttonLevel8_5.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel8_1FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel8_2FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel8_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel8_5FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel8_3FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel8_1FF,
        buttonLevel8_2FF,
        buttonLevel8_4FF,
        buttonLevel8_5FF
      ),
        buttonLevel8_1.remove(),
        buttonLevel8_2.remove(),
        buttonLevel8_3.remove(),
        buttonLevel8_4.remove(),
        buttonLevel8_5.remove(),
        answer.appendChild(buttonLevel9_1),
        answer.appendChild(buttonLevel9_2),
        answer.appendChild(buttonLevel9_3),
        answer.appendChild(buttonLevel9_4),
        answer.appendChild(buttonLevel9_5),
        (buttonLevel9_1.textContent = "Creatina"),
        (buttonLevel9_2.textContent = "Proteina en polvo"),
        (buttonLevel9_3.textContent = "Todas son correctas"),
        (buttonLevel9_4.textContent = "Omega 3"),
        (buttonLevel9_5.textContent = "Anabolicos"),
        buttonLevel9_1.classList.add("btn-level-9"),
        buttonLevel9_2.classList.add("btn-level-9"),
        buttonLevel9_3.classList.add("btn-level-9"),
        buttonLevel9_4.classList.add("btn-level-9"),
        buttonLevel9_5.classList.add("btn-level-9"),
        (h1.innerHTML = `\xbfQue sustancia o suplemento no es natural?`),
        buttonLevel9_1.addEventListener("click", buttonLevel9_1F),
        buttonLevel9_1.addEventListener("click", buttonLevel9_1FF),
        buttonLevel9_2.addEventListener("click", buttonLevel9_2F),
        buttonLevel9_2.addEventListener("click", buttonLevel9_2FF),
        buttonLevel9_3.addEventListener("click", buttonLevel9_3F),
        buttonLevel9_3.addEventListener("click", buttonLevel9_3FF),
        buttonLevel9_4.addEventListener("click", buttonLevel9_4F),
        buttonLevel9_4.addEventListener("click", buttonLevel9_4FF),
        buttonLevel9_5.addEventListener("click", buttonLevel9_5F),
        buttonLevel9_5.addEventListener("click", buttonLevel9_5FF);
    }, 1300);
  },
  buttonLevel9_1F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel9_1.style.backgroundColor = "red"),
      (buttonLevel9_1.style.transition = ".3s"),
      (buttonLevel9_1.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel9_2F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel9_2.style.backgroundColor = "red"),
      (buttonLevel9_2.style.transition = ".3s"),
      (buttonLevel9_2.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel9_3F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel9_3.style.backgroundColor = "red"),
      (buttonLevel9_3.style.transition = ".3s"),
      (buttonLevel9_3.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel9_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel9_4.style.backgroundColor = "red"),
      (buttonLevel9_4.style.transition = ".3s"),
      (buttonLevel9_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel9_5F = () => {
    (buttonLevel9_5.style.backgroundColor = "#24df07"),
      (buttonLevel9_5.style.transition = ".3s"),
      (buttonLevel9_5.style.pointerEvents = "none"),
      (buttonLevel9_5.style.transform = "scale(1.2)"),
      (buttonLevel9_5.style.transition = ".1s"),
      styleCorrectOption9(),
      audioGymCorrect();
  },
  buttonLevel9_1FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove());
  },
  buttonLevel9_2FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel9_3FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel9_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel9_5FF = () => {
    setTimeout(() => {
      [].push(
        buttonLevel9_1FF,
        buttonLevel9_2FF,
        buttonLevel9_3FF,
        buttonLevel9_4FF
      ),
        buttonLevel9_1.remove(),
        buttonLevel9_2.remove(),
        buttonLevel9_3.remove(),
        buttonLevel9_4.remove(),
        buttonLevel9_5.remove(),
        answer.appendChild(buttonLevel10_1),
        answer.appendChild(buttonLevel10_2),
        answer.appendChild(buttonLevel10_3),
        answer.appendChild(buttonLevel10_4),
        answer.appendChild(buttonLevel10_5),
        (buttonLevel10_1.textContent = "Hipertrofia"),
        (buttonLevel10_2.textContent = "fuerza"),
        (buttonLevel10_3.textContent = "Musculo"),
        (buttonLevel10_4.textContent = "ninguno"),
        (buttonLevel10_5.textContent = "Resistencia"),
        buttonLevel10_1.classList.add("btn-level-10"),
        buttonLevel10_2.classList.add("btn-level-10"),
        buttonLevel10_3.classList.add("btn-level-10"),
        buttonLevel10_4.classList.add("btn-level-10"),
        buttonLevel10_5.classList.add("btn-level-10"),
        (h1.innerHTML = "El peso convencional sirve para ganar..."),
        buttonLevel10_1.addEventListener("click", buttonLevel10_1F),
        buttonLevel10_1.addEventListener("click", buttonLevel10_1FF),
        buttonLevel10_2.addEventListener("click", buttonLevel10_2F),
        buttonLevel10_2.addEventListener("click", buttonLevel10_2FF),
        buttonLevel10_3.addEventListener("click", buttonLevel10_3F),
        buttonLevel10_3.addEventListener("click", buttonLevel10_3FF),
        buttonLevel10_4.addEventListener("click", buttonLevel10_4F),
        buttonLevel10_4.addEventListener("click", buttonLevel10_4FF),
        buttonLevel10_5.addEventListener("click", buttonLevel10_5F),
        buttonLevel10_5.addEventListener("click", buttonLevel10_5FF);
    }, 1300);
  },
  buttonLevel10_2FF = () => {
    setTimeout(() => {
      buttonLevel10_1.remove(),
        buttonLevel10_2.remove(),
        buttonLevel10_3.remove(),
        buttonLevel10_4.remove(),
        buttonLevel10_5.remove(),
        (container.innerHTML = `<strong class="lose">\xa1FELICIDADES! :)</strong>
    <h2 class="h1Lose">GANASTE</h2>
<a href="index.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
        span.remove(),
        audioGymWin(),
        music.pause(),
        musicBack.remove(),
        musicBackSilence.remove(),
        (hour = null),
        e1.pause();
    }, 1500);
  },
  buttonLevel10_1F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel10_1.style.backgroundColor = "red"),
      (buttonLevel10_1.style.transition = ".3s"),
      (buttonLevel10_1.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel10_2F = () => {
    (buttonLevel10_2.style.backgroundColor = "#24df07"),
      (buttonLevel10_2.style.transition = ".3s"),
      (buttonLevel10_2.style.pointerEvents = "none"),
      (buttonLevel10_2.style.transform = "scale(1.2)"),
      (buttonLevel10_2.style.transition = ".1s"),
      styleCorrectOption10(),
      audioGymCorrect();
  },
  buttonLevel10_3F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel10_3.style.backgroundColor = "red"),
      (buttonLevel10_3.style.transition = ".3s"),
      (buttonLevel10_3.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel10_4F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel10_4.style.backgroundColor = "red"),
      (buttonLevel10_4.style.transition = ".3s"),
      (buttonLevel10_4.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel10_5F = () => {
    document.querySelector(".heart").remove(),
      (buttonLevel10_5.style.backgroundColor = "red"),
      (buttonLevel10_5.style.transition = ".3s"),
      (buttonLevel10_5.style.pointerEvents = "none"),
      audioGymIncorrect();
  },
  buttonLevel10_1FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel10_3FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel10_4FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  },
  buttonLevel10_5FF = () => {
    let e = document.querySelector(".heart"),
      n = document.querySelector(".span");
    e <= 1 &&
      (audioGymGameover(),
      (container.innerHTML = `<strong class="lose">SE TE ACABARON LAS VIDAS :(</strong>
        <h2 class="h1Lose">PERDISTE</h2>
    <a href="preguntadosGym.html" class="a-lose"><i class="fa-solid fa-rotate-right fa-beat fa-2xl"></i></a>`),
      n.remove(),
      music.pause(),
      musicBack.remove(),
      musicBackSilence.remove(),
      (hour = null),
      e1.pause());
  };
