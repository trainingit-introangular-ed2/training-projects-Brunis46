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

    // Buscamos por Id en remoto
    projectsService.getRemoteProjects().subscribe(res => {
      if (res != null && res !== undefined) {
        const project: Project = res.find(x => x.id == id);
        this.project_selected = project !== undefined ? project : { id: -1, name: 'NO SE ENCONTRÓ EL PROYECTO' };
      } else {
        this.project_selected = { id: -1, name: 'NO SE ENCONTRÓ EL PROYECTO' };
      }
    });
  }

  ngOnInit() {}
}
