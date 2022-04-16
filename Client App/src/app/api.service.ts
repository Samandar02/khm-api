import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, pipe, Subject } from 'rxjs';
import { Novetly, NovetlyModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  URL = 'https://localhost:44361/api/News/'
  constructor(private http: HttpClient) { }
  private thread = new Subject<number>();
  
  setNovetly(item:number){
    this.thread.next(item);
  }
  getNovetly(){
    return this.thread.asObservable()
  }

  getNews():Observable<NovetlyModel[]> {
    return this.http.get(this.URL) as Observable<NovetlyModel[]>;
  }
  getNew(id:number):Observable<NovetlyModel> {
  return this.http.get(this.URL+id) as Observable<NovetlyModel>;
  }
  postNovetly(newNovetly: Novetly):Observable<NovetlyModel> {
    if(!newNovetly.id){
      return this.http.post(this.URL,newNovetly) as Observable<NovetlyModel>;
    }

    else
      return this.http.put(this.URL+newNovetly.id,newNovetly) as Observable<NovetlyModel>;
  }
  deleteNovetly(id:number): Observable<Object>{
    return this.http.delete(this.URL+id) as Observable<Object>
  }
}
