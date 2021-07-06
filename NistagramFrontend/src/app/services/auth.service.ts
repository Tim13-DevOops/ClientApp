import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { ProfileService } from './profile.service';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: BehaviorSubject<any> = new BehaviorSubject(undefined);

  public userObservable = this._user.asObservable();

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) { 
    let currentUser: any = localStorage.getItem("user")
    if (!currentUser) {
      this.profileService.changeCurrentProfile("");
      this._user.next(undefined)
    } else {
      currentUser = JSON.parse(currentUser)
      this.profileService.changeCurrentProfile(currentUser.sub.username)
      this._user.next(currentUser)
    }

  }

  ngOnInit() {
  }

  login(credentials: any) {
    return this.http.post(`${environment.auth_url}/login`, credentials).pipe(map((token: any) => {
      let user: any = jwt_decode(token);
      user.token = token;
      localStorage.setItem("user", JSON.stringify(user))
      this._user.next(user);
      this.profileService.changeCurrentProfile(user.sub.username)
      return user;
    }))
  }

  getUser() {
    return this._user.value;
  }

  logout() {
    this._user.next(null);
    localStorage.removeItem("user");
    this.profileService.changeCurrentProfile("");
    this.router.navigateByUrl("/login");
  }

  register(credentials: any) {
    return this.http.post(`${environment.auth_url}/user`, credentials)
  }
}
