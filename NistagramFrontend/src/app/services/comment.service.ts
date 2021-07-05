import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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


  getById(postId: number) {
    return this.comments;
  }


}
