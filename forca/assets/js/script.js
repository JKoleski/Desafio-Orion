function mudaHello()
{
    if(document.getElementById("hello").innerHTML === "Parágrafo mudado!")
    {
        document.getElementById("hello").innerHTML = "Olá, mundo!";
    }
    else
    {
        document.getElementById("hello").innerHTML = "Parágrafo mudado!";
    }
    
}
const palavras = ["Gato","Casa","Voto","Banana","Carro","Animal","Computador","JavaScript","Celular"];
var palavra, tam, letra, cont, arrayChute, estado;
//palavra: Palavra pega aleatóriamente da array palavras
//tam: tamanho da palavra
//letra: Letra chutada no jogo
//arrayChute: uma array inicializada em "_" que vai armazenando as letras acertadas
//estado: armazena o estado do jogo. estado = 0, jogo não iniciado, estado = 1, jogo inicializado, estado = -1, jogo terminou;

function inicializa(){
    let numeroAleatorio = Math.floor(Math.random() * palavras.length);
    palavra = palavras[numeroAleatorio];
    tam = palavra.length;
    arrayChute = Array(tam).fill("-");
    cont = 0;
    estado = 1;
    console.log("Inicializado!");
    document.getElementById("forca").innerHTML = arrayChute;
}
function testaLetra(){
    for(let i=0; tam > i;i++){
        if(palavra[i] == letra){
            arrayChute[i] = letra;
            cont++;
        }
        else{
            let aux = letra.toUpperCase();
            if(palavra[i] == aux){
                arrayChute[i] = aux;
                cont++;
            } 
        }
    }    
    console.log(`Contador: ${cont}`);
}
function testaPalavra(){
    if(cont === tam){
        console.log("Ganhou!");
        estado = -1;
    }
}
function entradaLetra()
{
    var entrada=console.log(prompt('Input'));
    console.log(entrada);
    letra = entrada;
    console.log(`letra selecionada: ${letra}`);
    document.getElementById("letraSelect").innerHTML = `Letra selecionada: ${letra}`;   
}
inicializa();
letra = "a";
testaLetra();
letra = "g"
testaLetra();
letra = "t"
testaLetra();
letra = "o"
testaLetra();
testaPalavra();
console.log(arrayChute);
