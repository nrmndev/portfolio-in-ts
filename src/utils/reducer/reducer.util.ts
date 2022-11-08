export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// export function createAction<T extends string, P>(type: T, payload: P) {
//     return {type,payload};
// }

function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;
function createAction<T extends string>(type: T, payload: void): Action<T>;
function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

export default createAction;
// export const createAction = <T extends string, P>(type:T, payload:P):ActionWithPayload<T,P>;
// export const createAction = <T extends string>(type:T, payload:void):Action<T>;
// export const createAction =<T extends string, P>(type: T, payload: P) {return {type,payload}};
