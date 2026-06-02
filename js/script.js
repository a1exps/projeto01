//eventos dentro do Banner
//captura o botão 'saiba mais' e retorna uma mensagem
let btnBanner = document.getElementById("button-banner");
btnBanner.addEventListener("click", () => {
    alert("Obrigado pelo interesse em nossos jatos. Mais novidades em breve!");

    //console.log(btnBanner.classList); //console para criar o array com as classes
    //inclusão de conceitos: remover classes; incluir classe, e alterar texto
    btnBanner.classList.remove("bg-black", "hover:bg-gray-800");
    btnBanner.classList.add("bg-gray-600");
    btnBanner.innerText = "Aguarde novidades!";
});

//Sistema de curtidas nos cards (manipulação de múltiplos elementos)
//seleciona todos os botões de curtida da página usando a classe comum
let buttonsLike = document.querySelectorAll("#cards .btn-like");
//console.log(buttonsLike);

//FOR para percorrer todos os btn-like do array
buttonsLike.forEach((button) => {
    //console.log(button);
    //escutar o click do 'button'
    button.addEventListener("click", () => {
        //console.log("novo coração");
        //capturar elemento SPAN
        let spanLikeCount = button.querySelector(".like-count");
        //capturar o conteúdo de SPAN
        let count = Number(spanLikeCount.innerText);
        //incrementa o contador
        count++;
        //devolve o novo valor incrementado, para o elemento SPAN .like-count
        spanLikeCount.innerText = count;

        //altera as propriedades CSS a partir do contador maior de zero
        if (count > 0) {
            button.classList.remove("text-gray-500", "hover:text-red-500");
            button.classList.add("text-red-500", "hover:text-red-300");
        }
    });
});

//Monta um menu de navegação dinâmica (simulação de consulta endpoint back-end)
const MENU_API = "../back-end/menu.json"

async function renderMenu() {
    // console.log("Render Menu acessado");

    //realizar fetch no endereço do endpoint back-end
    let resposta = await fetch(MENU_API);
    //console.log(resposta);

    //converte em um array de objetos que podem ser manipulados pelo js
    let dadosMenu = await resposta.json();
    //console.log(dadosMenu);

    //captura DIV menu
    let menuHtml = document.getElementById("menu");

    dadosMenu.forEach((itemMenu) => {
        console.log(itemMenu.title);

        if (itemMenu.active) {
            const optTarget = itemMenu.external ? 'target="_blank"' : "";
            menuHtml.innerHTML += `
            <div>
            <a class="p-5 rounded-xl hover:bg-black hover:text-white transition duration-300"
                href="${itemMenu.link}" ${optTarget}>${itemMenu.title}</a>
            </div>
            `;
        }
    });

}

renderMenu();