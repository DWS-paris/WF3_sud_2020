// Importer les modules de la classe
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // Créer une variable pour le titre de l'application
  public title = `Hello World`;

  // Créer un tableau d'objet contenant path et name
  public navCollection = [ 
    { path: `/`, name: `Acceuil` },
    { path: `/user`, name: `Mon compte` },
    { path: `/contact`, name: `Contacts` }
  ];

  constructor() { }

  // eq. DOMContentLoaded
  ngOnInit(): void {
  }

}
