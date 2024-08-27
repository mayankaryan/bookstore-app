import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl:string="https://bookstore.incubation.bridgelabz.com/";
  constructor(private httpClient: HttpClient) { }


  GetApiAuthCall(url:string, headers: any) {
    console.log(headers);
    return this.httpClient.get( this.BaseUrl + url, headers)
  }
 
 GetApiCall(url:string){
  console.log(this.BaseUrl+url);
  return this.httpClient.get(this.BaseUrl+url);

 }
}
