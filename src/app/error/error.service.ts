import { Appstate } from './../layout/setting/role/role-state/role-reducer';
import { NotifierService } from 'angular-notifier';

import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AddGlobalError } from './global-error-action';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<Appstate>, private notifier: NotifierService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.store.dispatch(new AddGlobalError(error));
          return throwError(error);
        })
      );
  }
}
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   return next.handle(request)
  //     .pipe(
  //       retry(1),
  //       catchError((error: HttpErrorResponse) => {
  //         let errorMessage = '';
  //         if (error.error instanceof ErrorEvent) {
  //           errorMessage = `Error: ${error.error.message}`;
  //         } else {
  //           errorMessage = `Error :${error.status} `;
  //         }
          // switch (error.status) {
          //   case 500:
          //     this.notifier.notify('error', error.status + ': ' + 'Server Error');
          //     break;
          //   case 403:
          //     this.notifier.notify('error', error.status + ' : ' +  error.error );
          //     break;
          //   case 400:
          //     this.notifier.notify('error', error.status + ' : ' + error.error.statusCode);
          //     break;
          //   default:
          //     this.notifier.notify('error', error.status + ' : ' + 'Error');
          //     break;
          // }
//           return throwError(errorMessage);
//         })
//       );
//   }
// }
