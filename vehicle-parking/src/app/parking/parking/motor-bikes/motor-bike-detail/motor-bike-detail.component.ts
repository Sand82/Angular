import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MotorBike } from '../../../../models/motor-bike.model';
import { ActivatedRoute } from '@angular/router';
import { MotorbikeService } from '../../../../services/motorbike.service';

@Component({
  selector: 'app-motor-bike-detail',
  templateUrl: './motor-bike-detail.component.html',
  styleUrl: './motor-bike-detail.component.scss',
})
export class MotorBikeDetailComponent implements OnInit {
  motorBike!: Observable<MotorBike>;

  constructor(
    private motorBikeService: MotorbikeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.motorBike = this.motorBikeService.getMotorBike(params['id']);
    });
  }
}
