import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/model/post-comment.model';
import { CommentService } from 'src/app/services/comment.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  postId: number = 0;

  comments: PostComment[] = [];

  newCommentText: string = "";

  constructor(private commentService: CommentService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.commentService.getByPostId(this.postId).subscribe((comments: PostComment[]) => {
      this.comments = comments;
    }, (err: any) => {
      this.toastService.show(err.message)
    })
  }

  
  postComment() {
    this.commentService.create(this.postId, this.newCommentText).subscribe((newComment: PostComment) => {
      this.comments.push(newComment);
      this.newCommentText = "";
    }, (err: any) => {
      this.toastService.show(err.message)
    })
  }

}
