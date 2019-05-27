
var app = {

  form: document.querySelector('#login-form'),
  inputs: document.getElementsByClassName('field-input'),

  getUserInformation: function (event, inputs, i) {
    // boucle sur les 2 inputs
    if (app.inputs[i].value.length < 3) {
      console.error('nombre de caractères insuffisant')
      // en quittant le champ, la bordure devient rouge
      app.inputs[i].setAttribute('style', 'border-color: #ff3860;')
    } else {
      // en quittant le champ, la bordure devient verte
      app.inputs[i].setAttribute('style', 'border-color: #00d1b2;')
    }
  },

  checkSubmit: function (event, i) {
    // empêche le comportement par default de l'event (submit)
    event.preventDefault();
    // clean les erreurs précédemment affichées
    document.getElementById('errors').innerHTML = ""
    // tableau des erreurs à afficher en fonction de l'input
    errorMessages = ["Identifiant doit contenir au moins 3 caractères", "Mot de Passe doit contenir au moins 3 caractères"]
    // création du message d'erreur
    var newP = document.createElement('p')
    newP.innerHTML = errorMessages[i]
    // style du message d'erreur
    errorStyle = 'color: white; background-color: #ff3860; border-radius: 3px; padding: 1rem; font-size: 0.9em; margin-bottom: 0.9rem'
    newP.setAttribute('style', errorStyle)
    // insertion du nouvel élément
    var error = document.querySelector('#errors');
    error.appendChild(newP, error);
  },

  launchApp: function () {
    console.log('hellooooo')
    console.log(app.inputs)
    for (var i = 0; i < 3; i++) {
      console.log('on est dans la boucle de launch')
      app.getUserInformation
      app.checkSubmit
    }
  }
  
};

document.addEventListener('DOMLoadedContent', app.launchApp);
