import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  links = [
    { link: "signal", title: "Signal" },
    { link: "map", title: "Map" },
    { link: "direct", title: "Direct" },
    { link: "observable", title: "Observable" },
    { link: "translate", title: "Translator" },
    { link: "ngrx", title: "NgRx" },
    { link: "dynamic-form", title: "Dynamic Forms" },
    { link: "to-do", title: "Todo List" },
    { link: "firebase-image", title: "Firebase Image Upload"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
