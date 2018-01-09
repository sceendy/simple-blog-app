/**
 * @overview Comments component
 */

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../blog.service';
import { OrderPipe } from '../../pipes/order.pipe';

import template from './comments.component.html';

@Component({
  selector: 'comments',
  template,
  providers: [OrderPipe]
})

export class CommentsComponent implements OnInit {
  @ViewChild('commentBox') Prop: ElementRef;
  @Input() postId: number;
  public comments: Array<Object>;
  public addingComment: boolean = false;
  public commentsMessage: string;
  public commentForm: FormGroup;
  public user: FormControl;
  public content: FormControl;

  constructor(
    public route: ActivatedRoute,
    public blogService: BlogService,
    public fb: FormBuilder
  ) {
    this.commentForm = fb.group({
      'user': ['', Validators.required],
      'content': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.renderComments();
  }

  renderComments() {
    this.blogService.getPostComments(this.postId).subscribe(comments => {
      if (comments.length > 0) this.comments = comments;
      else {
        this.commentsMessage = 'There are no comments yet.'
      }
    });
  }

  showCommentForm() {
    this.addingComment = true;
    if (this.addingComment) {

      console.log(this.addingComment);
      this.Prop.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  addComment(formData: Object) {
    let currentDate = new Date();
    const formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    const comment = { ...formData, date: formatDate };
    this.blogService.addPostComment(comment, this.postId).subscribe(data => {
      console.log(data);
    });
  }
}