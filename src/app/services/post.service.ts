import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
