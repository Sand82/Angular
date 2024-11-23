import { Component, OnInit } from '@angular/core';
import { Offer } from './offer.model';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {  
  title = 'bootstrap-pagination';
  offers!: Observable<Offer[]>

  constructor(private data: AppService){}

  ngOnInit(): void {
    this.offers = this.data.getData();
    this.offers.subscribe(data => console.log(data));
  }
}

