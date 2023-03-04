import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'; 
import { collection, doc, docData, Firestore, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from "@angular/fire/storage";
/* import { FirestoreModule } from "@angular/fire/firestore";  */
/* import { AngularFirestoreCollection } from ''; */

@Component({
  selector: 'app-fires',
  templateUrl: './fires.component.html',
  styleUrls: ['./fires.component.css']
})

export class FiresComponent implements OnInit {
  ngOnInit(): void {  }
  constructor(public firestore: Firestore) { }
  
   /* const aboutRef = firebase.firestore().collection("Profile").doc("kpVz92sfb2soO61MXNJv"); */
    ref = doc(this.firestore, "Profile", "about-me");
    cc=docData(this.ref);
    
   
   /* aboutRef.get().then((doc) => {
     if (!doc.exists) return;
     else console.log("Document data:", doc.data()); */
     // Document data: { titulo: 'El gran Gatsby' }
     /* }); */
     
     

}
