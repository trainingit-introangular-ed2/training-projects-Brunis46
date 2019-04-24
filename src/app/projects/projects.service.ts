import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Project } from './projects/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  public getRemoteProjects(): Observable<Project[]> {
    return this.getProjectsApi();
  }

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

  public addRemoteProject(project: Project) {
    this.httpClient.post(environment.urlApiProjects, project).subscribe();
  }

  private projectDataToDTO(projectsData: any): Project[] {
    if (projectsData != null) {
      return Object.keys(projectsData).map(key => ({
        id: projectsData[key].id,
        name: projectsData[key].name
      }));
    } else {
      return [];
    }
  }

  private getProjectsApi(): Observable<Project[]> {
    const projects$ = this.httpClient.get(environment.urlApiProjects);
    return projects$.pipe(map(this.projectDataToDTO));
  }
}
