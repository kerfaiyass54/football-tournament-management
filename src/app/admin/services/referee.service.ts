import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  private baseUrl = 'http://localhost:8100/referee';

  constructor(private http: HttpClient) {}

  addReferee(referee: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, referee);
  }

  getRefereeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id/${id}`);
  }

  getRefereeByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/name/${name}`);
  }

  deleteReferee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
