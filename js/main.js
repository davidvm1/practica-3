const app = document.querySelector("#app");
let letters = [];
let dictionary = {};

function renderPage() {
  app.innerHTML = `
    <div class="container">Sign Language</div>
    <div class="container">
      <img src="" />
    </div>
    <div class="keys-container">
      <div class="row">
        <div class="col"><button data-number='v' class="btn">V</button></div>
        <div class="col"><button data-number='t' class="btn" >T</button></div>
        <div class="col"><button data-number='r' class="btn">R</button></div>
        <div class="col"><button data-number='e' class="btn">E</button></div>
      </div>
      <div class="row">
        <div class="col"><button data-number='w' class="btn">W</button></div>
        <div class="col"><button data-number='o' class="btn">O</button></div>
        <div class="col"><button data-number='l' class="btn">L</button></div>
        <div class="col"><button data-number='i' class="btn">I</button></div>
      </div>
    </div>
    `;
}

async function fetchSigns() {
  const res = await fetch("https://dwaapi.juvasquez88.vercel.app/letters");
  const data = await res.json();
  const array = await data.letters;
  letters = [...array];
  dictionary = Object.assign(
    {},
    ...letters.map((x) => ({ [x.letter]: x.image }))
  );
}

renderPage();
fetchSigns();

const buttons = document.querySelectorAll("button");
const img = document.querySelector("img");
buttons.forEach((btn) => {
  btn.addEventListener("click", e => {
    if(dictionary.hasOwnProperty(e.target.dataset.number)) {
        img.setAttribute("src", dictionary[e.target.dataset.number]);
    }
  });
});

function showImg() {}
