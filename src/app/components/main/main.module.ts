import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppSharedModule } from '../shared/shared.module';
import { AppMainComponent } from './main.component';

@NgModule({
  declarations: [
   AppMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppSharedModule
  ],
  exports: [AppMainComponent]
})
export class AppMainModule { }
