const fs = require('fs')
const abrirArquivo = (nomeArquivo) => {
    const exibirConteudo = (erro, conteudo) => {
        if(erro){
            console.log(`Erro: ${erro}`)
        } else{
            console.log(conteudo.toString())
            const resultado = +conteudo.toString() * 10
            const finalizar = (erro) => {
                if(!erro)
                    console.log('Conteudo escrito com sucesso')
                else
                    console.log('Escrita falhou')
            }
            fs.writeFile('resultado.txt', resultado.toString(), finalizar)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo) //dar dois parametros: o nome do arquivo e uma funcao callback
}
abrirArquivo('arquivo.txt')

// const f1 = () => console.log('f1')
// const f2 = () => console.log('f2')

// setTimeout(f1, 500)
// setTimeout(f2, 500)
// console.log('fim do script principal')

// function demorada (){
//     //pegar o horário atual do sistema, e descolar ele de 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 5
// const b = 5 + 9
// setTimeout(function(){
//     const d = demorada()
//     console.log('d: ' + d)
// }, 500)

// const e = 2 + a + b
// console.log('e: ' + e)


//uma calculadora faz soma e subtracao, cada operacao envolve dois operandos
// let calculadora = {
//     soma: (n1, n2) => n1 + n2,
//     subtracao: function(a, b){
//         return a - b
//     }
// }


//uma concessionaria tem CNPJ e endereco. Ela possui alguns carros em estoque, cada um deles tem marca, mole e ano de fabricacao
//solucao minha
// let concessionario = {
//     CNPJ: 'XX. XXX. XXX/0001-XX',
//     endereco: {
//         logradouro: 'Rua X',
//         numero: 100,
//     },
//     car: {
//         marca: 'Hyundai',
//         modelo: 'HB20',
//         ano: 2012
//     }
// }

//solucao professor
// let concessionaria = {
//     CNPJ: '598347589034',
//     endereco: {
//         logradouro: 'Rua J',
//         numero: 50,
//         bairro: 'Vila Estrela'
//     },
//     carro: [
//         {
//         marca: 'Ford',
//         modelo: 'Fiesta',
//         anoFabricacao: 2015
//         },
//         {
//             marca: 'Hyundai',
//             modelo: 'HB20',
//             anoFabricacao: 2012
//         }
//     ]
// }

//acessar a marca do segundo veiculo
// console.log(concessionaria.carro[1].marca)
// console.log(concessionaria['carro'][1]['marca'])

// for(let carro of concessionaria.carros){
//     console.log(`Marca: ${carro.marca}. Modelo: ${carro.modelo}`)
// }

//se chama Maria, tem 21 anos e mora na rua B, 14
//objeto aninhados
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco:{
//         logradouro: 'Rua B',
//         numero: 14
//     }
// }

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.endereco)
// console.log(pessoa['endereco']['logradouro'])
// console.log(pessoa.endereco.numero)
// console.log(pessoa['endereco'.numero])
// console.log(pessoa.endereco['logradouro'])
//uma pessoa chamda joao que tem 17 anos de idade
//JSON: javascript object notation
// let pessoa = {
//     nome: 'Joao', //Joa esta associado a chave nome
//     idade: 17
// }
// //. e [] para acessar membros
// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//         cont++
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return{f1, f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
// eAgoraResult.f1()

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// let olaJoao =  saudacoesFactory('Ola' , 'Joao')
// let tchauJoao = saudacoesFactory('Tchau' , 'Joao')
// olaJoao()
// tchauJoao()

// function ola(){
//     let nome = 'Joao'
//     return function(){
//         console.log(`Ola, ${nome}`)
//     }
// }

// let olaResult = ola()
// olaResult()


// function f(){ //escopo externo
//     let nome = 'Joao'
//     function g(){ //escopo interno
//         console.log(nome)
//     } //morre o interno
//     g()
// } //morre o externo
// f()

// function f(funcao){
//     return funcao()
// }

// function g(){
//     function outraFuncao(){
//         console.log('Fui definida por g')
//         return () => {2}
//     }
//     return outraFuncao()
// }

// console.log(f(g)())
// console.log(f(g)() + f(g)()) // retorna o console.log porem nao faz a conta que deveria por causa da {2} e nao ha algum return dentro

// const resultadoDaG = g()
// resultadoDaG()
// g()() //chamada da funcao usando ()

// f(g()) //f recebe a outra funcao que eh g

// f(g)()

// let umaFuncao = function (){
//     console.log('Fui armazenada em uma variavel')
// }
// umaFuncao()

// f(function(){
//     console.log('Estou sendo passada para f...')
// })

// function produzUmaFuncao(a, b, operador){
//     if(operador === '+')
//         return function(a, b){ //msm conceito escrito de uma forma
//             a + b
//     }
//     if(operador === '-')
//     return (a, b) => a - b //msm conceito escrito de outra forma
// }

// function executa(f){
//     f()
// }
// executa(function(a, b){return a + b})

//funcoes
// function f3(){

// }
// console.log(f3())

// const hello = () => console.log('Hello')
// hello()

// const dobro = valor => valor * 2 //opcional colocar em () o valor

// let triplo = (valor) => {
//     return valor * 3
// }

// const ehPar = n => {n % 2 === 0}
// console.log(ehPar(10))

// const f = () => {} //arrow function
// const umArgumentp  = n => {
//     console.log(n)
// }

// const soUmaLinha = () => console.log('Oi')

// const teste1 = (a, b) => { //se usar return dentro das {}
//     return a + b
// }

// const teste2 = (a, b) => a + b //return sem {} porem esta ali

// const dobro = function(n){
//     return 2 * n
// }
// const result = dobro(6)
// console.log(result)

// //valor padrao para um parametro
// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

//funcao
// //void m(){} se fosse Java
// function hello(){
//     console.log('Oi') //ordem de execucao, porem nunca foi chamada
// }
// hello() //ordem de execucao, sem um parametro definido
// function hello(nome){ //declaracao
//     console.log('oi,' + nome) //ordem de execucao, e essa foi chamada
// }
// hello('Milena') //ordem de execucao, com um parametro definido



//declaracao
// v1 = []
// console.log(v1.length) //0
// v1[0] = 3.4
// console.log(v1.length) //1
// v1[10] = 2
// console.log(v1.length) //11
// v1[2] = 'abc'
// console.log(v1.length) //11
// v1[99] = true
// console.log(v1.length) //100


//voce nao quer usar o operador de comparacao ==
//console.log(null == undefined) //true
//console.log(null == null) //true
//console.log(1 == [2, 1]) //false
//console.log(1 == [1,2]) //false
//console.log(1 == [2]) //false
//console.log(1 == [1]) //true
//console.log(1 == true) //true
//console.log(1 === '1') //false
//console.log(1 === 1) //true
//console.log(1 == '1') //true
//console.log(1 == 1) //true

// const n1 = 2
// const n2 = '3'
// //coercao implicita
// const n3 = n1 + n2
// console.log(n3) //23
// //coercao explicita
// const n4 = n1 + Number(n2)
// console.log(n4)

//String = '1'; //java, estaticamente tipado, feito pelo compilador
//a.falar();
//let a = 'abc' //javascrp dinamicamente tipado, feito pelo interpretador em tempo de execucao 
//a.falar()

// var idade = 18
// console.log(`Oi, ${nome}`) //undefined
// if(idade >= 18){
//     var nome = 'Pedro'
//     console.log(`Parabens, ${nome}. Voce pode dirigir`) //Pedro
// }
// console.log(`Ate mais ${nome}`) //Pedro

//let se consegue reatribuir, diferente do const
// let nome = 'Milena'
// console.log(nome)
// nome = 'Ana'
// console.log(nome)

//o tipo nao muda, mas sim o objeto pode ser referenciado dps
// let a = 2
// console.log(typeof(a)) //number
// a = 'abc'
// console.log(typeof(a)) //string
// a = true
// console.log(typeof(a)) //boolean

// //declaracao constantes
// const nome = 'Milena'
// console.log(nome)
// //nome = 'Pedro'
// const endereco = 'Rua Tabor, 405'
// console.log(endereco)
// const sobrenome = `Milena`
// console.log(sobrenome)
// //Me chamo Milena. Meu sobrenome eh Hayakawa
// console.log(`Me chamo ${nome}. Meu sobrenome eh ${sobrenome} e moro na ${endereco}`)

