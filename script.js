let countries = document.querySelector(".countries")
let input = document.querySelector("input")
let search = document.querySelector(".search-btn")

function getCount(){
    fetch(`https://restcountries.com/v3.1/all`)
    .then((countries) => countries.json())
    .then((res) => {
        console.log(res);
        res.map((el) => {
            let div = document.createElement("div") 
            let imgFlag = document.createElement("img")
            let name = document.createElement("h3")
            let population = document.createElement("p")
            imgFlag.src = el.flags.png
            name.innerText = el.name.common
            population.innerText =`population: ${el.population}`
            div.append(imgFlag)
            div.append(name)
            div.append(population)
            // div.append(input)
            // div.append(search)
            countries.append(div)

        })
    })
}
function getFlag() {
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((countries) => countries.json())
    .then((result) => {
        console.log('ll',result);
        result.map((el) => {
            let div = document.createElement("div") 
            let imgFlag = document.createElement("img")
            let name = document.createElement("h3")
            let population = document.createElement("p")
            imgFlag.src = el.flags.png
            name.innerText = el.name.common
            population.innerText =`population: ${el.population}`
            div.append(imgFlag)
            div.append(name)
            div.append(population)
            // div.append(input)
            // div.append(search)
            countries.append(div)
        })
    })
}
search.addEventListener("click", () => {
    getFlag().value = ''
    countries.value = ""
})
getCount()