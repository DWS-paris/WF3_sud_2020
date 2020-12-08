// Importer les modules du composant
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- 
      Importer le composant app-header 
      et injecter la valeur de connectedUser
    -->
    <app-header [connectedUser]="connectedUser" (userState)="connectedUser = $event"></app-header>

    <main>
      <!-- Importer le composant form-login -->
      <app-form-login *ngIf="!connectedUser" (userState)="connectedUser = $event"></app-form-login>

      <!-- Ajouter la directive (balise HTML spécifique) pour afficher les composants des routes -->
      <router-outlet></router-outlet>
    </main>

    <!-- Importer le composant app-footer -->
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit {

  // Déclarer une variable pour les informations utilisateur
  public connectedUser = false;
  
  // Créer une fonction pour vérifier la présence des valeurs en localStorage
  private checkUser = function(){
    // [Pur JS] Récupérer les valeurs en localStorage
    let userEmail = localStorage.getItem('user-email');
    let userPassword = localStorage.getItem('user-password');

    // [Pur JS] Vérifier la valeur des localStorages
    if( userEmail && userPassword !== null ){
      // Connecter l'internaute
      this.connectedUser = true;
    }
  };
 
  ngOnInit(): void {
    // Vérifier la présence des valeurs en localStorage une fois le composanr chagé
    this.checkUser();
  }
}