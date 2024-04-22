
let worksData; // Variable globale pour stocker les données des travaux

//Récupérer dynamiquement les projets de l’architecte
// Définition de la fonction pour créer la galerie

// Fonction pour créer une galerie d'images à partir des données fournies
function createGallery(data) {

  // Sélectionner l'élément HTML avec la classe "gallery"
  const gallery = document.querySelector(".gallery");
  
  // Nettoyer la galerie avant d'ajouter de nouveaux éléments
  gallery.innerHTML = '';

  // Parcourir les données récupérées depuis l'API pour créer les éléments de la galerie
  for (let i = 0; i < data.length; i++) {
  
    
    const figure = document.createElement("figure"); // Créer un élément "figure" pour chaque image
    gallery.appendChild(figure);// Ajouter la figure à la galerie
    const img = document.createElement("img");   // Créer un élément "img" pour afficher l'image
    img.src = data[i].imageUrl; // Définir la source de l'image
    img.alt = data[i].title;  // Définir le texte alternatif de l'image
    figure.appendChild(img); // Ajouter l'image à la figure
   
    
    const figcaption = document.createElement("figcaption") // Créer un élément "figcaption" pour afficher le titre de l'image
    figcaption.innerHTML = data[i].title; // Définir le titre de l'image comme le contenu du figcaption
    figure.appendChild(figcaption); // Ajouter le figcaption à la figure
   
  }

}



// Effectuer une requête fetch pour récupérer les données des travaux depuis l'API
fetch('http://localhost:5678/api/works')
  .then(response => response.json()) // Attendre la réponse et la transformer en format JSON
  .then(data => {   // Une fois les données obtenues, exécuter cette fonction
    worksData = data; // Stocker les données des travaux dans la variable globale
    createGallery(data);  // Créer la galerie en utilisant les données récupérées
    createModale(data);

    // Manipulations supplémentaires des données récupérées peuvent être effectuées ici
    console.log(data); // Pour vérifier les données récupérées dans la console

  })
   // Attraper les erreurs en cas de problème lors de la récupération des données
  .catch(error => {
    console.error('Erreur lors de la récupération des données :', error);
  });





 
// Sélectionner l'élément HTML avec la classe "btn-center"
const btnCenterContainer = document.querySelector('.btn-center');




// Définir les catégories disponibles
const categories = ['Tous', 'Objets', 'Appartements', 'Hôtels & restaurants'];

// Pour chaque catégorie, créer un bouton et l'ajouter au conteneur des boutons
categories.forEach((category, index) => {
    const btn = document.createElement('div'); // Créer un nouvel élément bouton
    btn.textContent = category;     // Définir le texte du bouton comme étant la catégorie
    btn.classList.add('btn'); // Ajouter la classe 'btn' au bouton pour le styliser
    btn.dataset.categoryId = index;  // Assigner l'index comme identifiant de catégorie en utilisant le dataset HTML
    btn.addEventListener('click', handleButtonClick); // Ajouter un écouteur d'événement click pour chaque bouton

     // Si la catégorie est 'Tous', ajouter la classe 'btn-active' pour indiquer qu'il est sélectionné par défaut
    if (category === 'Tous') {
        btn.classList.add('btn-active');
    }
     // Ajouter le bouton au conteneur des boutons
    btnCenterContainer.appendChild(btn);
});
 
 
// Fonction pour gérer le clic sur chaque bouton
function handleButtonClick(event) {

  // Récupérer l'identifiant de catégorie à partir de l'attribut dataset du bouton cliqué
  const categoryId = parseInt(event.target.dataset.categoryId); // Convertir en entier
 
  
   // Retirer la classe 'btn-active' de tous les boutons de catégorie
  btnCenterContainer.querySelectorAll('.btn').forEach(btn => {
      btn.classList.remove('btn-active');
  });
  // Ajouter la classe 'btn-active' au bouton cliqué pour indiquer qu'il est actif
  event.target.classList.add('btn-active');

//Filtre : id, comparaison == "Functional Programming" Use the filter Method to Extract Data from an Array, 'filter' ' 


// Initialiser une variable pour stocker les travaux filtrés par catégorie
  let filteredWorks;

  // Filtrer les travaux en fonction du bouton sélectionnée
  if (categoryId === 0) {
    // Si le bouton "Tous" est cliqué, afficher tous les travaux
    filteredWorks = worksData;
  } else {
    // Sinon, filtrer les travaux en fonction du bouton sélectionnée  
    filteredWorks = worksData.filter(work => work.categoryId === categoryId);
  }
  createGallery(filteredWorks); // Créer la galerie avec les travaux filtrés

}




