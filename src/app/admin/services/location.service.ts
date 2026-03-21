import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'http://localhost:8091/location';

  constructor(private http: HttpClient) {}

  // =============================
  // GET ALL (non paged)
  // =============================
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`);
  }

  // =============================
  // GET PAGED
  // =============================
  getPaged(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(`${this.baseUrl}/paged`, { params });
  }

  // =============================
  // GET BY CONTINENT (paged)
  // =============================
  getByContinent(continent: string, page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(
      `${this.baseUrl}/continent/${continent}`,
      { params }
    );
  }

  // =============================
  // GET ONE
  // =============================
  getByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${name}`);
  }

  // =============================
  // CREATE
  // =============================
  create(location: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, location);
  }

  // =============================
  // DELETE
  // =============================
  delete(name: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${name}`);
  }

  // =============================
  // SUPPORTERS COUNT
  // =============================
  getSupportersCount(name: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseUrl}/supporters/${name}`
    );
  }
}
