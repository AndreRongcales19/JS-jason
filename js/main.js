console.log("main.js werkt"); 

const ulList = document.querySelector("ul");
fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    .then((response) => response.json())
    .then((data) => {
        console.log("ontvangen data is: ", data);
        
        const pokemons = data.results; 
        for (let i = 0; i < pokemons.length; i++) {
            const p = pokemons[i];
            ulList.innerHTML += `<li>${p.name}</li>`;
        }
    });

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log("ontvangen data is: ", data);
        
        const products = data.products; 
        for (let i = 0; i < products.length; i++) {
            const p = products[i];
            ulList.innerHTML += `<li>${p.title}</li>`;
        }
    });


