import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-vaisseau',
  templateUrl: './edit-vaisseau.component.html',
  styleUrls: ['./edit-vaisseau.component.css']
})
export class EditVaisseauComponent implements OnInit {

vaisseau:Vaisseau;
id:number;

  constructor(
    public router:Router, 
    public vaisseauService:VaisseauService,
    public route:ActivatedRoute,
    public toaster:ToastrService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.vaisseau= this.vaisseauService.getOneVehiculById(this.id);
  }
  submitModification() {
    this.router.navigate(['/vaisseaux']);
    this.toaster.success('', 'Vaisseau édité');
  }
}
