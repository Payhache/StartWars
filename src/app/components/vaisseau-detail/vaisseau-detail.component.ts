import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau.service';

@Component({
  selector: 'app-vaisseau-detail',
  templateUrl: './vaisseau-detail.component.html',
  styleUrls: ['./vaisseau-detail.component.css']
})
export class VaisseauDetailComponent implements OnInit {

  id:number;
  vaisseau:Vaisseau;

  constructor(private route:ActivatedRoute, private vaisseauService:VaisseauService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.vaisseau = this.vaisseauService.getOneVehiculById(this.id);
  }

}
