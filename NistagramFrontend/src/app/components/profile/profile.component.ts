import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserProfile } from 'src/app/model/user-profile.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileUsername: string = "";
  userProfile: UserProfile = new UserProfile();
  birth_date: NgbDateStruct = this.initBirthDate();
  isCurrentUser: boolean = false;

  user: any = { sub: {} }



  constructor(private route: ActivatedRoute, private profileService: ProfileService, private toastService: ToastService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.route.params.subscribe((params: any) => {
      this.profileUsername = params["profileUsername"];
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

  initBirthDate() {
    let today = new Date();
    return {
      day: today.getUTCDay(),
      month: today.getUTCMonth(),
      year: today.getUTCFullYear()
    }
  }

  updateClicked() {
    this.userProfile.birth_date = new Date(this.birth_date.year, this.birth_date.month, this.birth_date.day).toISOString();
    this.profileService.updateUserProfile(this.userProfile).subscribe((updatedProfile: UserProfile) => {
      this.userProfile = updatedProfile;
      this.toastService.show("Profile updated");
    }, (err: any) => {
      this.toastService.show(err.message)
    })
  }

  sendAgentRequest() {
    this.authService.sendAgentRequest()?.subscribe((data: any) => {
      this.router.navigateByUrl('/profile/' + this.userProfile.username)
    }, (err: any) => {
      this.toastService.show(err.message)
    })
  }

}
