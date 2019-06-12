import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() public post: IPost;
  constructor() { }

  ngOnInit() {
  }

  formatTitle(post: IPost) {
    return post.title.length > 36 ? `${post.title.substr(0, 36)}...` : post.title;
  }
}
