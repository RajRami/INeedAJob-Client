import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployerComponent } from './components/employer/employer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmployerComponent]
})
export class AppModule { }
