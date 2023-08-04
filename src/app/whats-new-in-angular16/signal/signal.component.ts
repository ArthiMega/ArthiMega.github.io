import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit {

  fistName = "Arthi"
  lastName = "Mega"

  x = signal(10)
  y = signal(20)
  z = computed(()=>this.x() + this.y())
  



  changeName(){
    this.fistName = "Guna"
    console.log(this.fistName,this.lastName);
    console.log(this.z(),"before change");
    this.x.set(30)
    console.log(this.z(), "after change"); 
  }

  constructor() { }

  ngOnInit() {
  }

}
