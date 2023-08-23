import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SignalComponent } from './whats-new-in-angular16/signal/signal.component';
import { DirectionRendererComponent } from './direction-renderer/direction-renderer.component';
import { ObservableComponent } from './RxJs/observable/observable.component';
import { TranslatorComponent } from './translator/translator.component';
import { NgRxComponent } from './ng-rx/ng-rx.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {path:"map", component:MapComponent},
  {path:"signal", component:SignalComponent},
  {path:"direct", component: DirectionRendererComponent},
  {path:"observable", component:ObservableComponent},
  {path:"translate", component:TranslatorComponent},
  {path:'ngrx', component: NgRxComponent},
  {path:"dynamic-form", component:DynamicFormsComponent},
  {path:"to-do", component:ToDoListComponent, children:[{path:'add-task', component: AddTaskComponent}, {path:'edit-task', component:EditTaskComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
