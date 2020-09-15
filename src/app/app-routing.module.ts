import { ChatsComponent } from './componnets/chats/chats.component';
import { LoginComponent } from './componnets/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './componnets/register/register.component';



const routes: Routes = [

  { path: "chats", component: ChatsComponent },
  
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
