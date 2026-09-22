import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';

@Component({
  selector: 'app-admin-updatequestion',
  templateUrl: './admin-updatequestion.component.html',
  styleUrls: ['./admin-updatequestion.component.css']
})
export class AdminUpdatequestionComponent implements OnInit{

  updateQuestionForm=new FormGroup({
    "content":new FormControl(null,[Validators.required]),
    "option1":new FormControl(null,[Validators.required]),
    "option2":new FormControl(null,[Validators.required]),
    "option3":new FormControl(null,[Validators.required]),
    "option4":new FormControl(null,[Validators.required]),
    "answer":new FormControl(null,[Validators.required]),
  });

  constructor(private questionService:QuestionService,private activateRoute:ActivatedRoute,private router:Router){}
  
  questionId:any;
  quizTitle:any;
  getQuestionData:any;

  ngOnInit(): void {
  this.activateRoute.params.subscribe((Response:any)=>{console.log(Response);
  this.questionId =Response.id;
  this.quizTitle=Response.title;
  });

  this.questionService.getQuestionById(this.questionId).subscribe((Response:any)=>{console.log(Response);
    this.getQuestionData=Response;
  })

  }

  updateQuestionData(){
    console.log(this.updateQuestionForm.value);


    let setUpdateData ={
      "question_id":this.questionId,
    "content":this.updateQuestionForm.value.content,
    "option1":this.updateQuestionForm.value.option1,
    "option2":this.updateQuestionForm.value.option2,
    "option3":this.updateQuestionForm.value.option3,
    "option4":this.updateQuestionForm.value.option4,
    "answer":this.updateQuestionForm.value.answer,
    "quiz":{"quiz_id" : this.getQuestionData.quiz.quiz_id}

    }

    console.log(setUpdateData)

    this.questionService.updateQuestionData(setUpdateData).subscribe((Response:any)=>{console.log(Response);
      
      this.router.navigate([`/admin-dashboard/admin-viewquestion/${this.getQuestionData.quiz.quiz_id}/${this.quizTitle}`])
    })
    
  }

 


}
