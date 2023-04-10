import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  @Input('isLiked')
  isLiked!: boolean;
  @Input('likesCount')
  likesCount!: number;
  likeClass!: string;

  onLike() {
    this.isLiked = !this.isLiked;
    this.likeClass = this.getStyle(this.isLiked);
    this.likesCount += this.isLiked ? 1 : -1;
  }

  getStyle(isLiked: boolean) {
    return (this.likeClass = isLiked ? 'activeLike' : 'isNotActive');
  }

  ngOnInit(): void {
    this.likeClass = this.getStyle(this.isLiked);
  }
}
