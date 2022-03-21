

// Banco de dados => localStorage
const dados = localStorage.getItem('pedido');
const listarespostas = JSON.parse(dados);

console.log(listarespostas)

//Variavéis de captura para uso nas funções
const formulario = document.querySelector('form');
let adesivos = formulario.querySelector('#form1');
let angular = formulario.querySelector('#Angular');
let vue = formulario.querySelector('#Vue');
let react = formulario.querySelector('#React');
let numero = formulario.querySelector('#number');
let observacoes = formulario.querySelector('#Observações');
let menos = formulario.querySelector('#Menos')
let mais = formulario.querySelector('#Mais')
   
   // Atribuição de value caso checked (Checkbox)
const adesivos_value = adesivos.addEventListener('change', function(){
   event.preventDefault


    if(angular.checked){
        angular.value = "confirmado"
    }
    else{
        angular.value = "Nenhum"
    }
    if(vue.checked){
        vue.value = "confirmado"
    }
    else{
        vue.value = "Nenhum"
    }
    if(react.checked){
        react.value = "confirmado"
    }
    else{
        react.value = "Nenhum"
    }
})

//Contador +/- de quantidade do pedido de adesivos

const contadormais = mais.addEventListener('click', function(){
    event.preventDefault
    
    if(numero.value <= 0){
        numero.value = 0
    }
    numero.value = parseInt(numero.value) + 1
           
})

const contadormenos = menos.addEventListener('click', function(){
    event.preventDefault
    
    numero.value = parseInt(numero.value) - 1

    if(numero.value <= 0){
        numero.value = 0
    }     
})

// Validação e amarzenamento das respostas no banco de dados localStorage

formulario.addEventListener('submit', function (){

    event.preventDefault()

    if(react.value == 'Nenhum') {
        if(vue.value == 'Nenhum'){
            if(angular.value == 'Nenhum'){
                alert('Marque pelo menos uma opção')
            }
        }
        
    }
    if(react.value,vue.value,angular.value == 'on') {
        alert('Marque pelo menos uma opção')
    }
    
    if (numero.value == '0') {
        alert('Preencha a quantidade')
    }
    


    let itens = {
        adeReact: react.value,
        adeVue: vue.value,
        adeAngular: angular.value,
        numeros: numero.value,
        observacoes: observacoes.value
    }
    listarespostas.push(itens)
    

    const dadosJASON = JSON.stringify(listarespostas)
    localStorage.setItem ('pedido', dadosJASON);


})


