// Import des modules Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importer le module pour gérer des formualires
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Importer le module Angular pour la gestion des routes
import { RouterModule } from "@angular/router";

// Importer le modules pour gérer les routes
import { AppRouterModule } from "./app.router";

// Import des composants de l'application
import { AppComponent } from './app.component';
import { HeaderComponent } from './statics/header/header.component';
import { FooterComponent } from './statics/footer/footer.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { ContactsPageComponent } from './routes/contacts-page/contacts-page.component';
import { PortfolioPageComponent } from './routes/portfolio-page/portfolio-page.component';
import { UserPageComponent } from './routes/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormLoginComponent,
    HomePageComponent,
    ContactsPageComponent,
    PortfolioPageComponent,
    UserPageComponent
  ],
  // Ajouter les modules dans le tableau des imports
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // Configuration du module du router
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
