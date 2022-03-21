import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL:string="http://localhost:8080/api/";

  constructor(private httpClient:HttpClient) { }

  public createUser(user){
    return this.httpClient.post<{message : any}>(this.SERVER_URL+'createUser',user);
  }

  public getUsers(){
    return this.httpClient.get<{users:any}>(this.SERVER_URL+'users') //el var de retour eli chtji mel backend
  }

  public getUser(id){
    return this.httpClient.get<{user:any}>(`${this.SERVER_URL}/users/${id}`)
  }
  public deleteUser(id){
    return this.httpClient.delete<{message:any}>(`${this.SERVER_URL}/users/${id}`)
  }
  public updateUser(user){
    return this.httpClient.put<{message:any}>(`${this.SERVER_URL}/users/${user.id}`,user)
  }

}
