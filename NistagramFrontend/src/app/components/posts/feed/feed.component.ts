import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/model/advertisement.model';
import { Post } from 'src/app/model/post.model';
import { CampaignService } from 'src/app/services/campaign.service';
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

  advertisements: Advertisement[] = []

  constructor(private postService: PostService, private toastService: ToastService, private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.postService.getPosts(this.params).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.getAdvertisements()
    }, (err: any) => {
      this.toastService.show(err.message)
    })
  }

  getAdvertisements() {
    this.campaignService.getAdvertisements({ page: this.params.page, pageSize: 1}).subscribe((advertisements: Advertisement[]) => {
        for (let ad of advertisements) {
          this.postService.getOne(ad.post_id).subscribe((post: Post) => {
            post.sponsored = true;
            post.product_id = ad.product_id;
            this.posts.push(post)
          })
        }
    })
  }


  onScroll() {
    if (this.loading || this.done) {
      return
    }
    this.params.page += 1;
    this.loading = true;
    this.postService.getPosts(this.params).subscribe((posts: Post[]) => {
      this.getAdvertisements()
      this.loading = false;
      this.posts = this.posts.concat(posts);
    }, (err: any) => {
      this.done = true;
      // this.toastService.show(err.message)
    })
  }

}
