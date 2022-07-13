import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes , CanActivate} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes :Routes =[
  {path:'',component:LoginComponent },
  {path:'user', component: UserComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'register', component: RegisterComponent},
  {path:'logout', component: LogoutComponent},
  {path:'listusers', component: ListUsersComponent},
  {path:'create', component: CreateComponent},
  {path:'update/:id', component: UpdateComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},


]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    // NotFoundComponent
  ]
})
export class AppRoutingModule { }
