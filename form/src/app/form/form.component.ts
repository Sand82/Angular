import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormGroup, FormBuilder],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
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
}
