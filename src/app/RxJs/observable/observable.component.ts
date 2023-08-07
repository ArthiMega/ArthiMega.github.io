import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {


  items: string[]=[]
  addItem(text:string){
    var node = document.createElement("li")
    var textNode = document.createTextNode(text)
    node.appendChild(textNode)
    document.getElementById("output")?.appendChild(node)
  }
  pushItem(item:any){
    this.items.push(item)
    console.log(this.items);
  }

  constructor() { }


  ngOnInit() {
    var observable = Observable.create((observer:any) => {
      observer.next("Hi")
      observer.next("how can I help you today")
      setInterval(()=>{
        observer.next("I love you Pattu")
      },2000)
      observer.complete()
    })
    var observer = observable.subscribe(
      (next:any)=> this.addItem(next),
      (err:any) => this.addItem(err),
      ()=>this.addItem("Completed")
    )
     
    var observer2 = observable.subscribe(
      (next:any) =>this.addItem(next)
    )
    setTimeout(()=>{
      observer.unsubscribe();
    }, 6001)
  }

}
