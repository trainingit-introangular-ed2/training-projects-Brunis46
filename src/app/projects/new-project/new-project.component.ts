import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: []
})
export class NewProjectComponent implements OnInit {
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {}

  public saveProject(nameP: string) {
    const new_project = {
      id: this.projectsService.getNumProjects() + 1,
      name: nameP
    };

    this.projectsService.addProject(new_project);
  }
}
