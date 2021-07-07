import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/model/post.model';
import { environment } from 'src/environments/environment';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { DOCUMENT } from '@angular/common';

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

  constructor(private modalService: NgbModal, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  openDetails(): void {
    const modalRef = this.modalService.open(PostDetailsComponent, { size: 'xl',  centered: true, windowClass: 'my-class overflow-hidden' });
    modalRef.componentInstance.post = this.post;
  }

  goToProductPage(): void {
      this.document.location.href = `${environment.agent_frontend_url}/product/${this.post.product_id}`;
  }

}
