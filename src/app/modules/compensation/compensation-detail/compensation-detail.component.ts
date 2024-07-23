import { Component } from '@angular/core';
import {
  PageSettingsModel,
  SortSettingsModel,
} from '@syncfusion/ej2-angular-treegrid';
import { data } from '../models/data';
import { sampleData } from '../models/dataGridText';

@Component({
  selector: 'app-compensation-detail',
  templateUrl: './compensation-detail.component.html',
  styleUrl: './compensation-detail.component.scss',
})
export class CompensationDetailComponent {
  public data?: Object[];
  public sortSettings?: SortSettingsModel;
  public pageSettings?: PageSettingsModel;

  ngOnInit(): void {
    this.data = sampleData;
    this.sortSettings = {
      columns: [
        { field: 'GradingGroupName', direction: 'Ascending' },
        { field: 'SubGradingGroupName', direction: 'Descending' },
      ],
    };
    this.pageSettings = { pageSize: 6 };
  }
}
