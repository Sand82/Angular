import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { Offer } from './offer.model';
import { ImageComponent } from './image/image.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent, CommonModule, ButtonComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'gallery';
  offers!: Offer[];
  offer!: Offer;
  dataEvent : any;  

  constructor(private data: DataService){}  

  ngOnInit(): void {
    this.data.getData().subscribe(data => 
      {
        this.offers = data;
        this.offer = data[0];
      });
  }

  changeImage(offerId: string) {        
    let currentOffer = this.offers.find(x => x.id === offerId);
        
    if (currentOffer) {
      this.offer = currentOffer;
    }
  }
  
  expendModal(event : string) {
    
  }
}
