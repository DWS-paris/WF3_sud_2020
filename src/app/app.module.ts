// Import des modules Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importer le module pour gérer des formualires
import { FormsModule } from "@angular/forms";

// Import des composants de l'application
import { AppComponent } from './app.component';
import { HeaderComponent } from './statics/header/header.component';
import { FooterComponent } from './statics/footer/footer.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormLoginComponent
  ],
  // Ajouter les modules dans le tableau des imports
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
