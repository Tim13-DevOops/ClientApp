import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/model/post-comment.model';
import { Post } from 'src/app/model/post.model';
import { CommentService } from 'src/app/services/comment.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  post: Post = new Post();

  
  faTrash = faTrash;
  faHeart = faHeart;

  
  images_url = environment.images_url;

  constructor() { }

  ngOnInit(): void {
  }


}
