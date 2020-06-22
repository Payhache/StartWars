import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = [
    new Planet(1,'Alderran.jpg', 'Alderran', 0, 'Auvergnate', 199),
    new Planet(2,'tatooine.jpg', 'Tatooine', 100, 'Savoyarde', 1000)
  ];
  constructor() { }
  getAllPlanets(): Planet[] {
   return this.planets;
  }
  getOnePlanetById(id:number): Planet {  
    return this.planets.filter(planet =>  planet.id === id )[0];
  }
  addPlanet(planet: Planet):void {
    this.planets.push(planet);
  }
 removePlanet(planet:Planet) {
   this.planets = this.planets.filter(planetToRemove => (planetToRemove !== planet));
   return this.planets;
 }
}