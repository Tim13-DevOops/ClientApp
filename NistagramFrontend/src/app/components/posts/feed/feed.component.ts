import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[] = []

  params = {
    page: 1,
    pageSize: 5
  }

  loading = false;
  done = false;

  constructor(private postService: PostService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.postService.getPosts(this.params).subscribe((posts: Post[]) => {
      this.posts = posts;
    }, (err: any) => {
      this.toastService.show(err.message)
    })
  }

  onScroll() {
    if (this.loading || this.done) {
      return
    }
    this.params.page += 1;
    this.loading = true;
    this.postService.getPosts(this.params).subscribe((posts: Post[]) => {
      this.loading = false;
      this.posts = this.posts.concat(posts);
    }, (err: any) => {
      this.done = true;
      // this.toastService.show(err.message)
    })
  }

}
