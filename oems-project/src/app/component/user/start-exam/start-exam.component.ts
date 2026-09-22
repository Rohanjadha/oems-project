import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit{
  
  quizId:any;
  questions:any;
  timer:any;

  marksGot:any;
  correctAnswers:any;
  attempted:any;

  isSubmit:Boolean=false
  
  constructor(private questionService:QuestionService,private activateRoute:ActivatedRoute){}
  
  ngOnInit(): void {
   
    this.activateRoute.params.subscribe((Response:any)=>{console.log(Response.quiz_id);
      this.quizId=Response.quiz_id;
    });
    this.questionService.getQuestionByQuizId(this.quizId).subscribe((Response:any)=>{console.log(Response);
      this.questions=Response;
      this.timer=this.questions.length*0.30*100;
      this.startTimer()
    })
  }

  getForMatedTime(){
    let mm = Math.floor(this.timer/60);
    let ss =this.timer-mm*60;

    return`${mm}:${ss}`
  }

  startTimer(){
    let t = window.setInterval(
      ()=>{
if(this.timer<=0){
clearInterval(t);
}
else{
this.timer--
}
      },
      1000
    )
  }

  submit(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you Want to End Exam",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Exam'
    }).then((result) => {
      if (result.isConfirmed) {
        this.directSubMit()
      }
    })
  }

  directSubMit(){
    this.questionService.directSubmit(this.questions).subscribe((Response:any)=>{console.log(Response);
      this.isSubmit=true;
      this.marksGot=Response.marksGot;
      this.correctAnswers=Response.correctAnswers;
      this.attempted=Response.attempted;
    })
  }

  printResult(){
    window.print();
  }
}
