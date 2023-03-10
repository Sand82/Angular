import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  constructor(private trainingService: TrainingService) {}
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getAllExercises();
  }

  doFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }
}
