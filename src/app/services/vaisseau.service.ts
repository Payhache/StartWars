import { Injectable } from '@angular/core';
import {Vaisseau} from '../models/vaisseau';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  apiURL = 'http://localhost:3000/vaisseaux';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  vehiculs = [
    new Vaisseau(1,'faucon.jpg', 'Faucon millenium', 'Peugeot', true, 10),
    new Vaisseau(2,'xwing.jpg', 'XWing', 'BMW', false, 2),
    new Vaisseau(3,'croiseur.jpg', 'Croiseur', 'Class', true, 200),
    new Vaisseau(4,'T-47.jpg', 'T-47', 'wow', true, 20),
    new Vaisseau(5,'a-wing.jpg', 'A-Wing RZ-1', 'wow', true, 20)
  ];
  constructor(private httpService: HttpClient) {
    
   }

   getVaisseau(): Observable<Vaisseau[]> {
    return this.httpService
      .get<Vaisseau[]>(this.apiURL,this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }

  getAllVehiculs(): Vaisseau[] {
    return this.vehiculs;
  }
  getOneVehiculById(id:number): Vaisseau {
    return this.vehiculs.filter(vaisseau => vaisseau.id === id)[0];
  }
  addVaisseau(vehicul: Vaisseau): void {
    this.vehiculs.push(vehicul);
  }
  removeVaisseau(vaisseau: Vaisseau){
    this.vehiculs = this.vehiculs.filter(vaisseauToRemove => vaisseauToRemove !== vaisseau );
    return this.vehiculs;
  }
}
