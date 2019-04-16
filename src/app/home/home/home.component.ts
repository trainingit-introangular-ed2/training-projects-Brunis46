import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  projects_num: Number;

  constructor(projectsService: ProjectsService) {
    this.projects_num = projectsService.getNumProjects();
  }

  ngOnInit() {}
}
