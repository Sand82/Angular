import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

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

  exerciseChange = new Subject<Exercise>();
  private runningExercise: any;
  exerciseType: string[] = [];
  exercises: Exercise[] = [];

  getTrainingsType() {
    return this.availableExercises.slice();
  }

  startExercise(selectId: string) {
    const selectExercise = this.availableExercises.find(
      (e) => e.id === selectId
    );

    if (selectExercise) {
      this.runningExercise = selectExercise;
      this.exerciseChange.next({ ...this.runningExercise });
    }
  }

  compliteExercise() {
    if (this.runningExercise) {
      this.exercises.push({
        ...this.runningExercise,
        date: new Date(),
        state: 'completed',
      });
    }

    this.runningExercise = null;
    this.exerciseChange.next(this.runningExercise);
  }

  cancelExercise(progress: number) {
    if (this.runningExercise) {
      this.exercises.push({
        ...this.runningExercise,
        date: new Date(),
        state: 'cancelled',
        duration: this.runningExercise.duration * (progress / 100),
        calories: this.runningExercise.calories * (progress / 10),
      });
    }

    this.runningExercise = null;
    this.exerciseChange.next(this.runningExercise);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  getAllExercises() {
    return this.exercises.slice();
  }
}
