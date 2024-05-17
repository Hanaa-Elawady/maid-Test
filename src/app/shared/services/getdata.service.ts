import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private _HttpClient: HttpClient) { }
  
  getUsers(pageNum:number =1): Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users?page=${pageNum}}`);
  }

  getSpecificUser(userId:string): Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users/${userId}`);
  }
}
