import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Project } from '../../projects/projects.interface';

@Component({
  selector: 'app-design-project-form',
  templateUrl: './project-form.component.html',
  styles: [
    `
      .full-width {
        width: 100%;
      }

      .shipping-card {
        min-width: 120px;
        margin: 20px auto;
      }

      .mat-radio-button {
        display: block;
        margin: 5px 0;
      }

      .row {
        display: flex;
        flex-direction: row;
      }

      .col {
        flex: 1;
        margin-right: 20px;
      }

      .col:last-child {
        margin-right: 0;
      }
    `
  ]
})
export class ProjectFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  @Input() public project: Project;

  projectForm = this.fb.group({
    id: [{ value: '', disabled: true }],
    name: [{ value: '', disabled: true }]
  });
  ngOnInit(): void {
    setTimeout(() => {
      this.projectForm.patchValue({ id: this.project.id, name: this.project.name });
    }, 300);
  }
}
