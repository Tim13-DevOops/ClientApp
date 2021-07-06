import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostService, private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {

  }

  imageUploaded(imageId: string) {
    this.post.profile_username = this.profileService.getCurrentProfile().username
    this.post.image = imageId;
  }

  onSubmit() {
    this.postService.addPost(this.post).subscribe((newPost: Post) => {
      this.router.navigateByUrl("/home")
    })
  }


}
