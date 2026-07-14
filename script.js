// ==========================
// ELEMENTOS
// ==========================

const container = document.querySelector(".container");
const seal = document.getElementById("seal");

let aberto = false;

// ==========================
// ABRIR ENVELOPE
// ==========================

seal.addEventListener("click", () => {

    if (aberto) return;

    aberto = true;

    container.classList.add("aberto");

});

// ==========================
// IMPEDIR ARRASTAR A IMAGEM
// ==========================

const carta = document.getElementById("carta");

carta.addEventListener("dragstart", (e) => {
    e.preventDefault();
});
