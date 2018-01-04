import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'blogOrder' })

export class BlogOrderPipe implements PipeTransform {
  transform(posts: any): any {
    if (posts) {
      return posts.sort((p1: any, p2: any) => p1.publish_date < p2.publish_date ? 1 : 0);
    }
  }
}