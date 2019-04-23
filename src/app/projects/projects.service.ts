import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Project } from './projects/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects$: Observable<Project[]> = this.getProjectsApi();

  constructor(private httpClient: HttpClient) {}

  public getProjectsAsync(): Observable<Project[]> {
    return this.projects$;
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

  private projectDataToDTO(projectsData): Project[] {
    return Object.keys(projectsData).map(key => ({
      id: projectsData[key].id,
      name: projectsData[key].name
    }));
  }

  private getProjectsApi(): Observable<Project[]> {
    const projects$ = this.httpClient.get(environment.urlApiProjects);
    return projects$.pipe(
      tap(d => console.log('look = ' + d[0].id)),
      map(this.projectDataToDTO),
      tap(d => console.log('look = ' + d[0]))
    );
  }
}
