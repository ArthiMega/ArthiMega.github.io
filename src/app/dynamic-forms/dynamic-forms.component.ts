import { Component, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/task.state';
import * as counterAction from '../state/todo.actions';
import { getLyrics } from '../state/counter.selector';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  dynamicFormGroup! : FormGroup
  value = signal(0)
  lyrics!:string
  lyrics$!:Observable<string>;

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
    private formBuilder: FormBuilder,
    private store: Store<{counter:CounterState}>
  ) { }

  ngOnInit() {
    this.dynamicFormGroup = this.formBuilder.group({
      Address:new FormArray([this.creatItem])
    })
    this.lyrics$ = this.store.select(getLyrics)
    //-------------------------------() or()-------------------------------------
    this.store.select(getLyrics).subscribe(data=>{
      this.lyrics = data
      console.log("Lyrics subscriber");
    })
  }
  onAdd(num:any){
    this.value.set(num)
    console.log(this.value());
    this.store.dispatch(counterAction.costonIncrement({count:+this.value()}))
  }
  onChangeLyrics(){
    this.store.dispatch(counterAction.editeText())
  }
}
