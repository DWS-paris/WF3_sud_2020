// Importer les modules de la classe
// Le module Input est utiliser pour importer des données depuis un composant parent
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // Importer une valeur depuis le composant parent
  @Input() connectedUser;

  // Créer une variable pour le titre de l'application
  public title = `Hello World`;

  // Récupérer la valeur de l'email depuis le localStorage
  public userEmail = localStorage.getItem('user-email');

  // Créer un tableau d'objet contenant path et name (collection)
  public navCollection = [ 
    { path: `/`, name: `Acceuil` },
    { path: `/contact`, name: `Contacts` },
    { path: `/portfolio`, name: `Portfolio` }
  ];

  constructor() { }

  // eq. DOMContentLoaded
  ngOnInit(): void {
    console.log(this.connectedUser);
  }

}
