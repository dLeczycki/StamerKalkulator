import { Routes } from '@angular/router';
import { MoskitieryComponent } from './moskitiery/moskitiery.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'moskitiery', component: MoskitieryComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]