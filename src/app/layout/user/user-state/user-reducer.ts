
import { User } from 'src/app/model/user.class';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../../../../app/app-state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as userAction from '../user-state/user-action';
export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}
export interface Appstate extends fromRoot.AppState {
  users: UserState;
}
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: sortById,
}
);

export const defaultUser: UserState = {
  ids: [],
  entities: {},
  selectedUserId: null,
  loading: false,
  loaded: false,
  error: ''
};
export function sortById(a: User, b: User): number {
  return a.id - b.id;
}
export const initialState = userAdapter.getInitialState(defaultUser);
export function userReducer(
  state = initialState,
  actions: userAction.UserAction

): UserState {
  switch (actions.type) {
    case userAction.UserActionType.LOAD_USERS_SUCCESS: {
      return userAdapter.addAll(actions.payload, {
        ...state,
        loading: false,
        loaded: false,
      });
    }

    case userAction.UserActionType.LOAD_USERS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: actions.payload
      };
    }
    case userAction.UserActionType.ADD_USER_SUCCESS: {
      return userAdapter.addOne(actions.payload, state);
    }
    case userAction.UserActionType.ADD_USER_FAIL: {
      return {
        ...state,
        error: actions.payload
      };
    }
    case userAction.UserActionType.GET_USER_BY_ID_SUCCESS: {
      return userAdapter.addOne(actions.payload, {
        ...state,
        selectedUserId: actions.payload.id
      });
    }
    case userAction.UserActionType.GET_USER_BY_ID_FAIL: {
      return {
        ...state,
        error: actions.payload
      };
    }
    case userAction.UserActionType.UPDATE_USER_SUCCESS: {
      return userAdapter.updateOne(actions.payload, state);
    }
    case userAction.UserActionType.UPDATE_USER_FAIL: {
      return {
        ...state,
        error: actions.payload
      };
    }
    case userAction.UserActionType.DELETE_USER_SUCCESS: {
      return userAdapter.removeAll({ ...state, selectedUserId: null });
    }
    case userAction.UserActionType.DELETE_USER_FAIL: {
      return {
        ...state,
        error: actions.payload
      };
    }
    case userAction.UserActionType.UPDATE_USER_STATUS_SUCCESS: {
      return userAdapter.upsertMany(actions.payload, state);
    }
    case userAction.UserActionType.UPDATE_USER_STATUS_FAIL: {
      return {
        ...state,
        error: actions.payload
      };
    }
    default: {
      return state;
    }
  }

}
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(
  getUserFeatureState,
  userAdapter.getSelectors().selectAll,
);
export const selectUserIds = createSelector(
  getUserFeatureState,
  userAdapter.getSelectors().selectIds
);
export const getUsersLoading = createSelector(
  getUserFeatureState,
  (state: UserState) => state.loading
);

export const getUsersLoaded = createSelector(
  getUserFeatureState,
  (state: UserState) => state.loaded
);

export const getError = createSelector(
  getUserFeatureState,
  (state: UserState) => state.error
);
export const getCurrentUserId = createSelector(
  getUserFeatureState,
  (state: UserState) => state.selectedUserId
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  getCurrentUserId,
  state => state.entities[state.selectedUserId]
);
export const getCurrentUsers = createSelector(
  getUserFeatureState,
  selectUserIds,
  state => state.entities[state.selectedUserId]
);
