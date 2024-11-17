import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {
  form! : FormGroup;
  isSubmited: boolean = false;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['',  [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })    
  }  

  submitForm() : void {
    console.log(this.form.value, this.form.valid);
    this.isSubmited = true;
  }

  validateFormField(fieldName : string) : boolean {
     
   if(this.form.get(fieldName)?.hasError('required') && 
   (this.form.get(fieldName)?.dirty || 
   this.form.get(fieldName)?.touched || this.isSubmited)) {

    return true;
    }
     
    return false;
  }
}
