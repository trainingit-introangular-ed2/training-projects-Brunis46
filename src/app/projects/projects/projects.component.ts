import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from './projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {}

  ngOnInit() {
    this.projects = environment.projects;
  }
}
