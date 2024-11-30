import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent, OfferDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [
    provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
