import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRoute,
  RouterLink,
} from '@angular/router';
import { HomeComponent } from '../../src/app/components/home/home.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { VaisseauDetailComponent } from './components/vaisseau-detail/vaisseau-detail.component';
import { PlanettesComponent } from '../../src/app/components/planettes/planettes.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { EditVaisseauComponent } from './components/edit-vaisseau/edit-vaisseau.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'planets', component: PlanettesComponent },
  { path: 'planets/add', component: AddPlanetComponent },
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: 'planet/update/:id', component: EditPlanetComponent },
  { path: 'vaisseaux', component: VaisseauxComponent },
  { path: 'vaisseau/add', component: AddVaisseauComponent },
  { path: 'vaisseau/:id', component: VaisseauDetailComponent },
  { path: 'vaisseau/update/:id', component: EditVaisseauComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
