import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects/projects.interface';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: []
})
export class NewProjectComponent implements OnInit {
  private MESSAGE_SUCCESS = 'Proyecto añadido con éxito!';
  private MESSAGE_FAIL = 'Ha ocurrido un error al guardar el proyecto.';
  public message: string;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {}

  public saveProject(nameP: string) {
    const new_project: Project = {
      id: Math.floor(Math.random() * 100 + 1),
      name: nameP
    };

    this.projectsService.addRemoteProject(new_project);
    this.message = this.MESSAGE_SUCCESS;
  }
}
