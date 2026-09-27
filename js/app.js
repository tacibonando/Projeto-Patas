console.log("JavaScript funcionando!");

const app = document.querySelector("#app");

/* FUNÇÃO DE REDERIZAÇÃO */
function mostrarInicio() {
    app.innerHTML = `
    <section id="inicio" class="grid">
        <div  class="destaque">
            <h2>Olá, somos o <em>Projeto Patas ⋆˚꩜｡</em></h2>
            <p>O Projeto Patas atua no resgate e cuidado de animais em situação de abandono, oferecendo alimentação, atendimento veterinário e acolhimento até que encontrem um lar responsável.</p>
        </div>

        <div class="imagem-destaque">
            <img src="imagens/hero-gato.webp"
                alt="Gato resgatado pelo Projeto Patas">
        </div>
        </section>
        `;
}
function mostrarSobre() {
    app.innerHTML = `
        <section id="sobre" class="grid">
            <div class="sobre-conteudo">
                <h2>★ Sobre nós ★</h2>
                <p>Nossa missão é proteger animais em situação de abandono, oferecendo cuidados, alimentação e atendimento veterinário. Também buscamos encontrar famílias responsáveis para proporcionar aos animais uma vida segura e cheia de carinho.</p>
            </div>
        </section>
    `;
}
const gatos = [
    {
        nome: "Panqueca",
        imagem: "imagens/animal1.webp",
        alt: "Panqueca, gatinho resgatado pelo Projeto Patas"
    },
    {
        nome: "Blake",
        imagem: "imagens/animal2.webp",
        alt: "Blake, gato resgatado pelo Projeto Patas"
    },
    {
        nome: "Farofa",
        imagem: "imagens/animal3.webp",
        alt: "Farofa, gato resgatado pelo Projeto Patas"
    },
    {
        nome: "Dorothy",
        imagem: "imagens/animal4.webp",
        alt: "Dorothy, gatinha restagada pelo Projeto Patas"
    }  
];

function mostrarAdocao() {
    const cardsGatos = gatos.map(function(gato) {
        return `
        <article class="card-gato">
                <img src="${gato.imagem}" alt="${gato.alt}">
                <span class="badge">★ Adote seu gatinho ★</span>
            </article>
        `;
    }).join("");

    app.innerHTML = `
        <section id="animais" class="grid">

        <div class="animais-intro">
            <h2>Nossos gatinhos para adoção</h2>
            <p>Conheça alguns dos gatinhos que foram resgatados e receberam cuidados enquanto aguardam uma família responsável para chamarem de lar.</p>
            
        </div>

        <div class="animais">
           ${cardsGatos}
        </div>

        </section>
    `;
}

function mostrarAjudar() {
    app.innerHTML = `
    <section id="ajudar">
            <h2>Como ajudar</h2>
            <p>Existem diferentes formas de apoiar o Projeto Patas. Você pode contribuir por meio de doações, participar como voluntário ou ajudar na divulgação das campanhas de adoção.</p>

        <section id="doacoes">
            <h3>Doações</h3>
            <p>As doações ajudam a custear alimentação, medicamentos, consultas veterinárias e outros cuidados necessários para os animais resgatados. Toda contribuição faz diferença para manter nosso trabalho.</p>
        <button class="botao" id="botao-doar" type="button">
            Fazer uma doação
        </button>
            <div class="alerta alerta-sucesso" id="alerta-doacao">
                <strong>Obrigada por contribuir! .✦ ݁˖</strong>
                <p>Sua ajuda faz diferença para os animais do Projeto Patas.</p>
            </div>
        </section>
    
        <section id="voluntariado">
            <h3>Voluntariado</h3>
        
            <p>Você pode participar do Projeto Patas ajudando nas ações de cuidado, divulgação, campanhas de adoção e eventos de conscientização. O trabalho voluntário contribui diretamente para o bem-estar dos animais.</p>
        </section>

            <button class="botao" id="botao-ajudar" type="button">
                Quero ajudar
            </button>
        </section>
`
}

/* ROTEAMENTO E EVENTOS */
const links = document.querySelectorAll("[data-rota]");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {

        event.preventDefault();
        const rota = link.dataset.rota;
        location.hash = rota;
        // Salva a última rota acessada no localStorage
        const historico ={
            rota: rota
        };

        localStorage.setItem(
            "historicoProjetoPatas",
            JSON.stringify(historico)
        );

        if (rota === "inicio") {
            mostrarInicio();
        }
        if (rota === "sobre") {
            mostrarSobre();
        }
        if (rota === "adocao") {
            mostrarAdocao();
        }
        if (rota === "ajudar") {
            mostrarAjudar();
        }
    });
});

window.addEventListener("hashchange", function() {
    const rota = location.hash.replace("#", "");

    if (rota === "inicio") {
        mostrarInicio();
    }
    if (rota === "sobre") {
        mostrarSobre();
    }
    if (rota === "adocao") {
        mostrarAdocao();
    }
    if (rota === "ajudar") {
        mostrarAjudar();
    }
});

// botão "quero ajudar"
app.addEventListener("click", function(event) {
    const botao = event.target.closest("#botao-ajudar");
    
    if (!botao) {
        return;
    }

    const toast = document.querySelector("#toast");
    toast.classList.add("mostrar");

    setTimeout(function() {
        toast.classList.remove("mostrar");
    }, 5000);
});

// botão "fazer uma doação"
app.addEventListener("click", function(event) {
        const botao = event.target.closest("#botao-doar");
        
        if (!botao) {
            return;
        }
        
        const alerta = document.querySelector("#alerta-doacao");
        alerta.style.display = "block";
    });
    
// página inicial 
const rotaHash = location.hash.replace("#", ""); 

// Recupera a última rota salva no localStorage
const dadosSalvos = localStorage.getItem("historicoProjetoPatas");
let rotaSalva = "";
if (dadosSalvos) {
    const historico = JSON.parse(dadosSalvos);
    rotaSalva = historico.rota;
}

// Se existir uma rota no endereço, ela tem prioridade.
// Caso contrário, usa a rota salva.
// Se não existir nenhuma, abre a página inicial.
const rotaInicial = rotaHash || rotaSalva || "inicio";

if (rotaInicial === "sobre") {
    mostrarSobre();
} else if (rotaInicial === "adocao") {
    mostrarAdocao();
}  else if (rotaInicial === "ajudar") {
    mostrarAjudar();
} else {
    mostrarInicio();
}
