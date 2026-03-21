import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  private baseUrl = 'http://localhost:8084/organizer';

  constructor(private http: HttpClient) { }

  // CREATE
  addOrganizer(name: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${name}`, {});
  }

  // UPDATE
  updateOrganizer(id: number, name: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}/${name}`, {});
  }

  // GET BY ID
  getOrganizerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // GET ALL (PAGINATION)
  getOrganizers(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(`${this.baseUrl}/`, { params });
  }

  // DELETE
  deleteOrganizer(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
