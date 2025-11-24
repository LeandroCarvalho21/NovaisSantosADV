let sobre = document.getElementById("sobre");
let close_hamburguer = document.querySelector("#close_hamburguer")
let open_hamburguer = document.querySelector("#open_hamburguer")
let links = document.querySelector("#links")
let ns_advocacia = document.querySelector(".ns-advocacia")
let nav = document.querySelector("#nav")
let ultimoScroll = 0;
let open_close = 1
const header = document.getElementById("header");

open_hamburguer.addEventListener("click", function (event) {
    event.preventDefault();
    if (open_close === 1) {
        links.style.display = "block";
        ns_advocacia.style.display = "none";
        nav.style.width = "100%"
        open_hamburguer.style.display = "none";
        close_hamburguer.style.display = "block"
    }

})

close_hamburguer.addEventListener("click", function (event) {
    event.preventDefault();
    if (open_close !== 2) {
        header.style.display = "flex";
        links.style.display = "none";
        ns_advocacia.style.display = "flex";
        nav.style.width = "0%"
        open_hamburguer.style.display = "block";
        close_hamburguer.style.display = "none"
    }


})




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
