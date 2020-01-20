
import { User } from './../../../model/user.class';
import { Action } from '@ngrx/store';
import { SortFilter } from 'src/app/model/sortFilter.class';
import { Update } from '@ngrx/entity';
export enum UserActionType {
  LOAD_USERS = 'LOAD_USERS',
  LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS',
  LOAD_USERS_FAIL = 'LOAD_USERS_FAIL',
  ADD_USER = 'ADD_USER',
  ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
  ADD_USER_FAIL = 'ADD_USER_FAIL',
  GET_USER_BY_ID = 'GET_USER_BY_ID',
  GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS',
  GET_USER_BY_ID_FAIL = 'GET_USER_BY_ID_FAIL',
  UPDATE_USER = 'UPDATE_USER',
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAIL = 'UPDATE_USER_FAIL',
  UPDATE_USER_STATUS = 'UPDATE_USER_STATUS',
  UPDATE_USER_STATUS_SUCCESS = 'UPDATE_USER_STATUS_SUCCESS',
  UPDATE_USER_STATUS_FAIL = 'UPDATE_USER_STATUS_FAIL',
  DELETE_USER = 'DELETE_USER',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  DELETE_USER_FAIL = 'DELETE_USER_FAIL',
  GET_COUNT_USER = 'GET_COUNT_USER',
  GET_COUNT_USER_SUCCESS = 'GET_COUNT_USER_SUCCESS',
  GET_COUNT_USER_FAIL = 'GET_COUNT_USER_FAIL',
}

export class LoadUsers implements Action {
  public readonly type = UserActionType.LOAD_USERS;
  constructor(public payload: SortFilter) { }
}
export class LoadUsersSuccess implements Action {
  public readonly type = UserActionType.LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) { }
}
export class LoadUsersFail implements Action {
  public readonly type = UserActionType.LOAD_USERS_FAIL;
  constructor(public payload: string) { }
}
export class CountUsers implements Action {
  public readonly type = UserActionType.GET_COUNT_USER;
  constructor(public payload: SortFilter) { }
}
export class CountUsersSuccess implements Action {
  public readonly type = UserActionType.GET_COUNT_USER_SUCCESS;
  constructor(public payload: User) { }
}
export class CountUsersFail implements Action {
  public readonly type = UserActionType.GET_COUNT_USER_FAIL;
  constructor(public payload: string) { }
}
export class AddUser implements Action {
  public readonly type = UserActionType.ADD_USER;
  constructor(public payload: User) { }
}
export class AddUserSuccess implements Action {
  public readonly type = UserActionType.ADD_USER_SUCCESS;
  constructor(public payload: User) { }
}
export class AddUserUserFail implements Action {
  public readonly type = UserActionType.ADD_USER_FAIL;
  constructor(public payload: string) { }
}
export class GetUser implements Action {
  public readonly type = UserActionType.GET_USER_BY_ID;
  constructor(public payload: number) { }
}
export class GetUserSuccess implements Action {
  public readonly type = UserActionType.GET_USER_BY_ID_SUCCESS;
  constructor(public payload: User) { }
}
export class GetUsersFail implements Action {
  public readonly type = UserActionType.GET_USER_BY_ID_FAIL;
  constructor(public payload: string) { }
}
export class UpdateUser implements Action {
  public readonly type = UserActionType.UPDATE_USER;
  constructor(public payload: User) { }
}
export class UpdateUserSuccess implements Action {
  public readonly type = UserActionType.UPDATE_USER_SUCCESS;
  constructor(public payload: Update<User>) { }
}
export class UpdateUserFail implements Action {
  public readonly type = UserActionType.UPDATE_USER_FAIL;
  constructor(public payload: string) { }
}
export class DeleteUser implements Action {
  public readonly type = UserActionType.DELETE_USER;
  constructor(public payload: number[]) { }
}
export class DeleteUserSuccess implements Action {
  public readonly type = UserActionType.DELETE_USER_SUCCESS;
  constructor(public payload: number[]) { }
}
export class DeleteUserFail implements Action {
  public readonly type = UserActionType.DELETE_USER_FAIL;
  constructor(public payload: string) { }
}
export class UpdateStatusUser implements Action {
  public readonly type = UserActionType.UPDATE_USER_STATUS;
  constructor(public payload: number[]) { }
}
export class UpdateStatusUserSuccess implements Action {
  public readonly type = UserActionType.UPDATE_USER_STATUS_SUCCESS;
  constructor(public payload: User[]) { }
}
export class UpdateStatusUserFail implements Action {
  public readonly type = UserActionType.UPDATE_USER_STATUS_FAIL;
  constructor(public payload: string) { }
}
export type UserAction = LoadUsers | LoadUsersSuccess | LoadUsersFail
  | AddUser | AddUserSuccess | AddUserUserFail | GetUser | GetUserSuccess
  | GetUsersFail | UpdateUser | UpdateUserSuccess | UpdateUserFail | DeleteUser
  | DeleteUserSuccess | DeleteUserFail | UpdateStatusUserSuccess
  | UpdateStatusUserSuccess | UpdateStatusUserFail | CountUsers | CountUsersSuccess |CountUsersFail
  ;

