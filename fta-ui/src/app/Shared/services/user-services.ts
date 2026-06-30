import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor(
    private http: HttpClient
  ) {}

  getTeamByName(name:string) {

    return this.http.get<any>(
      `${API.TEAM}/search?name=${name}`
    );
  }

  getPlayerByName(name:string) {

    return this.http.get<any>(
      `${API.PLAYER}?name=${name}`
    );
  }

  getManagerByName(name:string) {

    return this.http.get<any>(
      `${API.MANAGER}/by-name/${name}`
    );
  }

  getBuilderByName(name:string) {

    return this.http.get<any>(
      `${API.BUILDER}/builder/name/${name}`
    );
  }

}
