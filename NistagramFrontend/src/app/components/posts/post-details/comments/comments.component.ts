import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/model/post-comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  postId: number = 0;

  comments: PostComment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.comments = this.commentService.getById(this.postId);
  }

}
