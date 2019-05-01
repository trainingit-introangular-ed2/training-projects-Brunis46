import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../projects.interface';
import { ListDataSource } from './list-datasource';

@Component({
  selector: 'app-design-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit {
  public dataSource: ListDataSource;
  @Input() projects: Observable<Project[]>;

  public displayedColumns = ['name', 'ver'];

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.dataSource = new ListDataSource(this.projects);
  }
}
