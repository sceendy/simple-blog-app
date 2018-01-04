import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BlogListComponent } from './BlogList';
import { BlogPostComponent } from './post/BlogPost';
import { BlogOrderPipe } from '../pipes/blogOrder.pipe';

import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogPostComponent,
    BlogOrderPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    BlogService
  ]
})

export class BlogModule { }