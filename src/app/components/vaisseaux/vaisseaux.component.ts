import { Component, OnInit } from '@angular/core';
import { VaisseauService} from '../../services/vaisseau.service';
import { Vaisseau} from '../../models/vaisseau';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css']
})
export class VaisseauxComponent implements OnInit {
 vaisseau:Vaisseau[];

  constructor(private vaisseauService: VaisseauService, private toastr: ToastrService) { };

  ngOnInit(): void {
    this.vaisseauService.getVaisseau().subscribe((data: Vaisseau[]) => {
      this.vaisseau = data;
      });
  
  }
  askRemoveShip(vaisseau: Vaisseau):void {
    this.vaisseau = this.vaisseauService.removeVaisseau(vaisseau);
    this.toastr.success('','Vaisseau supprimé');
  }
}
