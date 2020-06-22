import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {

planet:Planet;
id:number;

  constructor(
    public router:Router, 
    public route: ActivatedRoute, 
    public planetService:PlanetService, 
    public toastr:ToastrService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.planet = this.planetService.getOnePlanetById(this.id);
  }
  sendChange(){
    this.router.navigate(['/planets']);
    this.toastr.success('', 'Planète éditée');
  }
}
