import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuilderStadiumService {

  private api =
    'http://localhost:8053/api/builders/stadiums';

  constructor(
    private http: HttpClient
  ) {}

  addStadium(dto: any) {

    return this.http.post(
      this.api,
      dto
    );
  }

  getBuilderStadiums(
    builderId: number
  ) {

    return this.http.get(
      `${this.api}/builder/${builderId}`
    );
  }

  getStats() {

    return this.http.get(
      `${this.api}/stats`
    );
  }

  getOperations(
    stadiumId: string
  ) {

    return this.http.get(
      `${this.api}/${stadiumId}/operations`
    );
  }

  getPendingOperations(
    stadiumId: string
  ) {

    return this.http.get(
      `${this.api}/${stadiumId}/operations/pending`
    );
  }

  getCompletedOperations(
    stadiumId: string
  ) {

    return this.http.get(
      `${this.api}/${stadiumId}/operations/completed`
    );
  }

  getBuilderOperations(
    builderId: number
  ) {

    return this.http.get(
      `${this.api}/builder/${builderId}/operations`
    );
  }

  getBuilderPendingOperations(
    builderId: number
  ) {

    return this.http.get(
      `${this.api}/builder/${builderId}/operations/pending`
    );
  }

  getBuilderCompletedOperations(
    builderId: number
  ) {

    return this.http.get(
      `${this.api}/builder/${builderId}/operations/completed`
    );
  }

  applyOperation(
    stadiumId: string,
    dto: any
  ) {

    return this.http.post(
      `${this.api}/${stadiumId}/operations`,
      dto
    );
  }

}
