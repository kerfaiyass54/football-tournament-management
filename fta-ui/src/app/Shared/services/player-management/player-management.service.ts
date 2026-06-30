import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerManagementService {

  private api =
    'http://localhost:8051/api/players';

  constructor(
    private http: HttpClient
  ) {}

  getTeamPlayers(
    teamId:string
  ) {

    return this.http.get(
      `${this.api}/team/${teamId}`
    );
  }

  releasePlayer(
    playerId:string
  ) {

    return this.http.post(
      `${this.api}/${playerId}/release`,
      {}
    );
  }

  moveToYouth(
    playerId:string
  ) {

    return this.http.post(
      `${this.api}/${playerId}/youth`,
      {}
    );
  }

  renewContract(
    contractId:string
  ) {

    return this.http.post(
      `${this.api}/contracts/${contractId}/renew`,
      {}
    );
  }

  searchPlayers(
    position?:string,
    rating?:number
  ) {

    let url =
      `${this.api}/search?`;

    if(position){

      url +=
        `position=${position}&`;
    }

    if(rating){

      url +=
        `rating=${rating}`;
    }

    return this.http.get(url);
  }

  getContracts(
    playerId:string
  ) {

    return this.http.get(
      `${this.api}/${playerId}/contracts`
    );
  }

  acceptTransfer(
    contractId:string
  ) {

    return this.http.post(
      `${this.api}/contracts/${contractId}/accept`,
      {}
    );
  }

  refuseTransfer(
    contractId:string
  ) {

    return this.http.post(
      `${this.api}/contracts/${contractId}/refuse`,
      {}
    );
  }

  getCurrentTeam(
    playerId:string
  ) {

    return this.http.get(
      `${this.api}/${playerId}/team`
    );
  }

}
