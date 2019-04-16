import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Project } from './projects/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {}

  public getProjects(): Project[] {
    return environment.projects;
  }

  public getNumProjects(): number {
    return environment.projects.length;
  }

  public findProject(id: number): Project {
    return environment.projects.find(x => x.id == id);
  }

  public addProject(project: Project) {
    environment.projects.push(project);
  }
}
