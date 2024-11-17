import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

let baseUrl = 'https://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any | undefined;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (response) => {
        if (response) {
          this.posts = response;
        }
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPosts(post).subscribe(
      (response: any) => {
        if (response) {
          post.id = response.id;
          this.posts.splice(0, 0, post);
        }
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  updatePost(post: any) {
    this.service.updatePosts(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  deletePost(post: any) {
    this.service.deletePosts(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('This post has already been deleted.');
        } else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      }
    );
  }
}
