import { Component, OnInit } from '@angular/core';

// Importer les module pour la gestion du formulaire
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent implements OnInit {

  // Déclarer une variable pour le formulaire
  public formData: FormGroup;

  // Injecter FormBuilder dans la classe
  constructor(
    private FormBuilder: FormBuilder
  ) { }

  // Créer une fonction pour initialiser le formulaire
  private resetForm = function(){
    // Définir la valeur initialle de formData
    this.formData = this.FormBuilder.group({
      email: [ null, Validators.required ],
      password: [ null, Validators.required ]
    });
  };

  // Créer une fonction pour la soumission du formulaire
  public submitForm = function(){
    console.log(this.formData);
  }

  // eq. DOMContentLoaded du composant
  ngOnInit(): void {
    // Initialiser le formulaire une fois que le composant est chargé
    this.resetForm();
  }
}
