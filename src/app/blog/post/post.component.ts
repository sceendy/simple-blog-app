/**
 * @overview Single Blog Post page. 
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

import template from './post.html';

@Component({
  selector: 'blog-post',
  template
})

export class BlogPostComponent implements OnInit {
  public id: number;
  public errorMessage: string;
  public post: Object;

  constructor(public blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['slug'].replace('blog-post-', ''));
    this.renderPost();
  }

  renderPost() {
    this.blogService
      .getPost(this.id)
      .subscribe(
        post => this.post = post,
        error =>  this.errorMessage = <any>error,
        () => console.log('works')
      );
  }
}