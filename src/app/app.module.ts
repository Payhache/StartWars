import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { PlanettesComponent } from './components/planettes/planettes.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauDetailComponent } from './components/vaisseau-detail/vaisseau-detail.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { FormsModule } from '@angular/forms';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { ToastrModule } from 'ngx-toastr';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { EditVaisseauComponent } from './components/edit-vaisseau/edit-vaisseau.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VaisseauxComponent,
    PlanettesComponent,
    HomeComponent,
    PlanetDetailComponent,
    VaisseauDetailComponent,
    AddPlanetComponent,
    AddVaisseauComponent,
    FirstLetterPipe,
    EditPlanetComponent,
    EditVaisseauComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
