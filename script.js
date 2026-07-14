const envelope = document.getElementById("envelope");
const carta = document.querySelector(".carta");
const texto = document.querySelector(".clique");

envelope.addEventListener("click", () => {

    envelope.classList.add("abrir");

    texto.style.display = "none";

    carta.style.display = "block";

    setTimeout(() => {
        carta.classList.add("mostrar");
    }, 150);

});
