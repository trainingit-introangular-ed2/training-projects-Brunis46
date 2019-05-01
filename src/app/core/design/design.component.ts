import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styles: [
    `
      .sidenav-container {
        height: 100%;
      }

      .sidenav {
        width: 200px;
      }

      .sidenav .mat-toolbar {
        background: inherit;
      }

      .mat-toolbar.mat-primary {
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `
  ]
})
export class DesignComponent {
  title = environment.appName;
  public lastMessage: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver, private notificacionesService: NotificationsService) {
    this.refreshData();
  }

  private refreshData(): void {
    this.notificacionesService.select$().subscribe(msgs => {
      this.lastMessage = msgs.slice(msgs.length - 1, msgs.length);
      this.subscribeToData();
    });
  }

  private subscribeToData(): void {
    timer(1000).subscribe(() => this.refreshData());
  }
}
