import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from '../model/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  
  private _currentProfile: BehaviorSubject<any> = new BehaviorSubject(undefined);

  public currentProfileObservable = this._currentProfile.asObservable();

  profiles = [
    new UserProfile({
      id: 1,
      username: "dusanpanda",
      name: "Dusan Panda",
      email: "dusan@panda.com",
      phone_number: "02394203480",
      birth_date: new Date().toISOString(),
      biography: "Dusan is a panda like no other",
      website: "dusan.panda.com",
      date_created: new Date(),
      public: true,
      taggable: true
    }),
    new UserProfile({
      id: 1,
      username: "banepanda",
      name: "Bane Panda",
      email: "bane@panda.com",
      phone_number: "02394203480",
      birth_date: new Date().toISOString(),
      biography: "Bane is a panda like no other",
      website: "bane.panda.com",
      date_created: new Date(),
      public: true,
      taggable: true
    }),
  ]

  constructor() { }

  getByUsername(profileUsername: string) {
    for (let profile of this.profiles) {
      if (profile.username == profileUsername) {
        return profile
      }
    }
    return new UserProfile
  }

  getById(profileId: number) {
    for (let profile of this.profiles) {
      if (profile.id == profileId) {
        return profile
      }
    }
    return new UserProfile

  }

  getCurrentProfile() {
    return this._currentProfile.value
  }

  changeCurrentProfile(username: string) {
    let newProfile = this.getByUsername(username)
    this._currentProfile.next(newProfile)
  }
}
