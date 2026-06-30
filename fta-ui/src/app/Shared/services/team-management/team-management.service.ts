import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamManagementService {

  private api =
    'http://localhost:8054/api/team-management';

  constructor(
    private http: HttpClient
  ) {}

  getTeam(
    teamId:string
  ) {

    return this.http.get(
      `${this.api}/${teamId}`
    );
  }

  getPlayers(
    teamId:string
  ) {

    return this.http.get(
      `${this.api}/${teamId}/players`
    );
  }

  releasePlayer(
    playerId:string
  ) {

    return this.http.post(
      `${this.api}/players/${playerId}/release`,
      {}
    );
  }

  moveToYouth(
    playerId:string
  ) {

    return this.http.post(
      `${this.api}/players/${playerId}/youth`,
      {}
    );
  }

  renewContract(
    contractId:number
  ) {

    return this.http.post(
      `${this.api}/contracts/${contractId}/renew`,
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

  requestStadiumOperation(
    dto:any
  ) {

    return this.http.post(
      `${this.api}/stadium/operation`,
      dto
    );
  }

}
