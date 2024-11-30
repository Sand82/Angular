import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Offer } from '../offer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  offers! : Offer[];
  page = 1;
  pageSize = 6; 

  constructor(private data: AppService){}

  ngOnInit(): void {
     this.data.getData()
    .subscribe(data => this.offers = data);
  }
}
