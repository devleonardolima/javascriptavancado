function pararTeste(){
    clearInterval(timer);
    clearInterval(timer2);
    alert("Parabéns você interrompeu os testes antes que eles pudessem começar");
}

function escrever(){
    document.write("<h3>Testando...</h3>");
}

var timer = setInterval(escrever, 1000);

var timer2 = setTimeout(escrever, 5000);

