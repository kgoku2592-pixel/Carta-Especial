const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const texto = document.querySelector(".clique");

let aberto = false;

envelope.addEventListener("click", () => {

    if (!aberto) {

        envelope.classList.add("open");

        texto.textContent = "Espero que você goste 🌻";

        setTimeout(() => {
            letter.style.transform = "translateY(-220px)";
        }, 700);

        aberto = true;

    } else {

        letter.style.transform = "translateY(0)";

        setTimeout(() => {
            envelope.classList.remove("open");
            texto.textContent = "Clique no envelope";
        }, 400);

        aberto = false;

    }

});
