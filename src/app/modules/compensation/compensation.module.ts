import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompensationDetailComponent } from './compensation-detail/compensation-detail.component';
import {
  FilterService,
  PageService,
  ResizeService,
  SortService,
  TreeGridModule,
} from '@syncfusion/ej2-angular-treegrid';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [CompensationDetailComponent],
  imports: [CommonModule, BrowserModule, TreeGridModule, DropDownListModule],
  providers: [PageService, SortService, FilterService, ResizeService],
})
export class CompensationModule {}
