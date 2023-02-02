function revela() {
    var revelar = document.querySelectorAll(".revela");

    revelar.forEach((revela) => {
        var alturaJanela = window.innerHeight;
        var elementoTop = revela.getBoundingClientRect().top;
        var elementoVisivel = 100;

        if(elementoTop < alturaJanela - elementoVisivel ) {
            revela.classList.add("ativo");
        } else {
            revela.classList.remove("ativo");
        }
    });
}

window.addEventListener("scroll",revela);
