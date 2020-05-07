import { Routes } from '@angular/router';
import { MoskitieryComponent } from './moskitiery/moskitiery.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'moskitiery', component: MoskitieryComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]