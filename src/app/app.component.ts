// Importer les modules du composant
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
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
      console.log('Connected');
      this.connectedUser = true;
    }
  };

  ngOnInit(): void {
    // Vérifier la présence des valeurs en localStorage une fois le composanr chagé
    this.checkUser();
  }
}