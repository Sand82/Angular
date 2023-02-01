import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private trainingService: TrainingService) {}
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getAllExercises();
  }

  doFilter(filterValue: any) {
    console.log(filterValue.target.value);
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }
}
