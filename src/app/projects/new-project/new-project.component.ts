import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public name: string;

  constructor() {}

  ngOnInit() {}

  public saveProject() {
    console.log(name);
    const new_project = {
      id: environment.projects.length + 1,
      name: this.name
    };
    console.log(new_project.id);
    console.log(new_project.name);
    environment.projects.push(new_project);
  }
}
