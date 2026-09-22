import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private reghttp:HttpClient,private loginService:LoginService, private router:Router){ }


  regIn=new FormGroup({
    
    "username":new FormControl(null,[Validators.required]),
    "password":new FormControl(null,[Validators.required]),
    "firstname":new FormControl(null,[Validators.required]),
    "lastname":new FormControl(null,[Validators.required]),
    "email":new FormControl(null,[Validators.required]),
    "phone":new FormControl(null,[Validators.required]),
  })


  regLogin(){

    console.log(this.regIn.value)

    this.loginService.saveUser(this.regIn.value).subscribe((Response:any)=>{console.log(Response);
      
    this.router.navigate(['login'])
    })
  }

}
