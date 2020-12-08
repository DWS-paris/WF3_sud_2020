// Importer le module pour configurer les routes
import { Routes } from "@angular/router";

// Importer tous les composants des routes
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { PortfolioPageComponent } from "./routes/portfolio-page/portfolio-page.component";
import { UserPageComponent } from "./routes/user-page/user-page.component";
import { ContactsPageComponent } from "./routes/contacts-page/contacts-page.component";

// Créer le module pour les routes et l'exporter
export const AppRouterModule: Routes = [ 
    {
        path: '', //=> URL de la page sans le préfixe '/'
        component: HomePageComponent // => Composant à utiliser dans l'URL
    },
    {
        path: 'portfolio',
        component: PortfolioPageComponent
    },
    {
        path: 'user',
        component: UserPageComponent
    },
    {
        path: 'contacts',
        component: ContactsPageComponent
    }
];