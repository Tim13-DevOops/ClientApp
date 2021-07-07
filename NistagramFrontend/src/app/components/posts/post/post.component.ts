import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/model/post.model';
import { environment } from 'src/environments/environment';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { DOCUMENT } from '@angular/common';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post = new Post();

  image_url = environment.images_url;

  faTrash = faTrash;
  faHeart = faHeart;

  constructor(private postService: PostService, private modalService: NgbModal, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  openDetails(): void {
    const modalRef = this.modalService.open(PostDetailsComponent, { size: 'xl',  centered: true, windowClass: 'my-class overflow-hidden' });
    modalRef.componentInstance.post = this.post;
  }

  goToProductPage(): void {
      this.document.location.href = `${environment.agent_frontend_url}/product/${this.post.product_id}`;
  }

  updateReaction(reaction: boolean) {
    if (reaction && this.post.liked_by_user) {
      return
    }
    if (reaction && !this.post.liked_by_user) {
      this.post.likes += 1
    }
    if (!reaction && this.post.disliked_by_user) {
      return
    }
    
    if (!reaction && !this.post.disliked_by_user) {
      this.post.dislikes += 1
    }

    if (reaction && this.post.disliked_by_user) {
      this.post.dislikes -= 1;
    }

    if (!reaction && this.post.liked_by_user) {
      this.post.likes -= 1;
    }

    if (reaction) {
      this.post.liked_by_user = true;
      this.post.disliked_by_user = false;
    } else {
      this.post.liked_by_user = false;
      this.post.disliked_by_user = true;
    }
    this.postService.updateReaction(this.post.id, reaction).subscribe((post: Post) => {
      
    })
  }

}
