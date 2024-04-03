
//Récupérer dynamiquement les projets de l’architecte


//Function avec la boucle, puis dans la function on appelle dans le fetch

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    // Manipuler les données récupérées ici
    console.log(data); // Pour vérifier les données récupérées dans la console
  

  const gallery = document.querySelector(".gallery");

  // Ajouter à la galerie les nouveaux travaux récupérés depuis l'API
  for (let i = 0; i < data.length; i++) {
  
    const figure = document.createElement("figure");
    gallery.appendChild(figure);
    const img = document.createElement("img");
    img.src = data[i].imageUrl;
    img.alt = data[i].title;
    figure.appendChild(img); //
   
    const figcaption = document.createElement("figcaption")
    figcaption.innerHTML = data[i].title;
    figure.appendChild(figcaption);
   
    }

  })

//Filtre : id, comparaison == "Functional Programming" Use the filter Method to Extract Data from an Array, 'filter' ' 

 
  .catch(error => {
    console.error('Erreur lors de la récupération des données :', error);
  });



 

 
 
 


