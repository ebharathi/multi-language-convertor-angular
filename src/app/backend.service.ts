import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http:HttpClient) {}
  private lang_url="https://text-translator2.p.rapidapi.com/getLanguages";
  getLanguages()
  {
    const httpOptions={
       headers:new HttpHeaders(
        {
          'X-RapidAPI-Key': '73e9df854cmsh6dbcd86fce82b33p1919f9jsn75aeea457c41',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
       )
    }
    return this.http.get(this.lang_url,httpOptions);
  }
}
