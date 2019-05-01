import { DatePipe } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private notificacionesService: NotificationsService, public datepipe: DatePipe) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const fechaInicio = Date.now();
    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      tap((resp: HttpResponse<any>) => {
        this.auditar(resp, fechaInicio);
        this.enviarMensaje(resp);
      })
    );
  }

  private auditar(resp: HttpResponse<any>, fechaInicio: number) {
    const duracion = Date.now() - fechaInicio;
    const mensaje =
      'La petición ha resultado en: ' + resp.statusText + ', después de ' + duracion / 1000 + 's -> ' + '(' + resp.url + ')';
    console.log(mensaje);
  }

  private enviarMensaje(resp: HttpResponse<any>) {
    const mensaje = 'Mensaje enviado el : ' + this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
    this.notificacionesService.dispatch(mensaje);
  }
}
