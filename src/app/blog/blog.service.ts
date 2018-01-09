import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class BlogService {
  constructor(protected http: HttpClient) {}
  public blogApiUrl = 'http://localhost:9001/posts';

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
   }

  getPosts(): Observable<any> {
    return this.http.get(this.blogApiUrl)
       .catch(this.handleError);
  }

  getPost(id: number) {
    return this.http.get(this.blogApiUrl + '/' + id)
      .catch(this.handleError);
  }

  getPostComments(id: number) {
    return this.http.get(`${this.blogApiUrl}/${id}/comments`)
      .catch(this.handleError);
  }

  addPostComment(comment: Object, id: number) {
    return this.http.post(
      `${this.blogApiUrl}/${id}/comments`, 
      comment, 
      { headers: new HttpHeaders()
    }).catch(this.handleError);
  }
}