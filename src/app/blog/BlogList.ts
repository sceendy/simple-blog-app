/**
 * @overview Blog page.  Renders static content.
 */
import { Component, OnInit } from '@angular/core';

import { BlogService } from './blog.service';

@Component({
  selector: 'blog',
  template: `
    <h2>Blog</h2>
    <article *ngFor="let post of posts | blogOrder" class="post__container">
      <header>
        <h3 class="post__title">{{post.title}}</h3>
        <div class="post__date">{{post.publish_date}}</div>
        <div class="post__author">{{post.author}}</div>
      </header>
      <p>{{post.description}}</p>
    </article>
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
