import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
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
import { counterReducer, taskReducer, todoreducer } from './state/todo.reducer';
import { collectionReducer } from './state/collection.reducer';
import { TaskCollectionComponent } from './task-collection/task-collection.component';
import { NgRxComponent } from './ng-rx/ng-rx.component';
import { TaskComponent } from './to-do/task/task.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { MatTreeModule} from '@angular/material/tree';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { appReducer } from './state/app.state';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {MatCardModule} from '@angular/material/card';
import { EditTaskComponent } from './edit-task/edit-task.component';
// import { AngularFireStorageModule} from "@angular/fire";
import { AngularFireModule } from '@angular/fire/compat';
// import {AngularFileStorageModule} from '@angular/fire/compat/firestore'
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { FirebaseImageUploadComponent } from './firebase-image-upload/firebase-image-upload.component';
import { TemplateSyntaxComponent } from './Revision/templatesyntax/template-syntax/template-syntax.component';
initializeApp(environment.firebaseConfig);

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
    DynamicFormsComponent,
    ToDoListComponent,
    AddTaskComponent,
      EditTaskComponent,
      FirebaseImageUploadComponent,
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
    MatTableModule,
    MatCardModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
