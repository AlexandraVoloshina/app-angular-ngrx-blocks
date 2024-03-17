
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {
  constructor(private http: HttpClient) { }

  getBlocks(page: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
  }

  getBlockByNumber(postId: string): Observable<any> {
    //const url = `${this.apiUrl}/${postId}`;
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}
