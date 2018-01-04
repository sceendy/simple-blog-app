import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'blogFilter' })

export class BlogFilterPipe implements PipeTransform {
  transform(posts: any): any {
    console.log(posts);
  }
}