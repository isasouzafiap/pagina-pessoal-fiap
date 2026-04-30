const btn = document.getElementById("btnTopo");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const acc = document.querySelector(".accordion");

acc.addEventListener("click", function () {
    this.classList.toggle("ativo");

    const painel = this.nextElementSibling;

    if (painel.style.display === "block") {
        painel.style.display = "none";
    } else {
        painel.style.display = "block";
    }
});

const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", function () {

    menu.classList.toggle("ativo");
    btnMenu.classList.toggle("ativo");

});