import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public title = '© 2019 ' + environment.appName + ' All Rights Reserved';
  @Input() lastMessage: string;

  constructor() {}

  ngOnInit() {}
}
