let linkedinDiv = document.getElementById("linkedin_div");

linkedinDiv.addEventListener('click', goLinkedin)

function goLinkedin() {
    //alert("deveria ir para o linkedin")
    //window.location = "https://www.linkedin.com/in/moraes-juliana/"
    novaAba("https://www.linkedin.com/in/moraes-juliana/")
}

let github = document.getElementById("git_hub");
github.addEventListener("click", goGithub)

function goGithub() {
    novaAba("https://github.com/jumonik09/")
}

let whats = document.getElementById("whatsapp");
whats.addEventListener("click", goWhatsapp)

function goWhatsapp() {
    novaAba("https://api.whatsapp.com/send?phone=5531988361899")
}


let mail = document.getElementById("email");
mail.addEventListener("click", goEmail)

function goEmail() {
    novaAba("mailto:julianamonik@hotmail.com")
}

function novaAba(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


let hamburguer = document.getElementById('hamburguer');
let itens_menu = document.getElementById('itens_menu');

hamburguer.addEventListener('click', aparecer);

function aparecer() {
    if (itens_menu.style.display == 'block') {
        itens_menu.classList.remove('show');
    } else {
        itens_menu.classList.toggle('show');
    }
}


