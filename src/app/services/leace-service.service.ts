import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaceListService {

  baseUrl="http://localhost:9001/api/"
  constructor(private httpClient: HttpClient) { }
  token = JSON.parse(localStorage.getItem('token'))

  addNewUserLeave(event){
    return this.httpClient.post(this.baseUrl+"leaves/",event,{
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken,
      })
      
    });
  }

  empLeaveList()
  {
    return this.httpClient.get(this.baseUrl+"leaves/", {
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken
      })
    });
  }

  leaveStatus(id,updatedLeaveStatus)
  {
    const obj={
      Id:id,
      Approved:updatedLeaveStatus
    }
 return this.httpClient.put(this.baseUrl+"leaves/approve/",obj, {
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken
      })
    });
  }
particularEmpLeaveList(id)
{
  return this.httpClient.get(this.baseUrl+"leaves/"+id, {
    headers: new HttpHeaders({
      Authorization: this.token.jwtToken
    })
  });
}
  
}
