import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { IEvent } from './interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(private http: HttpClient) { }
  apiUri: string = 'https://localhost:7106/api/Event'
  getEvents(){
    return this.http.get(this.apiUri)
  }
  addEvent(event:IEvent) {
    return this.http.post(`${this.apiUri}/add`,event);
  }
}
