let sobre = document.getElementById("sobre");

let ultimoScroll = 0;


const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    let scrollAtual = window.scrollY;

    if (scrollAtual < ultimoScroll) {
        // rolando para cima → mostrar
        header.classList.add("mostrar");
    } else {
        // rolando para baixo → esconder
        header.classList.remove("mostrar");
    }

    ultimoScroll = scrollAtual;
});


sobre.addEventListener("mouseover", function (event) {
    event.preventDefault();
    sobre.style.color = "red"
    
})
