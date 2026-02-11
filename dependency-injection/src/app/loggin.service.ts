import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  log(message: string){
    const timeStam = new Date().toLocaleDateString();
      console.log(`[${timeStam}]: ${message}`)
  }  
}
