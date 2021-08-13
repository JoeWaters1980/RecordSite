// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAFpVMDjCWPoPvHvzrnN7i69WLQkRy275o",
//   authDomain: "the-record-box.firebaseapp.com",
//   projectId: "the-record-box",
//   storageBucket: "the-record-box.appspot.com",
//   messagingSenderId: "738588821839",
//   appId: "1:738588821839:web:27aff3880a7c42e7dbdd3a",
//   measurementId: "G-HEVD7CZ68F"
// };
export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAFpVMDjCWPoPvHvzrnN7i69WLQkRy275o",
    authDomain: "the-record-box.firebaseapp.com",
    projectId: "the-record-box",
    storageBucket: "the-record-box.appspot.com",
    messagingSenderId: "738588821839",
    appId: "1:738588821839:web:27aff3880a7c42e7dbdd3a",
    measurementId: "G-HEVD7CZ68F"
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
