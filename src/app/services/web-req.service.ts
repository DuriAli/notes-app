import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface WebResponse {
  message: string;
  data: any;
  error: any;
}

export interface WebUpdateModel {
  propName: string;
  propValue: any;
}

@Injectable({
  providedIn: 'root',
})
export class WebReqService {
  corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(public http: HttpClient) {}

  readonly ROOT_URL = 'http://localhost:3000/notes';

  get(
    uri: string,
    params?: HttpParams | { [param: string]: string | string[] }
  ) {
    return this.http.get<WebResponse>(`${this.ROOT_URL}/${uri}`, {
      params: params,
      headers: this.corsHeaders,
    });
  }

  post(uri: string, payload: Object) {
    return this.http.post<WebResponse>(`${this.ROOT_URL}/${uri}`, payload);
  }

  // patch(uri: string, payload: Object) {
  //   return this.http.patch<WebResponse>(`${this.ROOT_URL}/${uri}`, payload);
  // }

  // delete(uri: string) {
  //   return this.http.delete<WebResponse>(`${this.ROOT_URL}/${uri}`);
  // }
}
