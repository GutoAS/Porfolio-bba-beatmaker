import { playList } from "./data.js";

const menuItems = document.getElementById("menuItems");
const audio = new Audio();
let isPlaying = false;

document.getElementById("menuBar").addEventListener("click", () => {
  menuItems.style.display = "flex";
});

document.getElementById("menuClose").addEventListener("click", () => {
  menuItems.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.audio) {
    playPause(e.target.dataset.audio);
  }
});

function playPause(audioSrc) {
  const btn = document.querySelector(`[data-audio="${audioSrc}"]`);
  audio.src = audioSrc;

  if (isPlaying) {
    btn.classList.replace("fa-pause", "fa-play");
    audio.pause();
  } else {
    btn.classList.replace("fa-play", "fa-pause");
    audio.play();
  }
  isPlaying = !isPlaying;
}

// function getBeats() {
//   let getBeatsHtml = "";
//   playList.forEach(function (beat) {
//     getBeatsHtml += `
//         <div class="beat">
//         <img class="beat-img" src="${beat.cover}" />
//         <div class="row-beat"><span>Title</span><span>${beat.title}</span></div>
//         <div class="row-beat"><span>DATE</span><span>${beat.date}</span></div>
//         <div class="row-beat"><span>Time</span><span>${beat.time}</span></div>
//         <button class="play-btn fa-solid fa-play" data-audio="${beat.audio}">
//         </button>
//       </div>
//         `;
//   });

//   return getBeatsHtml;
// }
function getBeats() {
  let getBeatsHtml = "";
  playList.forEach(function (beat) {
    getBeatsHtml += `
    <div class="beat-grid">
      <img
        class="cover responsive-img"
        src="${beat.cover}"
        alt=""
      />
      <p class="title">TITLE</p>
      <p class="date">DATE</p>
      <p class="time"><i class="fa-regular fa-clock icon"></i></p>
      <p class="playPause"><i class="fa-solid fa-play icon " data-audio="${
        beat.audio
      }"></i></p>
      <p class="beat-title">${beat.title}</p>
      <p class="beat-date">${beat.date}</p>
      <p class="beat-time">${beat.time}</p>
      ${beat.isPreview ? `<p class="preview">PREVIEW</p>` : ""}
    </div>
        `;
  });

  return getBeatsHtml;
}

function render() {
  document.getElementById("trackList").innerHTML = getBeats();
}

render();
