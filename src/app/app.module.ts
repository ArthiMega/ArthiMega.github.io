import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DirectionRendererComponent } from './direction-renderer/direction-renderer.component';
import { SignalComponent } from './whats-new-in-angular16/signal/signal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ObservableComponent } from './RxJs/observable/observable.component';
import { StoreModule } from '@ngrx/store';
import { MatInputModule } from '@angular/material/input';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslatorComponent } from './translator/translator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { taskReducer } from './state/todo.reducer';
import { collectionReducer } from './state/collection.reducer';
import { TaskCollectionComponent } from './task-collection/task-collection.component';
import { NgRxComponent } from './ng-rx/ng-rx.component';
import { TaskComponent } from './to-do/task/task.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { MatTreeModule} from '@angular/material/tree';
import { ServiceWorkerModule } from '@angular/service-worker';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DirectionRendererComponent,
    SignalComponent,
    NavBarComponent,
    ObservableComponent,
    TranslatorComponent,
    TaskCollectionComponent,
    NgRxComponent,
    TaskComponent,
    DynamicFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTreeModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({ task: taskReducer, collection: collectionReducer }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
