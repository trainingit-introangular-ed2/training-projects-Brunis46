import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Output() public addProject = new EventEmitter<string>();
  public name: string;
  @Input() public message: string;

  constructor() {}

  ngOnInit() {}

  public clearNewProjectMessage() {
    this.message = '';
  }
}
