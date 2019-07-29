import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpListService {

  baseUrl="http://localhost:9001/api/"
  constructor(private httpClient: HttpClient) { }
  token = JSON.parse(localStorage.getItem('token'))

  empList()
  {
    return this.httpClient.get(this.baseUrl+"employees/", {
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken
      })
    });
  }

  edit(emp)
  {
    return this.httpClient.put(this.baseUrl+"employees/", emp ,{
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken
      })
    });
  }

  delete(id)
  {
    return this.httpClient.delete(this.baseUrl+"employees/"+id,{
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken
      })
    });
  }

  update(event){
    console.log('event', event)
    return this.httpClient.put(this.baseUrl+"employees/"+event._id,event,{
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken,
      })
      
    });
  }

  addNewUser(event){
    return this.httpClient.post(this.baseUrl+"employees/",event,{
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken,
      })
      
    });
  }

  particularEmpLeaveList(emp)
  {
    console.log(emp._id,"id")
    return this.httpClient.get(this.baseUrl+"leaves/"+emp._id,{
      headers: new HttpHeaders({
        Authorization: this.token.jwtToken,
      })
      
    });
  }
isadminUpdate(emp,event)
{
  const obj={
    userId:emp,
    isadmin:event
  }
  return this.httpClient.put(this.baseUrl+"/leaves/make-admin",obj,{

    headers: new HttpHeaders({
      Authorization: this.token.jwtToken,
    })
    
  });
}

particularEmpList(id)
{
  console.log(id,"id")
  return this.httpClient.get(this.baseUrl+"employees/"+id,{
    headers: new HttpHeaders({
      Authorization: this.token.jwtToken,
    })
    
  });
}
}
