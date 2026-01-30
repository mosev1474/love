function checkPass() {
  let pass = document.getElementById("pass");

  if (pass.value === "LOVE") {
    window.location.href = "rose.html";
  } else {
    pass.classList.add("shake");
    setTimeout(() => pass.classList.remove("shake"), 400);
    alert("غلط يبت 😏");
  }
}

// توليد القلوب
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}, 300);
function showLove() {
  ["♥️","🫶🏻","😍"].forEach((emoji, i) => {
    setTimeout(() => {
      const e = document.createElement("div");
      e.innerHTML = emoji;
      e.style.position = "absolute";
      e.style.bottom = "0";
      e.style.left = Math.random() * 100 + "vw";
      e.style.fontSize = "40px";
      e.style.animation = "floatUp 3s linear forwards";
      document.body.appendChild(e);

      setTimeout(()=>e.remove(),3000);
    }, i * 300);
  });

  document.getElementById("note").style.display = "block";
}
function goNext(){
  window.location.href = "memories.html";
}
// الصور
let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let index = 0;

function changePhoto(){
  index = (index + 1) % photos.length;
  document.getElementById("photo").src = photos[index];
}

// العداد
const startDate = new Date("2025-11-09T19:20:00");

setInterval(() => {
  const now = new Date();
  let diff = now - startDate;

  let days = Math.floor(diff / (1000*60*60*24));
  let hours = Math.floor((diff / (1000*60*60)) % 24);
  let minutes = Math.floor((diff / (1000*60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").innerHTML =
    `💗 مع بعض بقالنا ${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
}, 1000);

function goFinal(){
  window.location.href = "final.html";
}
