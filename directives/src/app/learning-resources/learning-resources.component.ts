import { Component } from '@angular/core';
import { SafeLinkDerective } from '../safe-link.derective';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDerective, LogDirective]
})
export class LearningResourcesComponent {}
