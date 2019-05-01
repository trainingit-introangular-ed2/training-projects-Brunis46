import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificaciones = [];
  private notificaciones$ = new BehaviorSubject<any[]>([]);

  constructor() {}
  public select$ = () => this.notificaciones$.asObservable();

  public dispatch(notificacion: any) {
    this.notificaciones.push(notificacion);
    this.notificaciones$.next([...this.notificaciones]);
  }
}
