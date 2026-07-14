const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const texto = document.querySelector(".clique");
const decoracao = document.getElementById("decoracao");

let aberto = false;

// 🌻 Criar até 15 girassóis aleatórios
for (let i = 0; i < 15; i++) {

    const flor = document.createElement("div");
    flor.classList.add("flor");
    flor.textContent = "🌻";

    flor.style.left = Math.random() * 95 + "%";
    flor.style.top = Math.random() * 95 + "%";

    flor.style.fontSize = (28 + Math.random() * 18) + "px";

    flor.style.animationDelay = (Math.random() * 5) + "s";
    flor.style.animationDuration = (5 + Math.random() * 4) + "s";

    decoracao.appendChild(flor);
}

// ✨ Criar
