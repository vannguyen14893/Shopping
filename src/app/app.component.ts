import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ErrorState } from './error/global-error-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  error$: Observable<any>;
  constructor(private router: Router, private store: Store<ErrorState>, private notifierService: NotifierService) {
    // this.error$ = store.pipe(select('error'));
    // this.error$.subscribe(error => {
    //   this.notifierService.notify('error', error);
    // });
  }
  ngOnInit() {

  }
}
