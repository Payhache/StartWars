import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css'],
})
export class AddPlanetComponent implements OnInit {
  planet = new Planet();
  constructor(private planetService: PlanetService, private router: Router,private toastr: ToastrService) {}

  ngOnInit(): void {}
  submitPlanet(): void {
    console.log(this.planet);
    // APPEL DE LA FONCTION DU PLANETE SERVICE
    this.planetService.addPlanet(this.planet); 
    // REDIRECTION AVEC LE ROUTER
    this.router.navigate(['/planets']);
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

 
}
