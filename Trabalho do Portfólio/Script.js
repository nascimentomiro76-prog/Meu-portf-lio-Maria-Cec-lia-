
// 1. Selecionar os elementos do site
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const botaoTema = document.querySelector("#tema");
const saudacao = document.querySelector("#saudacao");

// 2. Saudação dinâmica
function atualizarSaudacao() {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
        saudacao.textContent = "Bom dia! Que bom ter você por aqui.";
    } else if (hora >= 12 && hora < 18) {
        saudacao.textContent = "Boa tarde! Que bom ter você por aqui.";
    } else {
        saudacao.textContent = "Boa noite! Que bom ter você por aqui.";
    }
}

atualizarSaudacao();

// 3. Atualizar o ano automaticamente
document.querySelector("#ano").textContent =
    new Date().getFullYear();

// 4. Menu hambúrguer
menuToggle.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");

    menuToggle.setAttribute("aria-expanded", String(aberto));

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fechar menu ao clicar em um link
menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});

// Fechar menu com a tecla Escape
document.addEventListener("keydown", (evento) => {
    if (
        evento.key === "Escape" &&
        menu.classList.contains("aberto")
    ) {
        menu.classList.remove("aberto");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
    }
});

// 5. Modo claro e escuro
botaoTema.addEventListener("click", () => {
    const escuro =
        document.documentElement.dataset.tema !== "escuro";

    if (escuro) {
        document.documentElement.dataset.tema = "escuro";

        botaoTema.textContent = "☀ Modo claro";
        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );
    } else {
        delete document.documentElement.dataset.tema;

        botaoTema.textContent = "◐ Tema";
        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );
    }
});

// 6. Copiar informações de contato
function copiarContato(texto, elemento) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            elemento.textContent = "Copiado com sucesso!";

            setTimeout(() => {
                elemento.textContent = "";
            }, 2500);
        })
        .catch(() => {
            elemento.textContent =
                "Não foi possível copiar. Copie manualmente.";
        });
}

// Copiar telefone
const botaoTelefone = document.querySelector("#copiar-telefone");
const avisoTelefone = document.querySelector("#aviso-telefone");

if (botaoTelefone) {
    botaoTelefone.addEventListener("click", () => {
        copiarContato(
            "+55 84 98698-0809",
            avisoTelefone
        );
    });
}

// Copiar e-mail
const botaoEmail = document.querySelector("#copiar-email");
const avisoEmail = document.querySelector("#aviso-email");

if (botaoEmail) {
    botaoEmail.addEventListener("click", () => {
        copiarContato(
            "nascimentomiro76@gmail.com",
            avisoEmail
        );
    });
}
