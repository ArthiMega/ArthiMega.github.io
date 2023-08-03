import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



// ====================="using standalone api "=====================
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideStore, provideState } from '@ngrx/store';

// import { AppComponent } from './app.component';
// import { scoreboardReducer } from './reducers/scoreboard.reducer';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideStore(),
//     provideState({ name: 'game', reducer: scoreboardReducer })
//   ],
// });