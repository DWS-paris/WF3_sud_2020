import { Component, OnInit } from '@angular/core';

// Import du service CRUD
import { CrudService } from "../../services/crud/crud.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  // Délcarer une variable pour la liste des posts
  public postCollection = null;

  // Injecter le service dans le composant
  constructor(
    private CrudService: CrudService
  ) { }

  // Créer une fonction pour utiliser le service
  private getItems = function(){
    // Utilisation d'une fonction d'un service
    this.CrudService.readAllItems()
    .then( data => {
      // Ajouter le tableau data dans postCollection
      this.postCollection = data;
    })
    .catch(err => {
      console.error(err);
    })
  }

  // eq. DOMContentLoaded du composant
  ngOnInit(): void {
    // Charger le contenu de l'API une fois le composant chargé
    this.getItems();
  }

}
