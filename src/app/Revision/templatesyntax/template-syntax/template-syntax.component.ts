import { Component, OnInit } from '@angular/core';
import { TwoWayDataBindingComponent } from '../two-way-data-binding/two-way-data-binding.component';
import { HighlightDirective } from '../../directives/hight-light.directive';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  standalone:true,
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css'],
  imports: [TwoWayDataBindingComponent, HighlightDirective, FormsModule, MatRadioModule]
})
export class TemplateSyntaxComponent implements OnInit {
  fontSizePx = 16;
  color = 'pink'
  constructor() { }

  ngOnInit() {
  }

}
