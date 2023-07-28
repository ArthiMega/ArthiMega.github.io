import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var observable = Observable.create((observer:any) => {
      observer.next("A")
      observer.next("B")
    })
    observable.subscribe(
      (next:any)=> console.log(next),
      (err:Error) => console.log(err)
    )
  }

}
