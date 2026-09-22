import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{

  quizId:any;
  quizTitle:any;

  constructor(private questionService:QuestionService,private activatedRoute:ActivatedRoute,private router:Router){}

  

  addQuestionForm=new FormGroup({
    "content":new FormControl(null,[Validators.required]),
    "option1":new FormControl(null,[Validators.required]),
    "option2":new FormControl(null,[Validators.required]),
    "option3":new FormControl(null,[Validators.required]),
    "option4":new FormControl(null,[Validators.required]),
    "answer":new FormControl(null,[Validators.required]),

  })


  addQuestion={

    "content":this.addQuestionForm.value.content,
    "option1":this.addQuestionForm.value.option1,
    "option2":this.addQuestionForm.value.option2,
    "option3":this.addQuestionForm.value.option3,
    "option4":this.addQuestionForm.value.option4,
    "answer":this.addQuestionForm.value.answer,
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((Response:any)=>{console.log(Response)
      this.quizId=Response.id;
      this.quizTitle=Response.title;
    })
  

 
  }



  addQuestionData(){

    console.log(this.addQuestionForm.value);

    let addQuestion={

      "content":this.addQuestionForm.value.content,
      "option1":this.addQuestionForm.value.option1,
      "option2":this.addQuestionForm.value.option2,
      "option3":this.addQuestionForm.value.option3,
      "option4":this.addQuestionForm.value.option4,
      "answer":this.addQuestionForm.value.answer,
      "quiz" :{"quiz_id" : this.quizId}
    }


    

    this.questionService.addQuestionData(addQuestion).subscribe((Response:any)=>{console.log(Response);

    this.router.navigate([`/admin-dashboard/admin-viewquestion/${this.quizId}/${this.quizTitle}`])
    })
    
    console.log(addQuestion);
    

  }
}
