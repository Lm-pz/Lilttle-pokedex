let pokemon = []
export function main() {
    let datos = []
    let promises = []

    for (let i = 1; i < 492; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + i
        promises[i] = fetch(url).then((resp) => resp.json())
    }
    Promise.all(promises).then((responses) => {
        datos = responses.filter(data => data != undefined)
        pokemon = datos.map(pokmon => ({
            name: pokmon.name,
            id: pokmon.id,
            imagef: pokmon.sprites["front_default"],
            imageb: pokmon.sprites["back_default"],
            imagefs: pokmon.sprites["front_shiny"],
            imagebs: pokmon.sprites["back_shiny"],
            type: pokmon.types.map(type => type.type.name).join(", "),
            abilities: pokmon.abilities.map(ab => ab.ability.name).join(","),
        }))

        listload(0, 152)
    })
    document.getElementsByClassName("gen__select")[0].addEventListener("change", selectgen)
    document.getElementsByClassName("pokedex__select")[0].addEventListener("change", selectpokemon)
    document.querySelector('.linkcontainer').onhover=playpikachu


}

function selectpokemon() {
    let value = document.getElementsByClassName("pokedex__select")[0].value
    let imgs = document.querySelectorAll(".card__image")

    imgs = [...imgs]
    let p = pokemon.filter(x => x.name === value)
    imgs[0].src = p[0].imagef
    imgs[1].src = p[0].imageb
    imgs[2].src = p[0].imagefs
    imgs[3].src = p[0].imagebs
    document.querySelector(".card__name").innerHTML = p[0].name
    document.querySelector("#abilities").innerHTML = p[0].abilities
    document.querySelector("#type").innerHTML = p[0].type

}

function selectgen() {
    let i, n
    let value = document.getElementsByClassName("gen__select")[0].value
    let list = document.getElementsByClassName("pokedex__select")[0]
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    if (value === "1st gen") {
        i = 0
        n = 152
    } else if (value === "2nd gen") {
        i = 151
        n = 252
    } else if (value === "3rd gen") {
        i = 251
        n = 387
    } else {
       
            i = 386
            n = pokemon.length
        
    }
    listload(i, n)
}

function listload(i, n) {
    let option = document.getElementsByClassName("pokedex__select")[0]
    for (let k = i; k < n-1; k++) {
        let ul = document.createElement("option")
        ul.value = pokemon[k].name
        ul.innerHTML = pokemon[k].name
        option.appendChild(ul)
    }
}

function playpikachu(){
   document.getElementById('pikachusound').play()
}