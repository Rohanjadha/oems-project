import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddCatogeriesComponent } from './component/admin/add-catogeries/add-catogeries.component';
import { AddQuestionsComponent } from './component/admin/add-questions/add-questions.component';
import { AddQuieesComponent } from './component/admin/add-quiees/add-quiees.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './component/admin/admin-sidebar/admin-sidebar.component';
import { AdminWelcomepageComponent } from './component/admin/admin-welcomepage/admin-welcomepage.component';
import { AdminUpdatequestionComponent } from './component/admin/admin-updatequestion/admin-updatequestion.component';
import { AdminUpdateQuieesComponent } from './component/admin/admin-update-quiees/admin-update-quiees.component';
import { AdminViewcatogariesComponent } from './component/admin/admin-viewcatogaries/admin-viewcatogaries.component';
import { AdminViewquestionComponent } from './component/admin/admin-viewquestion/admin-viewquestion.component';
import { AdminViewquieesComponent } from './component/admin/admin-viewquiees/admin-viewquiees.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import { AuthInterceptor } from './services/auth.interceptor';
import { UserSidebarComponent } from './component/user/user-sidebar/user-sidebar.component';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard.component';
import { UserWelcomepageComponent } from './component/user/user-welcomepage/user-welcomepage.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { UpdateCategoryComponent } from './component/admin/update-category/update-category.component';
import { LoadQuizeComponent } from './component/user/load-quize/load-quize.component';
import { InstructionComponent } from './component/user/instruction/instruction.component';
import { StartExamComponent } from './component/user/start-exam/start-exam.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddCatogeriesComponent,
    AddQuestionsComponent,
    AddQuieesComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminWelcomepageComponent,
    AdminUpdatequestionComponent,
    AdminUpdateQuieesComponent,
    AdminViewcatogariesComponent,
    AdminViewquestionComponent,
    AdminViewquieesComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    UserWelcomepageComponent,
    UserProfileComponent,
    UpdateCategoryComponent,
    LoadQuizeComponent,
    InstructionComponent,
    StartExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS , useClass:AuthInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
