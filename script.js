const envelope = document.getElementById("envelope");
const mensagem = document.querySelector(".mensagem");
const clique = document.querySelector(".click");

let aberto = false;

envelope.addEventListener("click", () => {

    if (!aberto) {

        envelope.classList.add("open");

        clique.style.opacity = "0";

        setTimeout(() => {
            mensagem.classList.add("show");
        }, 700);

        aberto = true;

    } else {

        envelope.classList.remove("open");

        mensagem.classList.remove("show");

        clique.style.opacity = "1";

        aberto = false;

    }

});
