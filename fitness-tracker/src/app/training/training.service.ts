import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {
  availableExercises: Exercise[] = [
    {
      id: 'crunches',
      name: 'Crunches',
      duration: 30,
      calories: 8,
    },
    {
      id: 'touch-toes',
      name: 'Touch Toes',
      duration: 180,
      calories: 15,
    },
    {
      id: 'side-lunges',
      name: 'Side lunges',
      duration: 120,
      calories: 18,
    },
    {
      id: 'burpess',
      name: 'Burpees',
      duration: 60,
      calories: 8,
    },
    {
      id: 'pushups',
      name: 'Pushups',
      duration: 100,
      calories: 14,
    },
  ];

  exerciseType: string[] = [];

  getTrainingsType() {
    return this.availableExercises.slice();
  }
}
