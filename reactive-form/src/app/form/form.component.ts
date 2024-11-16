import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form! : FormGroup;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }  

  submitForm() : void {
    console.log(this.form.value)
  }
}
