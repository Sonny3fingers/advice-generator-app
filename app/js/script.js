const container = document.getElementById("container");
const adviceContent = document.getElementById("adviceContent");
const diceAdvice = document.getElementById("diceAdvice");
const adviceId = document.getElementById("adviceId");

const urlAPI = "https://api.adviceslip.com/advice";

// Functions
async function getAdviceHandler() {
  const response = await fetch(`${urlAPI}`);
  const data = await response.json();

  let output = "";
  output = `
    <h1>Advice <span id="adviceId"># ${data.slip.id}</span></h1>
    <p>
        <q>
            ${data.slip.advice}
        </q>
    </p>
  `;
  adviceContent.innerHTML = `${output}`;

  container.classList.add("active");

  setTimeout(() => {
    container.classList.remove("active");
  }, 1000);
}

// Event listeners
diceAdvice.addEventListener("click", getAdviceHandler);
