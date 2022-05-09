import { TaskItemType, TaskStateType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Form from "../components/Form";
import Section from "../components/Section";
import { useState } from "react";

interface IDashboard {
  // setShowDashboard: (value: boolean) => void;
  onDetail: (task: TaskItemType) => void;
  selectedTask: TaskItemType;
}

const Dashboard = ({ onDetail, selectedTask }: IDashboard) => {
  const { filterTasks } = useTaskContext();

  const sections: TaskStateType[] = ["Ready", "In Progress", "Finished"];

  return (
    <>
      <div className="flex justify-center w-full">
        <Form mode="new" selectedTask={selectedTask} />
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full md:space-x-4">
        {sections.map((item) => {
          return (
            <Section
              key={item}
              title={item}
              tasks={filterTasks(item)}
              onDetail={onDetail}
            />
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
