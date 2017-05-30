import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*shared modules*/
import { MultiSelectModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { DataTableModule} from 'primeng/primeng';
import { AppTableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MultiSelectModule,
    DataTableModule
  ],
  exports: [ AppTableComponent ]
})
export class AppSharedModule { }
