import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogLoaderService {

  constructor() { }

  welcomeMsg():void {
    console.log("Hey You");
    
  }
}
