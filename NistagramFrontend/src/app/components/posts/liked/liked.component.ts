import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/model/advertisement.model';
import { Post } from 'src/app/model/post.model';
import { CampaignService } from 'src/app/services/campaign.service';
import { PostService } from 'src/app/services/post.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {

  posts: Post[] = []



  constructor(private postService: PostService, private toastService: ToastService, private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.postService.getLiked().subscribe((posts: Post[]) => {
      this.posts = posts;
    }, (err: any) => {
      this.toastService.show(err.message)
    })
  }

}
