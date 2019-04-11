import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../projects/projects.interface';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  project_selected: Project;

  constructor(activateRoute: ActivatedRoute) {
    // Cogemos id de la URL
    const id = activateRoute.snapshot.params['id'];

    console.log(id);

    // Buscamos por Id
    this.project_selected = environment.projects.find(x => x.id == id);
  }

  ngOnInit() {}
}
