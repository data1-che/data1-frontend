import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  getUser(): Observable<any> {
    return this.afAuth.user;
  }

  async loginGoogle() {
    return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async loginUserPassword(email:string, password:string): Promise<any> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.signOut();
  }
}
