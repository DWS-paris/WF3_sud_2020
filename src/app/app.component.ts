// Importer les modules du composant
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Définition des variables
  public title = `Hello World`; // Back Quote
  public userName = `Julien Noyer`;

  // Créer un tableau
  public navCollection = [ `Accueil`, `Portfolio`, `Contact` ];

  // Créer une variable Boolean
  public isActive = false;

}