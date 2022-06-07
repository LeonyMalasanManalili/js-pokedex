//Creazione Variabile Pokedex --> seleziono il contenitore dove andro a lavorare
let pokedex = document.querySelector('.contenitorePokemon');

// faccio un ciclo dove utilizzero il "fetch()" + incremento e in caso positivo ovvero "then()" restituiscimi un valore result.json() ancora se positivo
// allora creo un parametro con un oggetto dove prendero dall api immagine nome id e tipo di pokemon
for(i = 1; i <= 150; i++) {
    fetch('https://pokeapi.co/api/v2/pokemon/' +i)
    .then(result => result.json())
    .then(pokemon => inputPokemon(
        pokemon.sprites.front_default,
        pokemon.name,
        pokemon.id,
        pokemon.types[0].type.name
    ));
}

// Creazione dell oggetto  utilizzato dentro il ciclo che stampera le card
// In questo span stampo la stringa "# + id,trasformato in stringa e con metodo padStart() vuole come primo argomento da dove deve iniziare a mettere
// la stringa e nel secondo valore cosa mettere prima di quell'inizio. 
function inputPokemon (showpokemon, name, id, type) {
    pokedex.innerHTML += `        
    <div id="dv_${id}" class="schedaPokemon ${type}">
    <div class="showPokemon">
        <img src="${showpokemon}">
    </div>
    <div class="pokeInformations">
        <span class="whichPokemon">#${id.toString().padStart(3, "0")}</span>
        <p>${name}</p>
        <p>Type: ${type}</p>
    </div>
    </div>
    </div>
    `
}

//Trovare un modo per utilizzare il metodo sort()



