import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }


  public loginStatusSubject = new Subject<Boolean>();


  //  use these function to generate token

  public generateToken(data:any){

  return this.http.post(`${baseUrl}generate-token`,data)}


  // use these function to login user can set token in localstorage

  public setToken(token:any){

   return localStorage.setItem('token', token)}


  //  check these fuction to user Login or Not

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token')

    if(tokenStr == null || tokenStr == '' || tokenStr==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  // these function is use to get token multiple times whenever we want

  public getToken(){
  return localStorage.getItem('token')
  }

//  these function will showed to the current login 

  public getCurrentUser(){
    return this.http.get(`${baseUrl}current-user`)
  }



  // data which we get from current User that we store in local storage and convert in string format


  public setUser(user:any){
    return localStorage.setItem('user', JSON.stringify(user))
  }


  // these function used to clear data form token and user data

  public  logOut(){
   localStorage.removeItem('token');
   localStorage.removeItem('user');
   return true;
  }

  // if user data is not null to return data into json format else logout

 public getUser(){
      let userStr=localStorage.getItem('user');
      if(userStr!=null){
        return JSON.parse(userStr)
      }
      else{
        this.logOut;
        return null;
      }
  }

  //  to check the user Role that is admin or Normal  User 


  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

 public saveUser(data:any){
  
 return this.http.post(`${baseUrl}user/`,data)
 }

}
