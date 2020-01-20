import { Role } from './../../../../model/role.class';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as roleActions from '../role-state/role-action';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { SettingService } from '../../setting.service';
@Injectable()
export class RoleEffect {
  constructor(
    private actions$: Actions,
    private settingService: SettingService) {

  }

  @Effect()
  loadRoles$: Observable<Action> = this.actions$.pipe(
    ofType<roleActions.LoadRoles>(
      roleActions.RoleActionType.LOAD_ROLES
    ),
    mergeMap((action: roleActions.LoadRoles) =>
      this.settingService.getAllRole().pipe(
        map(
          (roles: Role[]) =>
            new roleActions.LoadRoleSuccess(roles)
        ),
        catchError(err => of(new roleActions.LoadRoleFail(err)))
      )
    )
  );
  @Effect()
  AddRole$: Observable<Action> = this.actions$.pipe(
    ofType<roleActions.AddRole>(
      roleActions.RoleActionType.ADD_ROLE
    ),
    mergeMap((action: roleActions.AddRole) =>
      this.settingService.addRole(action.payload).pipe(
        map(
          (role: Role) =>
            new roleActions.AddRoleSuccess(role)
        ),
        catchError(err => of(new roleActions.AddRoleFail(err)))
      )
    )
  );
  @Effect()
  GetRoleById$: Observable<Action> = this.actions$.pipe(
    ofType<roleActions.GetRole>(
      roleActions.RoleActionType.GET_ROLE_BY_ID
    ),
    mergeMap((action: roleActions.GetRole) =>
      this.settingService.getRoleById(action.payload).pipe(
        map(
          (role: Role) =>
            new roleActions.GetRoleSuccess(role)
        ),
        catchError(err => of(new roleActions.GetRoleFail(err)))
      )
    )
  );

@Effect()
DeleteRole$: Observable < Action > = this.actions$.pipe(
  ofType<roleActions.DeleteRole>(
    roleActions.RoleActionType.DELETE_ROLE
  ),
  mergeMap((action: roleActions.DeleteRole) =>
    this.settingService.deleteRole(action.payload).pipe(
      map(
        (id: number) =>
          new roleActions.DeleteRoleSuccess(id)
      ),
      catchError(err => of(new roleActions.DeleteRoleFail(err)))
    )
  )
);
@Effect()
editRole$: Observable < Action > = this.actions$.pipe(
  ofType<roleActions.EditRole>(
    roleActions.RoleActionType.EDIT_ROLE
  ),
  map((action: roleActions.EditRole) => action.payload),
  mergeMap((role: Role) =>
    this.settingService.editRole(role).pipe(
      map(
        (updateRole: Role) =>
          new roleActions.EditRoleSuccess({
            id: updateRole.id,
            changes: updateRole
          })
      ),
      catchError(err => of(new roleActions.EditRoleFail(err)))
    )
  )
);
}
