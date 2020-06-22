import { Injectable } from '@angular/core';
import {Vaisseau} from '../models/vaisseau';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  vehiculs = [
    new Vaisseau(1,'faucon.jpg', 'Faucon millenium', 'Peugeot', true, 10),
    new Vaisseau(2,'xwing.jpg', 'XWing', 'BMW', false, 2),
    new Vaisseau(3,'croiseur.jpg', 'Croiseur', 'Class', true, 200),
    new Vaisseau(4,'T-47.jpg', 'T-47', 'wow', true, 20),
    new Vaisseau(5,'a-wing.jpg', 'A-Wing RZ-1', 'wow', true, 20)
  ];
  constructor() { }
  getAllVehiculs(): Vaisseau[] {
    return this.vehiculs;
  }
  getOneVehiculById(id:number): Vaisseau {
    return this.vehiculs.filter(vaisseau => vaisseau.id === id)[0];
  }
  addVaisseau(vehicul: Vaisseau): void {
    this.vehiculs.push(vehicul);
  }
}
