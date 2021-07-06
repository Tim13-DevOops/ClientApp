import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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

  constructor(private http: HttpClient) { }

  getByUsername(profileUsername: string): Observable<UserProfile> {
    return this.http.get(`${environment.profile_url}/user_profile/${profileUsername}`).pipe(map((data: any) => {
      return new UserProfile(data);
    }))
  }

  updateUserProfile(userProfile: UserProfile): Observable<UserProfile> {
    return this.http.put(`${environment.profile_url}/user_profile`, userProfile).pipe(map((data: any) => {
      return new UserProfile(data);
    }))
  }

  // getById(profileId: number) {
  //   for (let profile of this.profiles) {
  //     if (profile.id == profileId) {
  //       return profile
  //     }
  //   }
  //   return new UserProfile
  // }

  getCurrentProfile() {
    return this._currentProfile.value
  }

  changeCurrentProfile(username: string) {
    // console.log('usernmae', username)
    if(!username) {
      this._currentProfile.next(undefined);
    } else {
      this.getByUsername(username).subscribe((newProfile: UserProfile) => {
        this._currentProfile.next(newProfile);
      })

    }
  }
}
