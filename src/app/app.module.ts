import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoskitieryComponent } from './moskitiery/moskitiery.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MoskitieraFormularzComponent } from './moskitiera-formularz/moskitiera-formularz.component';
import { AppendServiceService } from './_services/append-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MoskitieryComponent,
        HomeComponent,
        FooterComponent,
        MoskitieraFormularzComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CollapseModule.forRoot(),
        ReactiveFormsModule,
        NgbModule, RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'moskitiery', component: MoskitieryComponent },
            { path: '**', component: HomeComponent },
        ])
    ],
    providers: [AppendServiceService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [MoskitieraFormularzComponent]
})
export class AppModule { }