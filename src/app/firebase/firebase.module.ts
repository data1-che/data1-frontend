import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
    /* CommonModule */
  ],
  exports: [ AngularFireModule, AngularFirestoreModule, AngularFireAuthModule, AngularFireStorageModule],
  providers: [ AngularFireAuthGuard ]
})
export class FirebaseModule { }
