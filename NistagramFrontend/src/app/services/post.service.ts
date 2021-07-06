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

  posts = [
    new Post({
      id: 1,
      timestamp: new Date().toISOString(),
      image: "https://picsum.photos/200/150/?random",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque vitae feugiat commodo. Nam venenatis tempor sapien et congue.",
      profile_id: 1,
      profile_username: "dusanpanda"
    }),
    new Post({
      id: 1,
      timestamp: new Date().toISOString(),
      image: "https://picsum.photos/200/150/?random",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque vitae feugiat commodo. Nam venenatis tempor sapien et congue.",
      profile_id: 1,
      profile_username: "dusanpanda"
    }),
    new Post({
      id: 1,
      timestamp: new Date().toISOString(),
      image: "https://picsum.photos/200/150/?random",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque vitae feugiat commodo. Nam venenatis tempor sapien et congue.",
      profile_id: 1,
      profile_username: "banepanda"
    }),
    new Post({
      id: 1,
      timestamp: new Date().toISOString(),
      image: "https://picsum.photos/200/150/?random",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque vitae feugiat commodo. Nam venenatis tempor sapien et congue.",
      profile_id: 1,
      profile_username: "otacpanda"
    }),
    new Post({
      id: 1,
      timestamp: new Date().toISOString(),
      image: "https://picsum.photos/200/150/?random",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque vitae feugiat commodo. Nam venenatis tempor sapien et congue.",
      profile_id: 1,
      profile_username: "user1panda"
    }),
  ]

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
    return this.http.post(`${environment.post_url}/post`, post).pipe(map((data: any) => {
      return new Post(data);
    }))
  }
}
