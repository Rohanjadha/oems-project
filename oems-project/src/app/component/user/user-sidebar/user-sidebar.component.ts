import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit{
  
  constructor(private categoryService:CategoryService){}
  
  allCategory:any;
  
  ngOnInit(): void {
   this.categoryService.getAllCategory().subscribe((Response:any)=>{console.log(Response);
   this.allCategory=Response
  })
  }

}
