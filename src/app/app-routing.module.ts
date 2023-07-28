import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SignalComponent } from './whats-new-in-angular16/signal/signal.component';
import { DirectionRendererComponent } from './direction-renderer/direction-renderer.component';
import { ObservableComponent } from './RxJs/observable/observable.component';

const routes: Routes = [
  {path:"map", component:MapComponent},
  {path:"signal", component:SignalComponent},
  {path:"direct", component: DirectionRendererComponent},
  {path:"observable", component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
