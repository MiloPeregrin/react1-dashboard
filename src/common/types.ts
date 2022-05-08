export type TaskStateType = "Ready" | "In Progress" | "Finished";

export type TaskItemType = {
  taskState: TaskStateType;
  taskName: string;
  taskDetail: string;
};

export type TaskItemDetail = Omit<TaskItemType, "taskState">;
