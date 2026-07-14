const envelope = document.getElementById("envelope");
const message = document.querySelector(".message");
const clickText = document.querySelector(".click");

let aberto = false;

envelope.addEventListener("click", () => {

    if (!aberto) {

        envelope.classList.add("open");

        clickText.style.opacity = "0";

        setTimeout(() => {
            message.style.opacity = "1";
        }, 800);

        aberto = true;

    } else {

        envelope.classList.remove("open");

        message.style.opacity = "0";

        setTimeout(() => {
            clickText.style.opacity = "1";
        }, 400);

        aberto = false;

    }

});
