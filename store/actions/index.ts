import { ActionType } from "../action-types";

interface AddAction {
  type: ActionType.ADD;
  payload: {
    id: string;
  };
}

interface UpdateAction {
  type: ActionType.UPDATE;
  payload: {
    id: string;
  };
}

interface DeleteAction {
  type: ActionType.DELETE;
  payload: {
    id: string;
  };
}

interface ViewAction {
  type: ActionType.VIEW;
  payload: {
    id: string;
  };
}

export type Action = AddAction | UpdateAction | DeleteAction | ViewAction;
