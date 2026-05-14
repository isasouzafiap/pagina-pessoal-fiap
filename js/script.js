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

const form = document.getElementById("formContato");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    const erros = document.querySelectorAll(".erro");

    erros.forEach(erro => {
        erro.textContent = "";
    });

    nome.style.border = "";
    email.style.border = "";
    mensagem.style.border = "";

    let formularioValido = true;

    if (nome.value.trim().length < 3) {

        erros[0].textContent = "O nome deve ter pelo menos 3 caracteres.";
        nome.style.border = "2px solid red";
        formularioValido = false;
    }

    if (
        email.value.trim() === "" ||
        !email.value.includes("@") ||
        !email.value.includes(".com")
    ) {

        erros[1].textContent = "Digite um e-mail válido.";
        email.style.border = "2px solid red";
        formularioValido = false;
    }
    
    if (mensagem.value.trim().length < 10) {

        erros[2].textContent = "A mensagem deve ter pelo menos 10 caracteres.";
        mensagem.style.border = "2px solid red";
        formularioValido = false;
    }

    if (formularioValido) {

        document.getElementById("mensagemStatus").innerHTML =
            "✅ Mensagem enviada com sucesso!";

        document.getElementById("mensagemStatus").style.color = "green";

        console.log("Dados enviados:");
        console.log("Nome:", nome.value);
        console.log("Email:", email.value);
        console.log("Mensagem:", mensagem.value);

        form.reset();
    }
});