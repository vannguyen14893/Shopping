
import { Role } from './../../../../model/role.class';
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum RoleActionType {
  LOAD_ROLES = 'LOAD_ROLES',
  LOAD_ROLES_SUCCESS = 'LOAD_ROLES_SUCCESS',
  LOAD_ROLES_FAIL = 'LOAD_ROLES_FAIL',
  ADD_ROLE = 'ADD_ROLE',
  ADD_ROLE_SUCCESS = 'ADD_ROLE_SUCCESS',
  ADD_ROLE_FAIL = 'ADD_ROLE_FAIL',
  GET_ROLE_BY_ID = 'GET_ROLE_BY_ID',
  GET_ROLE_BY_ID_SUCCESS = 'GET_ROLE_BY_ID_SUCCESS',
  GET_ROLE_BY_ID_FAIL = 'GET_ROLE_BY_ID_FAIL',
  EDIT_ROLE = 'EDIT_ROLE',
  EDIT_ROLE_SUCCESS = 'EDIT_ROLE_SUCCESS',
  EDIT_ROLE_FAIL = 'EDIT_ROLE_FAIL',
  DELETE_ROLE_FAIL = 'DELETE_ROLE_FAIL',
  DELETE_ROLE = 'DELETE_ROLE',
  DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS',
}
export class LoadRoles implements Action {
  readonly type = RoleActionType.LOAD_ROLES;
}
export class LoadRoleSuccess implements Action {
  readonly type = RoleActionType.LOAD_ROLES_SUCCESS;
  constructor(public payload: Role[]) { }
}
export class LoadRoleFail implements Action {
  readonly type = RoleActionType.LOAD_ROLES_FAIL;
  constructor(public payload: string) { }
}
export class AddRole implements Action {
  readonly type = RoleActionType.ADD_ROLE;
  constructor(public payload: Role) { }
}
export class AddRoleSuccess implements Action {
  readonly type = RoleActionType.ADD_ROLE_SUCCESS;
  constructor(public payload: Role) { }
}
export class AddRoleFail implements Action {
  readonly type = RoleActionType.ADD_ROLE_FAIL;
  constructor(public payload: string) { }
}
export class GetRole implements Action {
  readonly type = RoleActionType.GET_ROLE_BY_ID;
  constructor(public payload: number) { }
}
export class GetRoleSuccess implements Action {
  readonly type = RoleActionType.GET_ROLE_BY_ID_SUCCESS;
  constructor(public payload: Role) { }
}
export class GetRoleFail implements Action {
  readonly type = RoleActionType.GET_ROLE_BY_ID_FAIL;
  constructor(public payload: string) { }
}
export class EditRole implements Action {
  readonly type = RoleActionType.EDIT_ROLE;
  constructor(public payload: Role) { }
}
export class EditRoleSuccess implements Action {
  readonly type = RoleActionType.EDIT_ROLE_SUCCESS;
  constructor(public payload: Update<Role>) { }
}
export class EditRoleFail implements Action {
  readonly type = RoleActionType.EDIT_ROLE_FAIL;
  constructor(public payload: string) { }
}
export class DeleteRoleFail implements Action {
  readonly type = RoleActionType.DELETE_ROLE_FAIL;
  constructor(public payload: string) { }
}
export class DeleteRoleSuccess implements Action {
  readonly type = RoleActionType.DELETE_ROLE_SUCCESS;
  constructor(public payload: number) { }
}
export class DeleteRole implements Action {
  readonly type = RoleActionType.DELETE_ROLE;
  constructor(public payload: number) { }
}
export type ActionType =
  LoadRoles | LoadRoleSuccess | LoadRoleFail
  | AddRole | AddRoleSuccess | AddRoleFail
  | GetRole | GetRoleSuccess | GetRoleFail
  | EditRole | EditRoleSuccess | EditRoleFail
  | DeleteRole | DeleteRoleSuccess | DeleteRoleFail
  ;
