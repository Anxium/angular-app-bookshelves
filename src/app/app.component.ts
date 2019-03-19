import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyA1Y-oNteG-vpsUqzEIsHsgNvHr06Dj2Q0',
      authDomain: 'app-angular-demo.firebaseapp.com',
      databaseURL: 'https://app-angular-demo.firebaseio.com',
      projectId: 'app-angular-demo',
      storageBucket: 'app-angular-demo.appspot.com',
      messagingSenderId: '766984752465'
    };
    firebase.initializeApp(config);
  }
}
