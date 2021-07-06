import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { UserProfile } from 'src/app/model/user-profile.model';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {


  posts: Post[] = []
  profileUsername: string = "";
  userProfile: UserProfile = new UserProfile();
  isCurrentUser: boolean = false;

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private toastService: ToastService, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.profileUsername = params["profileUsername"];
      this.getPosts();
      this.profileService.getByUsername(this.profileUsername).subscribe((userProfile: UserProfile) => {
        this.userProfile = userProfile;
        let currentProfile = this.profileService.getCurrentProfile()
        this.isCurrentUser = currentProfile.id == this.userProfile.id
      }, (err: any) => {
        this.toastService.show(err.message)
      })
    })
    this.profileService.currentProfileObservable.subscribe((currentProfile: UserProfile) => {
      this.isCurrentUser = currentProfile && currentProfile.id == this.userProfile.id
    })
  }

  getPosts() {
    this.postService.getPosts({ filter: { profile_username: this.profileUsername }}).subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }

}
