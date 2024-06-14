function createModale(data) {

const modalContent= document.querySelector(".modalContent");
  
  // Nettoyer la galerie avant d'ajouter de nouveaux éléments
  modalContent.innerHTML = '';

  // Parcourir les données récupérées depuis l'API pour créer les éléments de la galerie
  for (let i = 0; i < data.length; i++) {
  
    
    const figure = document.createElement("figure"); // Créer un élément "figure" pour chaque image
    const miniWork = document.querySelector("miniWork")
    
    modalContent.appendChild(figure);// Ajouter la figure à la galerie
    const img = document.createElement("img");   // Créer un élément "img" pour afficher l'image
    img.src = data[i].imageUrl; // Définir la source de l'image
    img.alt = data[i].title;  // Définir le texte alternatif de l'image
    figure.appendChild(img); // Ajouter l'image à la figure
   
    
    const figcaption = document.createElement("figcaption") // Créer un élément "figcaption" pour afficher le titre de l'image
    figcaption.innerHTML = data[i].title; // Définir le titre de l'image comme le contenu du figcaption
    figure.appendChild(figcaption); // Ajouter le figcaption à la figure
   
  }

}

// Fenêtre Modal :

// Sélection de l'élément avec la classe "cross"
const crossElement = document.querySelector(".cross");

// Ajout d'un gestionnaire d'événements pour le clic sur la croix
crossElement.addEventListener("click", function() {
    // Sélection de la fenêtre modale
    const modal = document.querySelector(".modal");
    // Masquer la fenêtre modale en changeant son style d'affichage
    modal.style.display = "none";
});