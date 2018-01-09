import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class BlogService {
  constructor(protected http: HttpClient) {}
  public blogCommentsApiUrl = 'http://localhost:9001/comments';

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
   }

  getComments(): Observable<any> {
    return this.http.get(this.blogCommentsApiUrl)
       .catch(this.handleError);
  }

  addComment(id: number) {
    return this.http.get(this.blogCommentsApiUrl + '/' + id)
      .catch(this.handleError);
  }
}