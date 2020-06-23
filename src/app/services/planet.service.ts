import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = [
    new Planet(1,'Nasa.jpg', 'Alderran', 600000, 'Humains', 4500000, ` Il s'agit du nom original de la planète. C'est cette appellation qui est utilisée dans les sous-titres et dans une majorité de textes écrits (encyclopédies et sites internets). À l'origine dans les premières versions écrites du quatrième épisode par George Lucas, le nom d'Alderaan est utilisé pour désigner une géante gazeuse qui est en fait la capitale de l'Empire galactique avec une cité dans les nuages (Lucas réutilisera cette idée d'origine pour créer la planète Bespin) tandis que la planète de la princesse Leia aurait dû s'appeler initialement Organa Major, un nom qui reviendra finalement à la famille royale d'Alderaan (Bail Organa, Leia Organa...). Cette appellation est employée dans l'épisode IX.`),
    new Planet(2,'Nasa3.jpg', 'Tatooine', 200000, 'Jawa Hutt', 1000, `Tatooine est une planète-désert de l’univers de fiction Star Wars. Située dans la Bordure extérieure, cette planète orbite autour des étoiles Tatooine I et II. Il s'agit du monde d'origine de la famille Skywalker.

    Malgré la chaleur torride qui règne à sa surface, Tatooine est le monde d'origine des Tuskens et des Jawas. Étant éloignée du centre de la galaxie, elle n'est pas sous la juridiction de la République galactique, ni de l'Empire galactique après. Du fait de sa position stratégique dans ce secteur de la galaxie, la planète est aux mains des Hutts, elle est dirigée par le gangster Jabba le Hutt.`),
    new Planet(2,'Nasa2.jpg', 'Bespin', 6000000, 'Humains', 1000, `La planète Bespin est une planète gazeuse géante, d'environ 118 000 kilomètres de diamètre. Comme la plupart des géantes gazeuses, elle possède un cœur solide fait de métal, suivi de couches de gaz qui du fait de la pression, se comportent comme du métal. La plupart des couches de gaz sont toxiques, et la pression et la température sont de loin supérieures à ce qu’un humain peut tolérer. Mais à une altitude d'environ 150 à 180 kilomètres il y a une couche habitable connue en tant que zone habitable de Bespin. Cette couche a une atmosphère composée d'oxygène avec les températures et pressions idéales pour la vie humaine. C'est dans cette couche que la cité des nuages est située. Comme la plupart des géantes gazeuses, Bespin a un certain nombre de lunes. Bespin a une rotation qui dure 12 heures et une période de révolution de 14 ans. Bespin ressemble à la planète Jupiter, étant aussi semi métallique, ayant une période de rotation de 9 h et de révolution de 12 ans.`),
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