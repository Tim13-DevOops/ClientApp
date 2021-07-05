import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/model/post.model';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post = new Post();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openDetails(): void {
    const modalRef = this.modalService.open(PostDetailsComponent, { size: 'xl',  centered: true, windowClass: 'my-class overflow-hidden' });
    modalRef.componentInstance.post = this.post;
  }

}
