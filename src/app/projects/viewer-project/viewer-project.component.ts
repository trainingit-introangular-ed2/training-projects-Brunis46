import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects/projects.interface';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: []
})
export class ViewerProjectComponent implements OnInit {
  public project_selected: Project;

  constructor(activateRoute: ActivatedRoute, projectsService: ProjectsService) {
    // Cogemos id de la URL
    const id = activateRoute.snapshot.params['id'];

    // Buscamos por Id
    this.project_selected = projectsService.findProject(id);
  }

  ngOnInit() {}
}
