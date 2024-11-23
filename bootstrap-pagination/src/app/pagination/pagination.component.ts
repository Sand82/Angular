import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  offers!: Offer[]
  page = 1;
  pageSize = 6;

  constructor(private data: AppService){}

  ngOnInit(): void {
     this.data.getData()
    .subscribe(data => this.offers = data);
  }
}
