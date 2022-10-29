export enum ActionType {
  ADD = "add",
  DELETE = "delete",
  UPDATE = "update",
  VIEW = "view",
}

interface AddAction {
  type: ActionType.ADD;
  payload: boolean;
}

interface UpdateAction<T> {
  type: ActionType.UPDATE;
  payload: {
    id: string;
    data: T;
  };
}

export type Action = AddAction;
