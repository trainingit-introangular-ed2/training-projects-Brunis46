import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { Project } from '../projects.interface';
import { ListDataSource } from './list-datasource';

@Component({
  selector: 'app-design-list',
  templateUrl: './list.component.html',
  styles: [
    `
      .full-width-table {
        width: 100%;
      }
    `
  ]
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListDataSource;
  @Input() projects: Observable<Project[]>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new ListDataSource(this.paginator, this.sort, this.projects);
  }
}
