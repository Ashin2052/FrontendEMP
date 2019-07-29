import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
baseUrl="http://localhost:9001/api/"
  constructor(private httpClient: HttpClient) { }

  login(user)
{
  return this.httpClient.post(this.baseUrl+"employees/login/",user);
}
}
