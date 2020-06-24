import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../models/planet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-planettes',
  templateUrl: './planettes.component.html',
  styleUrls: ['./planettes.component.css'],
})
export class PlanettesComponent implements OnInit {
  planets: Planet[];

  constructor(
    private planetService: PlanetService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {

    this.planetService.getPlanets().subscribe((data: Planet[]) => {
    this.planets = data;
    });
  }
  askRemovePlanet(planet: Planet): void {
    this.planets = this.planetService.removePlanet(planet);
    this.toastr.success('', 'Planète supprimée');
  }
}
