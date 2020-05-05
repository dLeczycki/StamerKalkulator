import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoskitieryComponent } from './moskitiery/moskitiery.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MoskitieraFormularzComponent } from './moskitiera-formularz/moskitiera-formularz.component';

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
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      CollapseModule.forRoot(),
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
