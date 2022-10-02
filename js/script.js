// Permet de créer le html à insérer dans le DOM pour chaques produits

function showItems(e){
    return `
        <a href="./product.html?id=${e._id}">
            <article>
              <img src="${e.imageUrl}" alt="${e.altTxt}">
              <h3 class="productName">${e.name}</h3>
              <p class="productDescription">${e.description}</p>
            </article>
        </a>
    `;
}


// Call API pour récupérer les données produits

async function updateItems(){
   await fetch('http://localhost:3000/api/products')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(let item in data){
                document.querySelector("#items").innerHTML += showItems(data[item]);
            }
        }) 
}

updateItems();