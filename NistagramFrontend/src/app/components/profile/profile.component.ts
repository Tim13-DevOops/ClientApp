import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserProfile } from 'src/app/model/user-profile.model';
import { ProfileService } from 'src/app/services/profile.service';

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



  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.profileUsername = params["profileUsername"];
      this.userProfile = this.profileService.getByUsername(this.profileUsername);
      let currentProfile = this.profileService.getCurrentProfile()
      this.isCurrentUser = currentProfile.id == this.userProfile.id
    })
    this.profileService.currentProfileObservable.subscribe((currentProfile: UserProfile) => {
      this.isCurrentUser = currentProfile.id == this.userProfile.id
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

}
