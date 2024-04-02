fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    // Manipuler les données récupérées ici
    console.log(data); // Pour vérifier les données récupérées dans la console
  

  const gallery = document.querySelector(".gallery");

  // Ajouter les nouveaux travaux récupérés depuis l'API
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

  .catch(error => {
    console.error('Erreur lors de la récupération des données :', error);
  });



 

 
 
 


