import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials = {
    username: "",
    password: "",
  }

  constructor(private toastService: ToastService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.credentials.username || !this.credentials.password) {
      this.toastService.show("Please enter usename and password")
    }
    this.authService.register(this.credentials).subscribe((user: any) => {
      this.toastService.show("Registration successfull");
      this.router.navigateByUrl('/login');
    }, (err: any) => {
      this.toastService.show(err.message);
    })
  }
}
