import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {Planet} from '../../models/planet';


@Component({
  selector: 'app-planettes',
  templateUrl: './planettes.component.html',
  styleUrls: ['./planettes.component.css']
})
export class PlanettesComponent implements OnInit {
  planets:Planet[];
  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planets = this.planetService.getAllPlanets();
  }

}
