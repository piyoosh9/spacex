import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { api_path } from 'src/app/utils/constants/api.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(public http: HttpClient) { }

  fetchLaunches(params: any) {
    return this.http.get<any>(`${environment.base_url + api_path.api_version + api_path.launches}`, {
      params: params
    });
  }

}