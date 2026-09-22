import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/Quiz-service/quiz.service';

@Component({
  selector: 'app-load-quize',
  templateUrl: './load-quize.component.html',
  styleUrls: ['./load-quize.component.css']
})
export class LoadQuizeComponent implements OnInit{
 
categoryId:any;
quizzes:any;

 constructor (private quizService:QuizService,private activateRoute:ActivatedRoute){}
 
 
 
 
  ngOnInit(): void { 
    this.activateRoute.params.subscribe((Response:any)=>{console.log(Response.category_id);
     this.categoryId=Response.category_id;

     if(this.categoryId==0){
     this.quizService.getActiveQuiz().subscribe((Response:any)=>{console.log(Response);
      this.quizzes=Response;
     })
     }
     else{
      this.quizService.getActiveQuizBycategoryId(this.categoryId).subscribe((Response:any)=>{console.log(Response);
        this.quizzes=Response;
      })
     }
    })
  }

}
