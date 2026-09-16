// ARRAY DE IMAGENS 
let imagens=[
    "./src/assets/img1.jpeg",
    "./src/assets/img2.jpeg",
    "./src/assets/img3.jpeg"
];
// POSIÇÃO QUE VAI INICIAR AS IMAGENS
let index=0;
// TEMPO PARA TROCAR AS IMAGENS
let tempo = 1000; // 1 segundos

//FUNÇÃO DO SLIDESHOW
function SlideShow(){
    // DOM- PEGO O ID E PASSA O CAMINHO DAS IMAGENS
    document.getElementById("imgBanner").src=imagens[index];
    // INCREMENTO DAS IMAGENS
    index++;
    // ESTRUTURA CONDICIONAL IF(SE A POSIÇÃO FOR IGUAL A IMAGEM)
    if(index == imagens.length){
        //INICIA NA POSIÇÃO 0 ( OU SEJA SEMPRE VOLTA PARA O 0)
        index=0;
    }

    //MÉTODO SETIMEOUT PARA EXECUTAR A FUNÇÃO(CALLBACK) E
    //  CHAMAR O TEMPO
    setTimeout("SlideShow()",tempo)

}
//EXECUTAR A FUNÇÃO
SlideShow();

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})