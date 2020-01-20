import { NotifierService } from 'angular-notifier';
import { User } from './../../../model/user.class';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from '../user-state/user-action';
import { SortFilter } from 'src/app/model/sortFilter.class';
import { Update } from '@ngrx/entity';
@Injectable()
export class UserEffect {
  id: number;
  constructor(private userService: UserService, private actions$: Actions, private notification: NotifierService) {

  }
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUsers>(
      userActions.UserActionType.LOAD_USERS
    ), map((action: userActions.LoadUsers) => action.payload),
    mergeMap((sort: SortFilter) =>
      this.userService.getUser(sort).pipe(
        map(
          (users: User[]) =>
            new userActions.LoadUsersSuccess(users)
        ),
        catchError(err => of(new userActions.LoadUsersFail(err)))
      )
    )
  );
  @Effect()
  loadUserById$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.GetUser>(
      userActions.UserActionType.GET_USER_BY_ID
    ), map((action: userActions.GetUser) => action.payload),
    mergeMap((id: number) =>
      this.userService.getUserById(id).pipe(
        map(
          (user: User) =>
            new userActions.GetUserSuccess(user)
        ),
        catchError(err => of(new userActions.GetUsersFail(err)))
      )
    )
  );
  @Effect()
  AddUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.AddUser>(
      userActions.UserActionType.ADD_USER
    ),
    mergeMap((action: userActions.AddUser) =>
      this.userService.addUser(action.payload).pipe(
        map(
          (user: User) =>
            new userActions.AddUserSuccess(user),
          this.notification.notify('success', 'Add User Success')
        ),
        catchError(err => of(new userActions.AddUserUserFail(err)))
      )
    )
  );
  @Effect()
  updateUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.UpdateUser>(
      userActions.UserActionType.UPDATE_USER
    ),
    map((action: userActions.UpdateUser) => action.payload),
    mergeMap((user: User) =>
      this.userService.updateUser(user).pipe(
        map(
          (updateUser: User) =>
            new userActions.UpdateUserSuccess({
              id: updateUser.id,
              changes: updateUser
            }),
          this.notification.notify('success', 'Update User Success')
        ),
        catchError(err => of(new userActions.UpdateUserFail(err)))
      )
    )
  );

  @Effect()
  DeleteUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.DeleteUser>(
      userActions.UserActionType.DELETE_USER
    ),
    mergeMap((action: userActions.DeleteUser) =>
      this.userService.deleteUser(action.payload).pipe(
        map(
          (ids: any) =>
            new userActions.DeleteUserSuccess(ids),
          this.notification.notify('success', 'Delete User Success')
        ),
        catchError(err => of(new userActions.DeleteUserFail(err)))
      )
    )
  );
  @Effect()
  UpdateStatusUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.UpdateStatusUser>(
      userActions.UserActionType.UPDATE_USER_STATUS
    ),
    mergeMap((action: userActions.UpdateStatusUser) =>
      this.userService.updateStatusUser(action.payload).pipe(
        map(
          (users: User[]) =>
            new userActions.UpdateStatusUserSuccess(users),
          this.notification.notify('success', 'Update Status User Success')
        ),
        catchError(err => of(new userActions.UpdateStatusUserFail(err)))
      )
    )
  );
  @Effect()
  countUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.CountUsers>(
      userActions.UserActionType.GET_COUNT_USER
    ), map((action: userActions.CountUsers) => action.payload),
    mergeMap((sort: SortFilter) =>
      this.userService.count(sort).pipe(
        map(
          (count: User) =>
            new userActions.CountUsersSuccess(count)
        ),
        catchError(err => of(new userActions.CountUsersFail(err)))
      )
    )
  );
}
