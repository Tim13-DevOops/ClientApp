import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PostComment } from '../model/post-comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments = [
    new PostComment({
      id: 1,
      post_id: 1,
      user_profile_id: 1,
      user_profile_username: "otacpanda",
      text: "Odlican post!",
      timestamp: new Date().toISOString()
    }),
    new PostComment({
      id: 1,
      post_id: 1,
      user_profile_id: 1,
      user_profile_username: "otacpanda",
      text: "Odlican post!",
      timestamp: new Date().toISOString()
    }),
    new PostComment({
      id: 1,
      post_id: 1,
      user_profile_id: 1,
      user_profile_username: "otacpanda",
      text: "Odlican post!",
      timestamp: new Date().toISOString()
    }),
    new PostComment({
      id: 1,
      post_id: 1,
      user_profile_id: 1,
      user_profile_username: "otacpanda",
      text: "Odlican post!",
      timestamp: new Date().toISOString()
    }),
    new PostComment({
      id: 1,
      post_id: 1,
      user_profile_id: 1,
      user_profile_username: "otacpanda",
      text: "Odlican post!",
      timestamp: new Date().toISOString()
    }),
  ]

  constructor(private http: HttpClient) { }


  getByPostId(postId: number): Observable<PostComment[]> {
    return this.http.get(`${environment.comment_url}/post/${postId}`).pipe(map((data: any) => {
      return data.map((x:any) => new PostComment(x))
    }))
  }

  create(postId: number, text: string): Observable<PostComment> {
    return this.http.post(`${environment.comment_url}/post/${postId}`, { text }).pipe(map((data: any) => {
      return new PostComment(data);
    }))
  }


}
