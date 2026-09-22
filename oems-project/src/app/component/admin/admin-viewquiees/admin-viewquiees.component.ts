import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/Quiz-service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-viewquiees',
  templateUrl: './admin-viewquiees.component.html',
  styleUrls: ['./admin-viewquiees.component.css']
})
export class AdminViewquieesComponent implements OnInit{

getAllQuizz:any

constructor(private quizeService:QuizService){}



  ngOnInit(): void {
  this.getAllQuizData()
  }

  getAllQuizData(){
    this.quizeService.getAllQuizData().subscribe((Response:any)=>{console.log(Response)
      this.getAllQuizz=Response
      })
  }

  deleteQuizById(quiz_id:any){
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
        this.quizeService.deleteQuizz(quiz_id).subscribe((Response:any)=>{console.log(Response);
          this.getAllQuizData()
         })

      }
    })
   
  }

}
