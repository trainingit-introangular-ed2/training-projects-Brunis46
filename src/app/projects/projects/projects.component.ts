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
  projectNameSearch: string;

  constructor(projectService: ProjectsService) {
    projectService.getProjectsAsync().subscribe(projects => (this.projects = projects));
  }

  ngOnInit() {}

  public searchProjectNameById(id: number): void {
    const project = this.projects.find(x => x.id === id);
    if (project != null) {
      this.projectNameSearch = project.name;
    } else {
      this.projectNameSearch = '';
    }
  }
}
