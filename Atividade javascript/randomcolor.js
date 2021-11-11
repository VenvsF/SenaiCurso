var btn = document.querySelector('button');

function random(number){
    return Math.floor(Math.random()*(number+1));
}

btn.onclick = function (){
var rndCol = 'rgb('+ random(255)+','+random(255)+','+random(255)+')';
    document.body.style.backgroundColor = rndCol;
}
/* A função document.querySelector serve para selecionar 
     um elemento no código HTML5. A função random gera um 
     número aleatório. A última função manipula um evento. 
     O onClick define quando o usuário pode clicar sobre 
     um botão. A variável rndColor está recebendo um valor
     RGB. Perceba que é utilizada aspas simples ‘. Na
     segunda função foi criado um valor random para buscar
     um número aleatório, ou seja, o sistema retornará um 
     número aleatório de 0 até 255. Foram passados três,
     pois a junção do RGB (red, green e blue) gera uma cor.
     Na última linha do código, antes de fechar o escopo
     (chave }), o documento HTML5, em seu body todo 
     (largura e altura), receberá um style de backgroundColor 
     aleatório. */