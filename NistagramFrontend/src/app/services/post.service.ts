import { Injectable } from '@angular/core';
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

  constructor() { }

  getPosts() {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }
}
