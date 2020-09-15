
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  googleProvider= new firebase.auth.GoogleAuthProvider();
  constructor(
        private authService: AuthService,
        private flashMessage: FlashMessagesService,
        private router: Router  
        ) { }

  ngOnInit() {


 
  }


  onSignInWithGooglePoUP(){
    firebase.auth().signInWithPopup(this.googleProvider)
      .then(result => {
        console.log(result.user);
      
      })
      .catch(error => {
        console.error(error);
     
      });
    }


 
  
  

  signIn() {
    this.authService.login(this.user)
    .then(res => {
      this.flashMessage.show("You'are Logged successfully!", {
        cssClass: 'alert-success',
        timeout: 2000
      })
       this.router.navigate(['/chats'])
    })
    .catch(err => {
     this.flashMessage.show(err.message, {
       cssClass: 'alert-warning',
       timeout: 8000
     })
    });
  }

}
