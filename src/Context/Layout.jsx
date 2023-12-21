import React from "react";
import Action from "./Action";

// Define a functional component called Layout, which takes props as input
function Layout(props) {
  return (
    <>
      {/* Render a container */}
      <div className="bg-green-100 p-4 rounded border border-red-400">
        {/* Render a heading with the specified text */}
        <h2 className="text-lg font-primary font-semibold mb-2">
          {props.heading} Tasks
        </h2>

        {/* Map over tasks and render task items */}
        {props
          .getTasksByParam(props.isSearch, props.heading)
          .map((task, index) => (
            <div key={index} className="bg-white p-2 rounded mb-2">
              {/* Render task title */}
              <p
                className="font-primary font-semibold mb-2"
                onClick={() => props.setSelectedTask(task)}
              >
                Title: {task.text}
              </p>

              {/* Render task description */}
              <p className="text-base" onClick={() => props.setSelectedTask(task)}>
                Description: {task.desc}
              </p>

              {/* Render task due date */}
              <p className="" onClick={() => props.setSelectedTask(task)}>
                Due Date: {task.date}
              </p>

              {/* Render task priority */}
              <p className="text-base" onClick={() => props.setSelectedTask(task)}>
                Priority: {task.priority}
              </p>

              {/* Render a "More" button to display additional actions */}
              <button
                className="text-base"
                onClick={() => props.setSelectedTask(task)}
              >
                <u><b>More</b></u> 
              </button>

              {/* Render the Action component if the task is selected */}
              {props.selectedTask === task && (
                <>
                  <Action
                    priority={props.level}
                    handleEditTask={props.handleEditTask}
                    handleChangePriority={props.handleChangePriority}
                    handleDeleteTask={props.handleDeleteTask}
                    handleCompleteTask={props.handleCompleteTask}
                    selectedTask={props.selectedTask}
                  />
                </>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

// Export the Layout component as the default export
export default Layout;
