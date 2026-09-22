import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/Quiz-service/quiz.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-update-quiees',
  templateUrl: './admin-update-quiees.component.html',
  styleUrls: ['./admin-update-quiees.component.css']
})
export class AdminUpdateQuieesComponent implements OnInit {

  quizId:any;
  getQuiz:any;
  getAllCategory:any;




  updateQuizzForm = new FormGroup({

    "quiz_id": new FormControl(null, [Validators.required]),
    "title": new FormControl(null, [Validators.required]),
    "description": new FormControl(null, [Validators.required]),
    "maxMarks": new FormControl(null, [Validators.required]),
    "numberOfQuestions": new FormControl(null, [Validators.required]),
    "category_id": new FormControl(null, [Validators.required]),
    "active": new FormControl(null, [Validators.required]),
  })

  constructor(private quizService: QuizService, private categoryService:CategoryService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((Response: any) => {
      console.log(Response.id);
      this.quizId = Response.id;
    });

    this.quizService.getQuizDataById(this.quizId).subscribe((Response: any) => {
      console.log(Response);
      this.getQuiz = Response;

    });
    
    this.categoryService.getAllCategory().subscribe((Response: any) => {
      console.log(Response)
      this.getAllCategory = Response;
    })

  }

  updateFormData() {
    console.log(this.updateQuizzForm.value);

    let setUpdateData = {

      "quiz_id": this.quizId,
      "title": this.updateQuizzForm.value.title,
      "description": this.updateQuizzForm.value.description,
      "maxMarks": this.updateQuizzForm.value.maxMarks,
      "numberOfQuestions": this.updateQuizzForm.value.numberOfQuestions,
      "active": this.updateQuizzForm.value.active,
      "category": { "category_id": this.updateQuizzForm.value.category_id },
    }

    this.quizService.UpdateQuiz(setUpdateData).subscribe((Response: any) => {
      console.log(Response);
      Swal.fire({
        title: `${Response.title}`,
        text: `Quizz Updated Successfully`,
        icon: `success`
      })
      this.router.navigate(['/admin-dashboard/admin-viewquiees'])

    })
  }

}
