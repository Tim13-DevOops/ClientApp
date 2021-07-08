import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/core/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedComponent } from './components/posts/feed/feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/core/login/login.component';
import { PostComponent } from './components/posts/post/post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ToastContainerComponent } from './components/core/toast/toast-container/toast-container.component';
import { ToastGlobalComponent } from './components/core/toast/toast-global/toast-global.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { ImageUploadComponent } from './components/core/image-upload/image-upload.component';
import { CommentsComponent } from './components/posts/post-details/comments/comments.component';
import { RegisterComponent } from './components/core/register/register.component';
import { ProfilePageComponent } from './components/profile/profile-page/profile-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AgentRequestsComponent } from './components/admin/agent-requests/agent-requests.component';
import { CampaignComponent } from './components/agent/campaign/campaign.component';
import { LikedComponent } from './components/posts/liked/liked.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeedComponent,
    ProfileComponent,
    LoginComponent,
    PostComponent,
    ToastContainerComponent,
    ToastGlobalComponent,
    AddPostComponent,
    PostDetailsComponent,
    ImageUploadComponent,
    CommentsComponent,
    RegisterComponent,
    ProfilePageComponent,
    AgentRequestsComponent,
    CampaignComponent,
    LikedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    InfiniteScrollModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

