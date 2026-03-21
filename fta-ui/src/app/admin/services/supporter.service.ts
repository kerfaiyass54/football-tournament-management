import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SupporterService {

  private baseUrl = 'http://localhost:8091/supporter';

  constructor(private http: HttpClient) {}

  // POST /supporter/
  addSupporter(supporter: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, supporter);
  }

  // GET /supporter/{id}
  getSupporterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // GET /supporter/location/{location}
  getSupportersByLocation(location: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/location/${location}`);
  }

  // GET /supporter/list
  getAllSupporters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/list`);
  }

  // DELETE /supporter/{id}
  deleteSupporter(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // GET /supporter/name/{name}
  getSupporterByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/name/${name}`);
  }

  // GET /supporter/nationality/{nationality}
  getSupportersByNationality(nationality: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/nationality/${nationality}`);
  }

  // PUT /supporter/
  assignLocation(locationSupporter: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/`, locationSupporter);
  }

  // GET /supporter/?page=x&size=y
  getAllSupportersPaged(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(`${this.baseUrl}/`, { params });
  }
}
