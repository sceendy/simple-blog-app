import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogListComponent } from './list.component';
import { BlogPostComponent } from './post/post.component';
import { OrderPipe } from '../pipes/order.pipe';

import { CommentsComponent } from './post/comments.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogPostComponent,
    CommentsComponent,
    OrderPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BlogService
  ]
})

export class BlogModule { }