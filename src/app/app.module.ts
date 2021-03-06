import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MultiSelectModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import { CarService } from './Services/cars.service';

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
    MultiSelectModule,
    DataTableModule,
    GalleriaModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
