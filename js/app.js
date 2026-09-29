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
            <img
                src="${import.meta.env.BASE_URL}imagens/hero-gato.800.webp"
                srcset="
                     ${import.meta.env.BASE_URL}imagens/hero-gato.480.webp 480w,
                    ${import.meta.env.BASE_URL}imagens/hero-gato.800.webp 800w,
                    ${import.meta.env.BASE_URL}imagens/hero-gato.1200.webp 1200w
            "
            sizes="(max-width: 768px) 100vw, 50vw"
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
        imagem:  `${import.meta.env.BASE_URL}imagens/animal1.webp`,
        alt: "Panqueca, gatinho resgatado pelo Projeto Patas"
    },
    {
        nome: "Blake",
        imagem: `${import.meta.env.BASE_URL}imagens/animal2.webp`,
        alt: "Blake, gato resgatado pelo Projeto Patas"
    },
    {
        nome: "Farofa",
        imagem: `${import.meta.env.BASE_URL}imagens/animal3.webp`,
        alt: "Farofa, gato resgatado pelo Projeto Patas"
    },
    {
        nome: "Dorothy",
        imagem: `${import.meta.env.BASE_URL}imagens/animal4.webp`,
        alt: "Dorothy, gatinha resgatada pelo Projeto Patas"
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
            <a href="#" class="botao" data-rota="cadastro">Quero adotar</a>
        </div>

        <div class="animais">
           ${cardsGatos}
        </div>

        </section>
    `;
}

function mostrarAdotar() {
    app.innerHTML = `
    <section id="adotar">
        <h2>Como adotar</h2>
        <p>Adotar é um compromisso para toda a vida do gatinho. Por isso, o processo tem alguns passos simples, que ajudam a garantir que cada animal encontre um lar responsável.</p>
 
        <ol class="passos">
            <li><strong>Conheça os gatinhos.</strong> Veja quem está disponível para adoção na página de Adoção.</li>
            <li><strong>Faça seu cadastro.</strong> Preencha o formulário com seus dados para que a equipe possa entrar em contato.</li>
            <li><strong>Converse com a nossa equipe.</strong> Vamos conhecer você e a sua rotina para encontrar o gatinho mais compatível.</li>
            <li><strong>Assine o termo de adoção responsável.</strong> Depois disso, é só levar seu novo amigo para casa.</li>
        </ol>
 
        <a href="#" class="botao" data-rota="cadastro">Fazer cadastro</a>
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
    
            <div class="alerta alerta-sucesso" id="alerta-doacao">
                <strong>Obrigada por contribuir! .✦ ݁˖</strong>
                <p>Sua ajuda faz diferença para os animais do Projeto Patas.</p>
            </div>

            <a href="#" class="botao" data-rota="cadastro">Quero doar</a>

        </section>
    
        <section id="voluntariado">
            <h3>Voluntariado</h3>
        
            <p>Você pode participar do Projeto Patas ajudando nas ações de cuidado, divulgação, campanhas de adoção e eventos de conscientização. O trabalho voluntário contribui diretamente para o bem-estar dos animais.</p>

            <a href="#" class="botao" data-rota="cadastro">Cadastre-se para voluntariado</a>

        </section>
`
}
/* Nova função: mostrarCadastro()*/
function mostrarCadastro() {
    app.innerHTML = `
    <section id="cadastro" class="grid">
        <div class="cadastro-conteudo">
            <h2>Faça seu cadastro</h2>
            <p>Preencha seus dados para adotar um gatinho ou acompanhar suas doações ao Projeto Patas.</p>

            <form id="form-cadastro" class="form-cadastro" novalidate> 
            <fieldset> 
                <legend>Informações pessoais</legend>

                <div class="campo-grupo">
                            <label for="nome">Nome completo</label>
                            <input type="text" id="nome" name="nome" required>
                        </div>
 
                        <div class="campo-grupo">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" name="email" required>
                        </div>
 
                        <div class="campo-grupo">
                            <label for="nascimento">Data de nascimento</label>
                            <input type="date" id="nascimento" name="nascimento" required>
                        </div>
 
                        <div class="campo-grupo">
                            <label for="cpf">CPF</label>
                            <input type="text" id="cpf" name="cpf" pattern="[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}-?[0-9]{2}" required>
                        </div>
 
                        <div class="campo-grupo">
                            <label for="telefone">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}" required>
                        </div>
                    </fieldset>
 
                    <fieldset>
                        <legend>Endereço</legend>
 
                        <div class="campo-grupo">
                            <label for="endereco">Endereço</label>
                            <input type="text" id="endereco" name="endereco" required>
                        </div>
 
                        <div class="campo-grupo">
                            <label for="cep">CEP</label>
                            <input type="text" id="cep" name="cep" pattern="[0-9]{5}-?[0-9]{3}" required>
                        </div>
 
                        <div class="campo-grupo">
                            <label for="cidade">Cidade</label>
                            <input type="text" id="cidade" name="cidade" required>
                        </div>
 
                        <div class="campo-grupo">
                            <label for="estado">Estado</label>
                            <select id="estado" name="estado" required>
                                <option value="">Selecione</option>
                                <option value="SP">São Paulo</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PR">Paraná</option>
                            </select>
                        </div>
                    </fieldset>
 
                    <fieldset>
                        <legend>Dados de acesso</legend>
 
                        <div class="campo-grupo">
                            <label for="senha">Senha</label>
                            <input type="password" id="senha" name="senha" required>
                        </div>
 
                        <div class="campo-grupo">
                            <label for="confirmar-senha">Confirmar senha</label>
                            <input type="password" id="confirmar-senha" name="confirmar-senha" required>
                        </div>
                    </fieldset>
 
                    <button type="submit" class="botao">Cadastrar</button>
                </form>
            </div>
        </section>
    `;
    configurarValidacaoCadastro();
}


/* ROTEAMENTO E EVENTOS */

function ativarRota(rota) {
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
    if (rota === "cadastro") {
        mostrarCadastro();
    }
    if (rota === "adotar") {
        mostrarAdotar();
    }
}


document.addEventListener("click", function(event) {
    const link = event.target.closest("[data-rota]");

    if (!link) {
        return;
    }

    event.preventDefault();
    const rota = link.dataset.rota;
    location.hash = rota;

    // Salva a última rota acessada no localStorage
    const historico = {
        rota: rota
    };

    localStorage.setItem(
        "historicoProjetoPatas",
        JSON.stringify(historico)
    );

    ativarRota(rota);
});

window.addEventListener("hashchange", function() {
    const rota = location.hash.replace("#", "") || "inicio";
    ativarRota(rota);
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
    }, 6000);
});

// toast ao finalizar cadastro 
function mostrarToastCadastro() {
    const toast = document.querySelector("#toast");
    toast.classList.add("mostrar");
 
    setTimeout(function() {
        toast.classList.remove("mostrar");
    }, 6000);
}

/*pinta o campo de verde (válido) ou terracota (invalido) */
function marcarCampo(campo) {
    if (campo.checkValidity()) {
        campo.classList.add("campo-sucesso");
        campo.classList.remove("campo-erro");
    } else {
        campo.classList.add("campo-erro");
        campo.classList.remove("campo-sucesso");
    }
}

function configurarValidacaoCadastro() {
    const formulario = document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }

    const campos = formulario.querySelectorAll("input, select");
    const senha = formulario.querySelector("#senha");
    const confirmarSenha = formulario.querySelector("#confirmar-senha");

    /* setCustomValidity faz o checkValidity() do campo falhar enquanto
       as senhas forem diferentes. Sem isso, a checagem de senha seria
       só visual e o formulário poderia ser enviado com senhas diferentes. */
    function conferirSenhas() {
        if (confirmarSenha.value === senha.value) {
            confirmarSenha.setCustomValidity("");
        } else {
            confirmarSenha.setCustomValidity("As senhas não coincidem");
        }
    }

    campos.forEach(function(campo) {
        campo.addEventListener("input", function() {
            if (campo === senha || campo === confirmarSenha) {
                conferirSenhas();
            }

            marcarCampo(campo);

            // se a senha mudou depois da confirmação ser digitada,
            // a confirmação precisa ser revalidada também
            if (campo === senha && confirmarSenha.value !== "") {
                marcarCampo(confirmarSenha);
            }
        });
    });

    formulario.addEventListener("submit", function(event) {
        // sem back-end, um envio normal recarregaria a página
        event.preventDefault();

        conferirSenhas();

        if (!formulario.checkValidity()) {
            campos.forEach(marcarCampo);
            return;
        }

        mostrarToastCadastro();
        location.hash = "inicio";
    });
}

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

// garante que a tela inicial também tenha um # no histórico
// (replaceState troca a entrada atual, não cria outra e não dispara hashchange)
history.replaceState(null, "", "#" + rotaInicial);

ativarRota(rotaInicial);