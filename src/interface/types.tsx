export interface State {
  count: number;
}

type Actions = "reset" | "increment" | "decrement";

export interface Action {
  type: Actions;
}
