// Importer les modules de la classe
// Le module Input est utiliser pour importer des données depuis un composant parent
// Les modules Output et EventEmitter sont utiliser pour créer des évènements
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // Importer une valeur depuis le composant parent
  @Input() connectedUser: Boolean;

  // Créer un évènement
  @Output() userState = new EventEmitter();

  // Créer une variable pour le titre de l'application
  public title = `Hello World`;

  // Récupérer la valeur de l'email depuis le localStorage
  public userEmail = localStorage.getItem('user-email');

  // Créer un tableau d'objet contenant path et name (collection)
  public navCollection = [ 
    { path: `/`, name: `Acceuil` },
    { path: `/contacts`, name: `Contacts` },
    { path: `/portfolio`, name: `Portfolio` }
  ];

  constructor() {}

  // Créer une fonction pour déconnecter l'internaute
  public logoutUser = function(){
    // Supprimer les données stockées en localStorage
    localStorage.removeItem('user-email');
    localStorage.removeItem('user-password');

    // Modifier la valeur de connectedUser
    this.connectedUser = false;

    // Emettre l'évènement userState
    this.userState.emit(this.connectedUser);
  };

  // eq. DOMContentLoaded
  ngOnInit(): void {
    console.log(this.connectedUser);
  }

}
