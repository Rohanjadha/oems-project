import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-viewquestion',
  templateUrl: './admin-viewquestion.component.html',
  styleUrls: ['./admin-viewquestion.component.css']
})
export class AdminViewquestionComponent implements OnInit{
 
 quizId:any;
 quizTitle:any;
 getAllQuestion:any;

 constructor(private questionService:QuestionService,private activatedRoute:ActivatedRoute){}
 
  ngOnInit(): void {
  this.activatedRoute.params.subscribe((Response:any)=>{
    console.log(Response);
    this.quizId=Response.id;
    this.quizTitle=Response.title;});
 
    this.getAllQuestionData()
  }

  getAllQuestionData(){
    this.questionService.getAllQuestionByQuizId(this.quizId).subscribe((Response:any)=>{console.log(Response);
    this.getAllQuestion=Response;
    })
  }

  deleteQuestion(question_id:any){
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
        this.questionService.deleteQuestionById(question_id).subscribe((Response:any)=>{console.log(Response);
          this.getAllQuestionData()
        })
      }
    })
    
  }

}
