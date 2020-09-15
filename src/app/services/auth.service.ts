
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
          private afAuth: AngularFireAuth
       ) { }

  register(user) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
  } 

  login(user) {
    return this.afAuth.signInWithEmailAndPassword
    (user.email, user.password);
  }

  signout() {
    return this.afAuth.signOut();
  }

  isAutenticated() {
    return this.afAuth.user;
  }
}
