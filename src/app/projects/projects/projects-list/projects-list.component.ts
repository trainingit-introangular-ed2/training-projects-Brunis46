import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../projects.interface';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Observable<Project[]>;

  constructor() {}

  ngOnInit() {}
}
