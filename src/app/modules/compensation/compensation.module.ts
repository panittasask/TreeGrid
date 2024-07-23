import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompensationDetailComponent } from './compensation-detail/compensation-detail.component';
import {
  FilterService,
  PageService,
  SortService,
  TreeGridModule,
} from '@syncfusion/ej2-angular-treegrid';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CompensationDetailComponent],
  imports: [CommonModule, BrowserModule, TreeGridModule],
  providers: [PageService, SortService, FilterService],
})
export class CompensationModule {}
