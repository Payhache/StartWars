import { Component, OnInit } from '@angular/core';
import { LogLoaderService } from 'src/app/services/log-loader.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 date = new Date();
 user = 'Pierre Henri';


  constructor(public logLoaderService: LogLoaderService) { }

  ngOnInit(): void {
    this.logLoaderService.welcomeMsg();
  }

}
