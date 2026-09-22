import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

 isLoggedIn=true;
 user:any=null;

constructor(private loginService:LoginService,private router:Router){}

  ngOnInit(): void {

    this.isLoggedIn=this.loginService.isLoggedIn();
    this.user=this.loginService.getUser()
    this.loginService.loginStatusSubject.asObservable().subscribe((Response)=>{this.isLoggedIn=this.loginService.isLoggedIn()
    this.user=this.loginService.getUser()
    
    })
   
  }

  logOut(){
    this.loginService.logOut();
    this.loginService.loginStatusSubject.next(false);
    this.router.navigate(['login']);
  }

}
