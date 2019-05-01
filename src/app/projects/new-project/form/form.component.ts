import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-design-new-project',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() public addProject = new EventEmitter<string>();
  public projectAdded = false;
  newProject = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(1)]]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.addProject.emit(this.newProject.get('name').value);
    this.projectAdded = true;
  }
}
