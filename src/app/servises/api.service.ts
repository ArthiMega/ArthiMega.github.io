import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  constructor(
    private http: HttpClient
  ) { }

}
