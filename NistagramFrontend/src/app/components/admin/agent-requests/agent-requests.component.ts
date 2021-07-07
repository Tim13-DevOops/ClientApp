import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agent-requests',
  templateUrl: './agent-requests.component.html',
  styleUrls: ['./agent-requests.component.css']
})
export class AgentRequestsComponent implements OnInit {

  users: any[] = []

  faCheck = faCheck
  faTimes = faTimes

  constructor(private authService: AuthService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.authService.getAgentRequests().subscribe((users: any[]) => {
      this.users = users;
    }, (err: any) => {
      this.toastService.show(err.message)
    })

  }

  handleRequest(user_id: number, approve: boolean) {
    console.log(approve)
    this.authService.resolveAgentRequest(user_id, approve).subscribe((data: any) => {
      this.getUsers()

    })
  }

}
