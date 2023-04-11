import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

let baseUrl = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${baseUrl}`);
  }

  createPosts(post: any) {
    return this.http.post(`${baseUrl}`, JSON.stringify(post));
  }

  updatePosts(post: any) {
    this.http;
    return this.http.patch(
      `${baseUrl}/${post.id}`,
      JSON.stringify({ isRead: true })
    );
  }

  deletePosts(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
