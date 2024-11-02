import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { Offer } from './offer.model';
import { ImageComponent } from './image/image.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent, CommonModule ],
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
        this.offers = data.slice(1);
        this.offer = data[0];
      });
  }

  changePhoto($event: Event){
    console.log($event);
  }
}
