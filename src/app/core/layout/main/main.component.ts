import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  EN_DESARROLLO: string;

  constructor() {}

  ngOnInit() {
    this.EN_DESARROLLO = 'Sección en desarrollo, disponible próximamente..';
  }
}
