function pararTeste(){
    clearInterval(timer);
    clearInterval(timer2);
    alert("Parabéns você interrompeu os testes antes que eles pudessem começar");
}

function escrever(){
    document.write("<h3>Testando...</h3>");
}

function iniciarTeste(){
    var timer = setInterval(escrever, 1000);
    var timer2 = setTimeout(escrever, 5000);
}


function carro(){
    this.ano = "";
    this.cor = "";
    this.marca = "";
    this.modelo = "";

    this.inserirAno = function(ano){
        this.ano = ano;
        if(this.ano > 2000){
            this.carroNovo();
        }else{
            this.carrroVelho();
        }
    }

    this.carroNovo = function(){
        console.log("Seu carro esta mais para novo");
    }

    this.carrroVelho = function(){
        console.log("Seu carro esta mais para velho");
    }

    this.inserirCor = function(cor){
        this.cor = cor;
    }

    this.inserirMarca = function(marca){
        this.marca = marca;
    }

    this.inserirModelo = function(modelo){
        this.modelo = modelo;
    }
}

var newcar = new carro();

function criarCarro(){

    marca = prompt("Qual a marca do carro ?");
    newcar.inserirMarca(marca);
    document.getElementById('marca').innerHTML = newcar.marca;

    modelo = prompt("Qual o modelo do carro ?");
    newcar.inserirModelo(modelo);
    document.getElementById('modelo').innerHTML = newcar.modelo;

    ano = prompt("Qual o ano do carro ?");
    newcar.inserirAno(ano);
    document.getElementById('ano').innerHTML = newcar.ano;

    cor = prompt("Qual a cor do carro ?");
    newcar.inserirCor(cor);
    document.getElementById('cor').innerHTML = newcar.cor;
}



function mudarMarca(){
    marca = prompt("Qual a marca do carro ?");
    newcar.inserirMarca(marca);
    document.getElementById('marca').innerHTML = newcar.marca;
}

function mudarModelo(){
    modelo = prompt("Qual o modelo do carro ?");
    newcar.inserirModelo(modelo);
    document.getElementById('modelo').innerHTML = newcar.modelo;
}

function mudarAno(){
    ano = prompt("Qual o ano do carro ?");
    newcar.inserirAno(ano);
    document.getElementById('ano').innerHTML = newcar.ano;
}

function mudarCor(){
    cor = prompt("Qual a cor do carro ?");
    newcar.inserirCor(cor);
    document.getElementById('cor').innerHTML = newcar.cor;
}










