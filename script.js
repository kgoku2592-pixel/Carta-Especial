const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const texto = document.querySelector(".clique");
const decoracao = document.getElementById("decoracao");

let aberto = false;

// 🌻 Criar girassóis aleatórios
for (let i = 0; i < 20; i++) {

    const flor = document.createElement("div");
    flor.innerHTML = "🌻";
    flor.className = "flor";

    flor.style.left = Math.random() * 100 + "vw";
    flor.style.top = Math.random() * 100 + "vh";

    flor.style.fontSize = (25 + Math.random() * 35) + "px";

    flor.style.animationDuration = (4 + Math.random() * 5) + "s";

    decoracao.appendChild(flor);
}

// ✨ Criar brilhos
for (let i = 0; i < 30; i++) {

    const brilho = document.createElement("div");
    brilho.className = "brilho";

    brilho.style.left = Math.random() * 100 + "vw";
    brilho.style.top = Math.random() * 100 + "vh";

    brilho.style.animationDelay = (Math.random() * 3) + "s";

    decoracao.appendChild(brilho);
}

// 📩
