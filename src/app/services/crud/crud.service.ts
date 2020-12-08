// Import du module Angular
import { Injectable } from '@angular/core';

// Importer le module HttpClient pour gérer des requêtes HTTP (POST, GET, PUT ou DELETE)
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Injecter le module HttpClient dans le service
  constructor(
    private HttpClient: HttpClient
  ) { }

  // CRUD : Création d'une fonction pour exécuter une requête HTTP GET (pour lire l'information)
  public readAllItems = function(){
    // Utiliser le terme return pour renvoyer le résultat de la requête
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise()
    .then( data => data )
    .catch( error => error )
  }
}
