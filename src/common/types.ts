export type TaskStateType = "Ready" | "In Progress" | "Finished";

export type TaskItemType = {
  state: TaskStateType;
  name: string;
  detail: string;
};
