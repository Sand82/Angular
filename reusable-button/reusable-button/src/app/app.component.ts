import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reusable-button';

  helloFromCreate(event: string){
    console.log('Hello from create');
  }

  helloFromSave(event: string){
    console.log('Hello from save');
  }

  helloFromDelete(event: string){
    console.log('Hello from delete');
  }
  
}
