let tabuada = Number(prompt("Digite o número de qual tabuada deseja ver:"))
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in array){
    console.log(`${tabuada} x ${array[i]} = ${tabuada*array[i]}`)
}
