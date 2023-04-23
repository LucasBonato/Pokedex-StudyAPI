
let url = "https://pokeapi.co/api/v2/pokemon/1/";

function loadPk() {

    console.log("Dentro");

    fetch(url) 
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
