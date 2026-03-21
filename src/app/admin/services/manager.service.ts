import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



export type ManagerStatus = 'RETIRED' | 'FREE' | 'BANNED' | 'TAKEN';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private baseUrl = 'http://localhost:8052/manager';

  constructor(private http: HttpClient) { }

  // ✅ Get All Managers
  getManagers(page: number = 0, size: number = 5): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(`${this.baseUrl}/`, { params });
  }

  // ✅ Get any By ID
  getManagerById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // ✅ Get Managers By Nationality
  getManagersByNationality(nationality: string, page: number = 0, size: number = 5): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(
      `${this.baseUrl}/nationality/${nationality}`,
      { params }
    );
  }

  getManagersStatusSummary() {
    return this.http.get<any>(`${this.baseUrl}/number`);
  }

  // ✅ Get Managers With Status (DTO)
  getManagersWithStatus(page: number = 0, size: number = 5): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(`${this.baseUrl}/status`, { params });
  }

  getNumberOfManagersByStatus(status: string) {
    return this.http.get<number>(
      `${this.baseUrl}/stats/number/${status}`
    );
  }

  // ✅ Create any
  addManager(manager: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, manager);
  }

  // ✅ Change Status
  changeStatus(id: string, status: ManagerStatus): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}/${status}`, {});
  }
}
