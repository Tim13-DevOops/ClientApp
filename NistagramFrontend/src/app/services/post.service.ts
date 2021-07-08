import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) { }

  getPosts(params?: any): Observable<Post[]> {
    let queryParams = {}

    if (params) {
      queryParams = {
        params: new HttpParams()
        .set("filter_dict", params.filter && JSON.stringify(params.filter) || "{}")
        .set("page", params.page || 1)
        .set("page_size", params.pageSize || 10 )
      }
    }

    return this.http.get(`${environment.post_url}/post`, queryParams).pipe(map((data: any) => {
      return data.map((x: any) => new Post(x));
    }))
  }

  getOne(postId: number): Observable<Post> {
    return this.http.get(`${environment.post_url}/post/${postId}`).pipe(map((data: any) => {
      return new Post(data);
    }))
  }

  addPost(post: Post): Observable<Post> {
    delete post.sponsored;
    delete post.product_id;
    return this.http.post(`${environment.post_url}/post`, post).pipe(map((data: any) => {
      return new Post(data);
    }))
  }

  updateReaction(postId: number, reaction: boolean): Observable<Post> {
    return this.http.put(`${environment.post_url}/reaction`, { post_id: postId, like: reaction }).pipe(map((data: any) => {
      return new Post(data);
    }))

  }

  getLiked(): Observable<Post[]> {
    return this.http.get(`${environment.post_url}/post/like`).pipe(map((data: any) => {
      return data.map((x: any) => new Post(x));
    }))

  }

  getByTag(tag: string): Observable<Post[]> {
    return this.http.get(`${environment.post_url}/post/tag/${tag}`).pipe(map((data: any) => {
      return data.map((x: any) => new Post(x));
    }))
  }
}
