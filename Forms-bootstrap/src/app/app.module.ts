import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestTdfComponent } from './test-tdf/test-tdf.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveForms1Component } from './reactive-forms1/reactive-forms1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestTdfComponent,
    ReactiveFormsComponent,
    ReactiveForms1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
