import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-catogeries',
  templateUrl: './add-catogeries.component.html',
  styleUrls: ['./add-catogeries.component.css']
})
export class AddCatogeriesComponent {


  addCat=new FormGroup({
    "title":new FormControl(null, [Validators.required]),
    "description":new FormControl(null, [Validators.required]),
  })

  constructor(private categoryService:CategoryService,private router:Router){}

  addCategoryData(){
    this.categoryService.addCategory(this.addCat.value).subscribe((Response:any)=>{console.log(Response)
    Swal.fire({
      title:`${Response.title}`,
      text:`Category Added Successfully`,
      icon:`success`
    })
    this.router.navigate(['admin-dashboard/admin-viewcatogaries'])
    })
  }

}
