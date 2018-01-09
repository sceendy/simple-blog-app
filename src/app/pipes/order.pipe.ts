import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Order' })

export class OrderPipe implements PipeTransform {
  transform(data: any): any {
    if (data) {
      if (data[0].publish_date) {
        return data.sort((p1: any, p2: any) => p1.publish_date < p2.publish_date ? 1 : 0);
      }
      if (data[0].date) {
        return data.sort((p1: any, p2: any) => p1.date < p2.date ? 1 : 0);
      }
    }
  }
}