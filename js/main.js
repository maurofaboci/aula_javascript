
function clicou() {
   document.getElementById("popup").innerHTML = "obrigado por clicar";
  // console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.op.gg"); // outra aba
   // window.location.href = "https://www.op.gg"; //msm aba
}

function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse aqui";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui"
}

function load(){
    alert("pagina carregada");
}
function funcaochange(elemento){
    console.log(elemento.value)
}

/*    var validar=0;
function validaidade(idade){

    if (idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt ("qual sua idade");
console.log(validaidade(idade));
*/

 //var d = new Date();
 //alert(d);
 //alert(d.getDay());
 //alert(d.getHours());

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/


/*var count = 0;
while (count < 5){
    console.log(count);
    alert(count)
    count = count +1; //count ++ da na mesma
};
*/



/*
var idade = prompt("qual a sua idade");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}; 
*/


//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa)"}];
//console.log(frutas);
//alert(frutas[1].nome);

//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta);


//var lista = ["maça", "pera", "laranja"]; 
//lista.push("uva");
//lista.pop(); 
//console.log(lista.length);
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.join(" - "))



//var nome = "mauro faboci";
//var n1 = 29;
//var n2 =10;
//var frase = "japao e o melhor time do mundo"
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log (frase.toUpperCase());
//alert(frase.replace("japao", "brasil"))