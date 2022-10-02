const palavras = ["Gato","Casa","Voto","Banana","Carro","Animal","Computador","JavaScript","Celular"];
//palavras: armazena as palvras que podem corresponder ao resultado
var palavra, tam, letra, cont, arrayChute, vidas, estado=0,ultimasJogadas,jaJogou;
//palavra: Palavra escolhida aleatóriamente da array palavras
//tam: tamanho da palavra
//letra: Letra chutada no jogo
//cont: contador utilizado para saber se o jogador acertou a palavra 
//arrayChute: uma array inicializada em "_" que vai armazenando as letras acertadas
//vidas: quantas vidas o jogador tem
//estado: armazena o estado do jogo. estado = 0, jogo não iniciado, estado = 1, jogo inicializado, estado = -1, jogo terminou
//ultimasJogadas: armazena as ultimas jogadas do jogador

function inicializa(){ //inicializa o jogo e grande parte das suas variáveis
    //além disso, ele também altera o texto do site
    let numeroAleatorio = Math.floor(Math.random() * palavras.length);//Gera um número aleatório
    palavra = palavras[numeroAleatorio]; //Escolhe uma palavra com o número gerado
    tam = palavra.length; // Mede o tamananho da palavra
    arrayChute = Array(tam).fill("-"); //Inicializa a arrayChute com "-" em suas casas
    cont = 0;//Inicializa o contador
    estado = 1;//Coloca o estado como inicializado
    vidas=10;//Inicializa as vidas
    letra="";//Inicializa letra
    ultimasJogadas="";//Inicializa a array com ""
    //console.log("Inicializado!");
    document.getElementById("forca").innerHTML = arrayChute; //Mostra a palavra a ser descoberta
    document.getElementById("vidas").innerHTML = `Vidas restantes: ${vidas}`;//Mostra quantas vidas tem o jogador
    document.getElementById("jogadasAnteriores").innerHTML = `Jogadas anteriores: ${ultimasJogadas}`;//Mostra as jogadas anteriores do jogador
}
function testaLetra(){ //função utilizada pare testar se a letra corresponde a palavra escolhida
    if(estado === 0){ //Testa se o jogo já foi inicializado
        alert("Jogo não inicializado!");
    } 
    else if(estado === -1){ //Testa se o jogo já acabou
        alert("O jogo já acabou!");
    } 
    else{
        for(let i=0; tam > i; i++){
            if(arrayChute[i] == letra){
                jaJogou = 1;
            }
        }
        if(jaJogou === -1){
            let aux, contAux=0;
            for(let i=0; tam > i; i++){
                if(palavra[i] == letra){
                    arrayChute[i] = letra;
                    cont++;//Incremento contador
                    contAux++;
                    jaJogou = -1;
                    document.getElementById("forca").innerHTML = arrayChute;
                }
                else{
                    aux = letra.toUpperCase();
                    if(palavra[i] == aux){
                        arrayChute[i] = aux;
                        cont++;//Incremento contador
                        contAux++;//Contador auxiliar utilizado para testar se a letra não corresponde a nenhuma letra da array palavra
                        jaJogou = -1;
                        document.getElementById("forca").innerHTML = arrayChute;
                    } 
            }
            }
                if(contAux === 0){ //Testa se não tem nenhuma letra correspondente
                    vidas--; //Descresce as vidas do jogador
                    jaJogou = 1;
                    document.getElementById("vidas").innerHTML = `Vidas restantes: ${vidas}`;
                    if(vidas === 0){ //Testa se já acabaram as vidas
                        estado = -1; //Altera o estado para jogo terminou
                        document.getElementById("vidas").innerHTML = "As suas vidas acabaram!";
                        document.getElementById("forca").innerHTML = `A palavra era: ${palavra}`;
                    }
                }
                ultimasJogadas = ultimasJogadas + letra; //Adiciona a letra jogada a array das jogadas anteriores
                document.getElementById("jogadasAnteriores").innerHTML = `Jogadas anteriores: ${ultimasJogadas}`;//Mostra as jogadas anteriores    
                //console.log(`Contador: ${cont}`);//Contador utilizado para testes
        } else if(jaJogou === 1){
            alert("Você já jogou esta palavra!");
        }            
        }    
}   


function testaPalavra(){ //função usada para testar se o jogador acertou a palavra e ganhou o jogo
    if(estado === 1){
        if(cont === tam){
            //console.log("Ganhou!");
            estado = -1;//Altera o estado para jogo finalizado
            document.getElementById("forca").innerHTML = `Parabéns, você acertou a palavra: ${palavra}`;//Mostra a palavra 
        }
    }    
}

function entradaLetra() //Função usada para o input do usuário
{
    if(estado === 0){ //Testa se o jogo já foi inicializado
        alert("Jogo não inicializado!");//Alerta que o jogo não foi inicializado
    } 
    else if(estado === -1){ //Testa se o jogo já acabou
        alert("O jogo já acabou!");//Alerta que o jogo acabou
    } 
    else{
        var entrada=prompt('Input');
        console.log(entrada);
        letra = entrada;
        jaJogou = -1;
        console.log(`letra selecionada: ${letra}`);
        document.getElementById("letraSelect").innerHTML = `Letra selecionada: ${letra}`;
    }       
}
