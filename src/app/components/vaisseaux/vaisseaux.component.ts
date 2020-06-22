import { Component, OnInit } from '@angular/core';
import { VaisseauService} from '../../services/vaisseau.service';
import { Vaisseau} from '../../models/vaisseau';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css']
})
export class VaisseauxComponent implements OnInit {
 vaisseau:Vaisseau[];

  constructor(private vaisseauService: VaisseauService) { };

  ngOnInit(): void {
    this.vaisseau = this.vaisseauService.getAllVehiculs();
  }

}
