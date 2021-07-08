import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentRequestsComponent } from './components/admin/agent-requests/agent-requests.component';
import { CampaignComponent } from './components/agent/campaign/campaign.component';
import { LoginComponent } from './components/core/login/login.component';
import { RegisterComponent } from './components/core/register/register.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { FeedComponent } from './components/posts/feed/feed.component';
import { LikedComponent } from './components/posts/liked/liked.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { ProfilePageComponent } from './components/profile/profile-page/profile-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: FeedComponent },
  { path: "liked", component: LikedComponent },
  { path: "profile/:profileUsername", component: ProfilePageComponent },
  { path: "profileDetails/:profileUsername", component: ProfileComponent },
  { path: "posts/:postUsername", component: PostDetailsComponent},
  { path: "post", component: AddPostComponent},
  { path: "agentRequests", component: AgentRequestsComponent },
  { path: "campaign", component: CampaignComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
