import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit {

  fistName = "Arthi"
  lastName = "Mega"

  changeName(){
    this.fistName = "Guna"
    console.log(this.fistName,this.lastName);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
