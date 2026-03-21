import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = 'http://localhost:8054/team';
  constructor(private http: HttpClient) {}

  // GET /team/all?page=0&size=5
  getAllTeams(page: number = 0, size: number = 5): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get(`${this.apiUrl}/all`, { params });
  }

  // POST /team/
  createTeam(team: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, team);
  }

  // GET /team/rank?page=0&size=5
  getTeamRanking(page: number = 0, size: number = 5): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get(`${this.apiUrl}/rank`, { params });
  }

  // PUT /team/{id}/{teamStatus}
  changeStatus(id: string, status: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/${status}`, {});
  }

  // PUT /team/{id}/{budget}
  updateBudget(id: string, budget: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/${budget}`, {});
  }

  // GET /team/year/establish/{year}
  getTeamsByYear(year: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/year/establish/${year}`);
  }

  // GET /team/infos/city/{city}
  getTeamsByCity(city: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/infos/city/${city}`);
  }

  // GET /team/status/info/{teamStatus}
  getTeamsByStatus(status: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/status/info/${status}`);
  }

  // GET /team/search/{name}
  getTeamByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/${name}`);
  }

  // DELETE /team/{id}
  deleteTeam(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTeamById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
