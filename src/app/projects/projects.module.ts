import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { NewProjectFormComponent } from './new-project/new-project-form/new-project-form.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { ListComponent } from './projects/list/list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './viewer-project/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    ViewerProjectFormComponent,
    FilterProjectsFormComponent,
    ProjectsListComponent,
    ListComponent,
    NewProjectFormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ProjectsModule {}
