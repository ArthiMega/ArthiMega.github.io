import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer
  title = 'bikes24-b8da9';

  // Reference to the side drawer

  // Function to toggle the drawer
  toggleDrawer() {
    console.log("drawer");
    
    this.drawer.toggle();
  }
}
