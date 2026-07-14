const envelope = document.getElementById("envelope");
const decoracao = document.getElementById("decoracao");
const texto = document.querySelector(".clique");

let aberto = false;

// 🌻 Girassóis aleatórios (12 a 15)
const quantidadeFlores = Math.floor(Math.random() * 4) + 12;

for (let i = 0; i < quantidadeFlores; i++) {

    const flor = document.createElement("div");
    flor.className = "flor";
    flor.textContent = "🌻";

    flor.style.left = Math.random() * 100 + "%";
    flor.style.top = Math.random() * 100 + "%";

    flor.style.fontSize = (28 + Math.random() * 22) + "px";

    flor.style.animationDuration = (4 + Math.random() * 5) + "s";
    flor.style.animationDelay = (Math.random() * 4) + "s";

    decoracao.appendChild(flor);
}

// ✨ Brilhos
for (let i = 0; i < 18; i++) {

    const brilho = document.createElement("div");
    brilho.className = "brilho";

    brilho.style.left = Math.random() * 100 + "%";
    brilho.style.top = Math.random() * 100 + "%";

    brilho.style.animationDelay = (Math.random() * 3) + "s";

    decoracao.appendChild(brilho);
}

// 📩 Abrir e fechar envelope
envelope.addEventListener("click", () => {

    aberto = !aberto;

    envelope.classList.toggle("open", aberto);

    if (aberto) {
        texto.textContent = "💛 Espero que você goste 💛";
    } else {
        texto.textContent = "💛 Clique no envelope 💛";
    }

});
