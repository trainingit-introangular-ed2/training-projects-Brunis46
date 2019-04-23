import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
})
export class FilterProjectsFormComponent implements OnInit {
  @Input() projectName: string;
  @Output() public searchProjectName = new EventEmitter<number>();
  public id: number;

  constructor() {}

  ngOnInit() {}
}
