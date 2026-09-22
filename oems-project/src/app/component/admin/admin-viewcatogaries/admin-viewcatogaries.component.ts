import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-viewcatogaries',
  templateUrl: './admin-viewcatogaries.component.html',
  styleUrls: ['./admin-viewcatogaries.component.css']
})
export class AdminViewcatogariesComponent implements OnInit{
  
  constructor(private categoryService:CategoryService,router:Router){}
  
 categoryData:any
  
  
  
  ngOnInit(): void {
   this.getAllCategory() 
  }

   getAllCategory(){
    this.categoryService.getAllCategory().subscribe((Response)=>{console.log(Response)
    this.categoryData=Response
    })
   }

   deleteCategory(category_id:any){

    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.categoryService.deleteCatById(category_id).subscribe((Response)=>{console.log(Response)
          this.getAllCategory()
          })
      }
    })

    
   }


}
