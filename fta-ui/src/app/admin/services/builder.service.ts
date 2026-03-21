import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  private baseUrl = 'http://localhost:8053/builder';

  constructor(private http: HttpClient) { }

  // CREATE
  createBuilder(builder: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, builder);
  }

  // GET BY ID
  getBuilderById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id/${id}`);
  }


  getByNationality(nationality: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/nationality/${nationality}`);
  }


  getByExpertise(expertise: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/expertise/${expertise}`);
  }


  updatePrice(id: number, price: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/price/${id}/${price}`, {});
  }


  getAll(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?page=${page}&size=${size}`);
  }

  getExpertiseStats(expertise: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/stats/${expertise}`
    );
  }

  getYearsStats(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/years`
    );
  }

  getMostNationality(): Observable<string> {
    return this.http.get(
      `${this.baseUrl}/nations`,
      { responseType: 'text' }
    );
  }

  deleteBuilder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
