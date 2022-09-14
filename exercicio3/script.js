const maioresSeleçoes = ["Brasil", "Alemanha", "Itália", "Argentina", "França"]
console.log("Top 5 seleções com mais títulos do mundo")
let paises = 1

for(let ranking of maioresSeleçoes){
    console.log(`Top ${paises++} - ${ranking}`)
}