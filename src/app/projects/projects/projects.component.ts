import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { Project } from './projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: []
})
export class ProjectsComponent implements OnInit {
  projects: Observable<Project[]>;
  projectNameSearch: string;

  constructor(projectService: ProjectsService) {
    this.projects = projectService.getRemoteProjects();
  }

  ngOnInit() {}

  public searchProjectNameById(id: number): void {
    this.projects.subscribe(res => {
      if (res != null && res !== undefined) {
        const project: Project = res.find(x => x.id === id);
        this.projectNameSearch = project !== undefined ? project.name : '';
      } else {
        this.projectNameSearch = '';
      }
    });
  }
}
