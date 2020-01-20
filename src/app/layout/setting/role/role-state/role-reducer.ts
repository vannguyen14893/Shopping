import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Role } from 'src/app/model/role.class';
import * as fromRoot from '../../../../app-state/app-state';
import * as roleAction from '../role-state/role-action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface RoleState extends EntityState<Role> {
  selectedRoleId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}
export interface Appstate extends fromRoot.AppState {
  roleState: RoleState;
}
export const roleAdapter: EntityAdapter<Role> = createEntityAdapter<Role>();
export const defaultUser: RoleState = {
  ids: [],
  entities: {},
  selectedRoleId: null,
  loading: false,
  loaded: false,
  error: ''
};
export const initialState = roleAdapter.getInitialState(defaultUser);
export function roleReducer(
  state = initialState,
  action: roleAction.ActionType

): RoleState {
  switch (action.type) {
    case roleAction.RoleActionType.LOAD_ROLES_SUCCESS: {
      return roleAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true,
      });
    }

    case roleAction.RoleActionType.LOAD_ROLES_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    case roleAction.RoleActionType.ADD_ROLE_SUCCESS: {
      return roleAdapter.addOne(action.payload, state);
    }
    case roleAction.RoleActionType.ADD_ROLE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case roleAction.RoleActionType.GET_ROLE_BY_ID_SUCCESS: {
      return roleAdapter.addOne(action.payload, {
        ...state,
        selectedRoleId: action.payload.id
      });
    }
    case roleAction.RoleActionType.GET_ROLE_BY_ID_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case roleAction.RoleActionType.EDIT_ROLE_SUCCESS: {
      return roleAdapter.updateOne(action.payload, state);
    }
    case roleAction.RoleActionType.EDIT_ROLE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case roleAction.RoleActionType.DELETE_ROLE_SUCCESS: {
      return roleAdapter.removeOne(action.payload, state);
    }
    case roleAction.RoleActionType.DELETE_ROLE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
const getRoleFeatureState = createFeatureSelector<RoleState>('roles');
export const getRoles = createSelector(
  getRoleFeatureState,
  roleAdapter.getSelectors().selectAll
);

export const getRolesLoading = createSelector(
  getRoleFeatureState,
  (state: RoleState) => state.loading
);

export const getRolesLoaded = createSelector(
  getRoleFeatureState,
  (state: RoleState) => state.loaded
);

export const getError = createSelector(
  getRoleFeatureState,
  (state: RoleState) => state.error
);

export const getCurrentRoleId = createSelector(
  getRoleFeatureState,
  (state: RoleState) => state.selectedRoleId
);

export const getCurrentUser = createSelector(
  getRoleFeatureState,
  getCurrentRoleId,
  state => state.entities[state.selectedRoleId]
);
