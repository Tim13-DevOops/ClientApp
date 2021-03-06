import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: any = undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userObservable.subscribe((user: any) => {
      this.user = user;
    })
  }

  logout() {
    this.authService.logout();
  }

}
