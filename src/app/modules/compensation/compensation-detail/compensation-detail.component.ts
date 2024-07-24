import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  Freeze,
  PageSettingsModel,
  SortSettingsModel,
  TreeGrid,
  TreeVirtual,
  VirtualScroll,
} from '@syncfusion/ej2-angular-treegrid';
// import { data } from '../models/data';
import { sampleData } from '../models/dataGridText';
import { allData } from '../models/allData';
TreeGrid.Inject(Freeze);

@Component({
  selector: 'app-compensation-detail',
  templateUrl: './compensation-detail.component.html',
  styleUrl: './compensation-detail.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CompensationDetailComponent {
  @ViewChild('gridTree', { static: true })
  public gridtree: any;
  public data?: Object[];
  public filterSettings = { type: 'Excel' };
  public sortSettings?: SortSettingsModel;
  public pageSettings?: PageSettingsModel;
  public datamock: string[] = ['A+', 'A', 'B', 'C', 'D'];
  public wrapSettings: any = { wrapMode: 'Header' };
  public columnFilterSettings?: Object;
  public template?: string;
  ngOnInit(): void {
    this.data = allData;
    this.sortSettings = {
      columns: [
        { field: 'GradingGroupName', direction: 'Ascending' },
        { field: 'SubGradingGroupName', direction: 'Descending' },
      ],
    };
    this.pageSettings = { pageSize: 50 };
    this.columnFilterSettings = {
      filterItemTemplate: this.template,
    };
    console.log('gridtree', this.gridtree);
    this.gridtree.enableVirtualization = true;
  }
  special(id: any) {
    console.log('id', id);
  }
  queryCellInfo(args: any) {
    if (args.data.level > 0) {
      if (args.cell.querySelector('.e-treecolumn-container') != undefined) {
        var row = args.cell.querySelector('.e-treecolumn-container');

        var spanNew = document.createElement('span');
        spanNew.style.width = 20 * args.data.level + 'px';
        spanNew.className = 'newSpan';

        row.appendChild(spanNew);

        row.insertBefore(spanNew, row.children[0]);
      }
    }
  }
}
