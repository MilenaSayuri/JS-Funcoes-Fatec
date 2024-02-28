//funcao
//void m(){} se fosse Java
function hello(){
    console.log('Oi') //ordem de execucao, porem nunca foi chamada
}
hello() //ordem de execucao, sem um parametro definido
function hello(nome){ //declaracao
    console.log('oi,' + nome) //ordem de execucao, e essa foi chamada
}
hello('Milena') //ordem de execucao, com um parametro definido



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

