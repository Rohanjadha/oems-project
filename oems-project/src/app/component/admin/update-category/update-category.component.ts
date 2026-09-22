import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {


  category_id: any


  updateCatForm = new FormGroup({
    "category_id": new FormControl(null, [Validators.required]),
    "title": new FormControl(null, [Validators.required]),
    "description": new FormControl(null, [Validators.required]),

  })

  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((Response: any) => {
      console.log(Response.id)
      this.category_id = Response.id
    })

    this.categoryService.getCategoryById(this.category_id).subscribe((Response: any) => {
      console.log(Response);
    
      this.updateCatForm.setValue(Response)
    })

  }

  updateCatData() {

    console.log(this.updateCatForm.value)
    
    this.categoryService.updateCategory(this.updateCatForm.value).subscribe((Response: any) => { console.log(Response) 
      Swal.fire({
        title:`${Response.title}`,
        text:`Category Updated Successfully`,
        icon:`success`
      })
    this.router.navigate(['/admin-dashboard/admin-viewcatogaries'])
    
    })
  }


}
