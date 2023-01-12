import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationComponent } from './authentification/features/authentification.component';

const devModules = environment.production ? [] : [
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: false, // Restrict extension to log-only mode
  }),
];

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
    ...devModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
