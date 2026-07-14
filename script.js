const envelope = document.getElementById("envelope");
const carta = document.querySelector(".carta");
const mensagem = document.querySelector(".message");
const clique = document.querySelector(".click");

let aberto = false;

envelope.addEventListener("click", () => {

    if (!aberto) {

        envelope.classList.add("aberto");
        carta.classList.add("mostrar");
        mensagem.classList.add("mostrar");
        clique.style.opacity = "0";

        aberto = true;

    } else {

        envelope.classList.remove("aberto");
        carta.classList.remove("mostrar");
        mensagem.classList.remove("mostrar");
        clique.style.opacity = "1";

        aberto = false;

    }

});
