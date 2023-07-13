// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBzR_2PiqMJ8OsCH62AV4VXcex7fw7pF4c",
        authDomain: "bikes24-b8da9.firebaseapp.com",
        databaseURL: "mongodb+srv://bikestwentyfour:bikes@bikes24.bv9vnoy.mongodb.net/bikestwentyfour",
        projectId: "bikes24-b8da9",
        storageBucket: "bikes24-b8da9.appspot.com",
        messagingSenderId: "432465063061",
        appId: "1:432465063061:web:f6f580b545b92760c83f9c",
        measurementId: "G-3RW433LPS7",
        vapidKey:"BKuQ0mkCc2SKUBwaOkwsHuQNMT8RbrTBjRLc7Ee9j5viiTieremYL-C3ta6DVkuM6JphzfxrcAfQ6-9ZJvIvd3E"
      },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
export const baseURL = 'http://localhost:3000/api/';
export const imageUrl = 'http://localhost:3000/images/';