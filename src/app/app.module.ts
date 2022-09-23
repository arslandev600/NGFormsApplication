import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Dashboard/navbar/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MclassDirective } from './_directives/mclass.directive';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Dashboard/footer/footer.component';
import { SignupComponent } from './forms/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { EmailvalidatorDirective } from './_directives/email.validator';
import { RegisterComponent } from './forms/register/register.component';
import { SkillsComponent } from './forms/skills/skills.component';
import { NestedComponent } from './forms/nestedForm/nested.component';
import { EmployeeFormComponent } from './forms/nestedForm/employee_form/employee.form.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitlePipe } from './pipes/_custom/custom.pipe';
import { TemplateDrivenFormComponent } from './TemplateDrivenForms/Template-driven-form/template-driven-form.component';
import { MatchPasswordDirective } from './_directives/templateDrivenValidators/matchPassword.directive';
import { ValidateUserNameDirective } from './_directives/templateDrivenValidators/validateUserName.directive';
import { PasswordPatternDirective } from './_directives/templateDrivenValidators/passwordPattern.directive';
import { NumbersOnlyPatternDirective } from './_directives/templateDrivenValidators/numberOnly.directive';

export const routes:Routes =  [
  {path:'signup', component: SignupComponent},
  {path:'template/cutomValidations', component: TemplateDrivenFormComponent},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'skills', component: SkillsComponent},
  {path:'nested', component: NestedComponent},
  {path:'pipes', component: PipesComponent},
  {path:'nested/employee', component: EmployeeFormComponent},
  {path:'**', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactUsComponent,
    FooterComponent,
    MclassDirective,
    SignupComponent,
    RegisterComponent,
    SkillsComponent,
    NestedComponent,
    EmployeeFormComponent,
    PipesComponent,
    TemplateDrivenFormComponent,
    TitlePipe,
    // =============Directives
    MatchPasswordDirective,ValidateUserNameDirective,PasswordPatternDirective,NumbersOnlyPatternDirective,





  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  
    {  
      provide: NG_VALIDATORS,  
      useClass: EmailvalidatorDirective,  
      multi: true  
    },
    TitlePipe  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
