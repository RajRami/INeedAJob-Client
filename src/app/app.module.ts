import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployerComponent } from './components/employer/employer.component';
//our service which talks to the server API
import { EmployerService } from './services/employer.service';
//HttpClientModule to make http request from server api
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployerService],
  bootstrap: [EmployerComponent]
})
export class AppModule { }
