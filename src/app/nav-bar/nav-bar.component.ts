import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  links = [
    { link: "signal",title:"Signal"},
    { link: "map",title:"Map"},
    { link: "direct",title:"Direct"},
    { link: "observable",title:"Observable"},
    { link: "translate",title:"Translator"},
    { link: "ngrx",title:"NgRx"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
