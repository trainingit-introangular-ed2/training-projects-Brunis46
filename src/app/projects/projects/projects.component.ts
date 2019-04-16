import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from './projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: []
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(projectService: ProjectsService) {
    this.projects = projectService.getProjects();
  }

  ngOnInit() {}
}
