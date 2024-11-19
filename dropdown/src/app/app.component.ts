import { Component, ElementRef, ViewChild } from '@angular/core';
import {Option} from './option.module'

let optionsArr : Option[] = [
  {
    title : 'Option 1',
    id : 1
  },
  {
    title : 'Option 2',
    id : 2
  },
  {
    title : 'Option 3',
    id : 3
  },
  {
    title : 'Option 4',
    id : 4
  },
  {
    title : 'Option 5',
    id : 5
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'dropdown';
  selectedValue : number = optionsArr[0].id;
  options: Option[] = optionsArr; 

  @ViewChild('dropdown', {static: false}) dropdown? : ElementRef

  get selectedTitle (){
   
    let optionId = this.selectedValue;
    let option = this.options.find(x => x.id == optionId);

    return option?.title;
  }


  // getSelectedValue(){
  //   let optionId = this.dropdown?.nativeElement.value;
  //   let option = this.options.find(x => x.id == optionId);

  //   if (option) {      
  //     this.selectedValue = option;
  //   }
  // }
}
