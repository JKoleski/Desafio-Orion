const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function maiorMenor(tam)
{
    var numeroReal = Math.floor(Math.random() * tam);
    console.log(`Numero gerado: ${numeroReal}`);
    console.log(`Tente descobrir um numero inteiro entre 0 e ${tam-1}\n`);
    teste(numeroReal);
}
function teste(x)
{   
    let y;
    readline.question('Chute um número:\n', y => 
    {
    console.log(`Você chutou: ${y}!`);
    readline.close();
    console.log(y);
    return y;
    }
    );
    console.log(`AAA: ${y}`);
}

maiorMenor(31);