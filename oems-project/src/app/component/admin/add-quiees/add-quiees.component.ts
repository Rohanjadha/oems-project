import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/Quiz-service/quiz.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiees',
  templateUrl: './add-quiees.component.html',
  styleUrls: ['./add-quiees.component.css']
})
export class AddQuieesComponent implements OnInit{

getCategoryData:any

constructor(private quizeService:QuizService,private categoryService:CategoryService,private router:Router){}
  


  quizeForm=new FormGroup({
    "title":new FormControl(null, [Validators.required]),
    "description":new FormControl(null, [Validators.required]),
    "maxMarks":new FormControl(null, [Validators.required]),
    "numberOfQuestions":new FormControl(null, [Validators.required]),
    "active":new FormControl(null, [Validators.required]),
    "category_id":new FormControl(null, [Validators.required]),
  })


  ngOnInit(): void {
   this.categoryService.getAllCategory().subscribe((Response:any)=>{console.log(Response)
  this.getCategoryData= Response
  })
  }

addQuizeData(){
  console.log(this.quizeForm.value)

  let addQuizzesData={
    "title": this.quizeForm.value.title,
    "description":this.quizeForm.value.description,
    "maxMarks": this.quizeForm.value.maxMarks,
    "numberOfQuestions":this.quizeForm.value.numberOfQuestions,
    "active":this.quizeForm.value.active,
    "category": {"category_id" : this.quizeForm.value.category_id},
  }

  console.log(addQuizzesData);
  

  this.quizeService.addQuizz(addQuizzesData).subscribe((Response:any)=>{console.log(Response)
  
    Swal.fire({
      title:`${Response.title}`,
      text:`Quize Added Successfully`,
      icon:`success`
    });

    this.router.navigate(['/admin-dashboard/admin-viewquiees'])
  
  })
}

}
