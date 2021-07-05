import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  post: Post = new Post();
  
  images_url = environment.images_url;

  constructor() { }

  ngOnInit(): void {
  }

}
