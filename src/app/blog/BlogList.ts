/**
 * @overview Blog page.  Renders static content.
 */
import { Component, OnInit } from '@angular/core';

import { BlogService } from './blog.service';
//import { BlogFilterPipe } from '../pipes/blogOrder.filter';

@Component({
  selector: 'blog',
  template: `
    <h2>Blog</h2>
    <div *ngFor="let post of posts">
      {{post.title}}
      {{post.publish_date}}
      {{post.author}}
      {{post.description}}
    </div>
  `,
  providers: [BlogService]
})

export class BlogListComponent implements OnInit {
  public errorMessage: string;
  public posts: Array<Object>;

  constructor(public blogService: BlogService) {}

  ngOnInit() {
    this.renderPosts();
  }

  renderPosts() {
    this.blogService.getPosts().subscribe(
      posts => this.posts = posts,
      error => this.errorMessage = error,
      () => console.log('works')
    );
  }
}
