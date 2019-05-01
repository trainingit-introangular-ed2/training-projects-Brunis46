import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-design-filter',
  templateUrl: './filter.component.html',
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
export class FilterComponent {
  @Output() public searchProjectName = new EventEmitter<number>();
  @Input() projectName: string;
  public projectFounded = true;

  public searchProjectForm = this.fb.group({
    id: [null, [Validators.required, Validators.min(1), Validators.max(99)]],
    name: [{ value: '', disabled: true }, []]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.searchProjectName.emit(this.searchProjectForm.get('id').value);
    // Como la búsqueda tiene algo de demora, esperamos 0.5s para obtener la respuesta
    setTimeout(() => {
      if (this.projectName.length > 0) {
        this.projectFounded = true;
        this.searchProjectForm.patchValue({ name: this.projectName });
      } else {
        this.projectFounded = false;
        this.searchProjectForm.patchValue({ name: '' });
      }
    }, 500);
    //
  }
}
