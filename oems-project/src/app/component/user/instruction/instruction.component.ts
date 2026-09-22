import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/Quiz-service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit{
  
  quizId:any;
  quizes:any;

  constructor(private quizService:QuizService, private activateRoute:ActivatedRoute,private router:Router){

  }
  
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe((Response)=>{console.log(Response['quiz_id']);
      this.quizId=Response['quiz_id'];
    });

    this.quizService.getQuizDataById(this.quizId).subscribe((Response:any)=>{console.log(Response);
      this.quizes=Response
    })

  }

  startExam(){
    Swal.fire({
      title: 'Start Exam',
      text: "Are you sure want to start Exam!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate([`startExam/${this.quizId}`])
      }
    })
  }

}
