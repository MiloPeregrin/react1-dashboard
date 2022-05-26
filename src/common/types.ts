export type TaskStateType = "Ready" | "In Progress" | "Finished";

export type TaskItemType = {
  id: string;
  state: TaskStateType;
  name: string;
  detail: string;
};

export type FormData = {
  name: string;
  detail: string;
};
