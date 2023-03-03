import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventsListComponent } from './events-list/events-list.component';



@NgModule({
  declarations: [
    EventsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
  ],
  exports: [
    EventsListComponent
  ]
})
export class UpmeetEventsModule { }
