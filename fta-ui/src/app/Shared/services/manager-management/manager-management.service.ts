import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerManagementService {

  private api =
    'http://localhost:8052/api/managers';

  constructor(
    private http: HttpClient
  ) {}

  getManagerTeam(
    managerId:string
  ) {

    return this.http.get(
      `${this.api}/${managerId}/team`
    );
  }

  acceptCareer(
    careerId:string
  ) {

    return this.http.post(
      `${this.api}/careers/${careerId}/accept`,
      {}
    );
  }

  refuseCareer(
    careerId:string
  ) {

    return this.http.post(
      `${this.api}/careers/${careerId}/refuse`,
      {}
    );
  }

  renewCareer(
    careerId:string
  ) {

    return this.http.post(
      `${this.api}/careers/${careerId}/renew`,
      {}
    );
  }

  sackManager(
    careerId:string
  ) {

    return this.http.post(
      `${this.api}/careers/${careerId}/sack`,
      {}
    );
  }

}
