import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { Observable } from 'rxjs';
/* 
 import  User  from 'firebase';
 import {first} from 'rxjs/operators' */

@Injectable({
  providedIn:'root'
})
export class AuthService {

  public userData$: Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth) {
    this.userData$=afAuth.authState; 
  }

  async login(email:string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      return result;
    }
    catch(error){
      console.log(error);
    }
  }

  async register(email:string, password:string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      return result;
    }
    catch(error){
      console.log(error);
    }
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error);
    }
  }

  async loginGoogle(){
    try{
      return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    catch(error){
      console.log(error);
    }
  }
  
  
}
