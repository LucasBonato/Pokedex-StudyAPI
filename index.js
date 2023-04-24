
let url = "https://pokeapi.co/api/v2/pokemon/";

function loadPk() {

    console.log("Dentro");

    let numComponent = document.querySelector("#newPokeID");
    let num = numComponent.value;
    
    fetch(url + num + "/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            
            let name = document.getElementById('name');
            let img = document.getElementById('picture');
            let id = document.getElementById('pokeNum');
            
            name.innerHTML = data['name'].toUpperCase();
            let imgData = data['sprites']['front_default']
            img.setAttribute('src', imgData);
            id.innerHTML = data['id'];
        })
        .catch((error) => {
            console.log(`Erro: ${error}`);
        })
}
