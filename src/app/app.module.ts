import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppMainModule } from './components/main/main.module';
import { AppSharedModule } from './components/shared/shared.module';
import { CarService } from './services/cars.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMainModule,
    AppSharedModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
