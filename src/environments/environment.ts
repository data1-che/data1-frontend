// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Con sintaxis Commonjs (Si, estas usando Node)
const firebase = require("firebase/app");
require("firebase/firestore");

export const environment = {
  urlBackend: "http://localhost:8080",
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAChnnsrTcfyVZgeb9yjAd8qmgtLaw7LCk",
    authDomain: "che-proyecto-integrador.firebaseapp.com",
    projectId: "che-proyecto-integrador",
    storageBucket: "che-proyecto-integrador.appspot.com",
    messagingSenderId: "565057101421",
    appId: "1:565057101421:web:70d7cb1aadcad17f68a964",
    measurementId: "G-4622ZJDVCP",
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
