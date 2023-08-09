import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  dynamicFormGroup! : FormGroup
  

  get creatItem():FormGroup{
    return this.formBuilder.group({
      streetAddress: [],
      city:[],
      state:[]
    })
  }

  addEmail():void{

  }
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.dynamicFormGroup = this.formBuilder.group({
      Address:new FormArray([this.creatItem])
    })
  }

}
