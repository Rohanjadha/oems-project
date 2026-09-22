import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AdminWelcomepageComponent } from './component/admin/admin-welcomepage/admin-welcomepage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminViewcatogariesComponent  } from './component/admin/admin-viewcatogaries/admin-viewcatogaries.component';
import { AddCatogeriesComponent } from './component/admin/add-catogeries/add-catogeries.component';
import { AdminViewquieesComponent } from './component/admin/admin-viewquiees/admin-viewquiees.component';
import { AddQuieesComponent } from './component/admin/add-quiees/add-quiees.component';
import { AdminSidebarComponent } from './component/admin/admin-sidebar/admin-sidebar.component';
import { AdminViewquestionComponent } from './component/admin/admin-viewquestion/admin-viewquestion.component';
import { AddQuestionsComponent } from './component/admin/add-questions/add-questions.component';
import { AdminUpdatequestionComponent } from './component/admin/admin-updatequestion/admin-updatequestion.component';
import {AdminUpdateQuieesComponent } from './component/admin/admin-update-quiees/admin-update-quiees.component';
import { AdminGuard } from './services/allguard/admin.guard';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard.component';
import { UserWelcomepageComponent } from './component/user/user-welcomepage/user-welcomepage.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { UserGuard } from './services/user-guard/user.guard';
import { UpdateCategoryComponent } from './component/admin/update-category/update-category.component';
import { LoadQuizeComponent } from './component/user/load-quize/load-quize.component';
import { InstructionComponent } from './component/user/instruction/instruction.component';
import { StartExamComponent } from './component/user/start-exam/start-exam.component';



const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'admin-dashboard', component:AdminDashboardComponent,
      canActivate:[AdminGuard],

    children:[

      {
        path:'', component:AdminWelcomepageComponent
      },
      {
        path:'profile', component:ProfileComponent
      },

      {
        path:'admin-viewcatogaries', component: AdminViewcatogariesComponent
      },

      {
        path:'add-catogeries', component: AddCatogeriesComponent
      },
      {
        path:'admin-viewquiees', component: AdminViewquieesComponent
      },
      {
        path:'add-quiees' , component:AddQuieesComponent
      },
      {
        path:'admin-viewquestion/:id/:title',component:AdminViewquestionComponent
      },
      {
        path:'add-question/:id/:title',component:AddQuestionsComponent
      },

      {
        path:'admin-updatequestion/:id/:title',component:AdminUpdatequestionComponent
      },
      {
        path:'admin-update-quiees/:id',component:AdminUpdateQuieesComponent
      },
      {
        path:'update-category/:id',component:UpdateCategoryComponent
      }
  
    ]
  },
  {
    path:'user-dashboard', component:UserDashboardComponent,
    canActivate:[UserGuard],
    
    children:[
      {
        path:'', component:UserWelcomepageComponent
      },
      {
        path:'user-profile',component:UserProfileComponent
      },

      {
        path:':category_id',component:LoadQuizeComponent
      },
      {
        path:'instruction/:quiz_id',component:InstructionComponent
      }
      
    ]

  },
  {
    path:'startExam/:quiz_id',component:StartExamComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
