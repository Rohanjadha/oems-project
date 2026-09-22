
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private route:Router) { }

  logIn = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })

  submitLoginData() {
    console.log(this.logIn.value)

    //  generate token

    this.loginService.generateToken(this.logIn.value).subscribe((Response: any) => {

      console.log(Response)

      // setToken is Used to  set token in LocalStorage

      this.loginService.setToken(Response.token);

      this.loginService.getCurrentUser().subscribe((Response: any) => { console.log(Response)

        // response will be set in localStorage

        
      this.loginService.setUser(Response);



      if(this.loginService.getUserRole() == "ADMIN"){
       this.route.navigate(['admin-dashboard'])
       
       this.loginService.loginStatusSubject.next(true);
      }

      else if(this.loginService.getUserRole() == "NORMAL"){
    this.route.navigate(['user-dashboard'])

    this.loginService.loginStatusSubject.next(true);

      }

      })
    },
    (err)=>{
      Swal.fire({
        title:'user not found',
        text:'Invalid User',
        icon:'error'
      })
    }
    
    )
  }







}
