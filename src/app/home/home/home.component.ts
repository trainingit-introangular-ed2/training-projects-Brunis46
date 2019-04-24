import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/projects/projects.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  projects_num: Number;

  constructor(projectsService: ProjectsService) {
    let projects: Project[];

    projectsService.getRemoteProjects().subscribe(projs => {
      projects = projs;
      this.projects_num = projects.length;
    });
  }

  ngOnInit() {}
}
