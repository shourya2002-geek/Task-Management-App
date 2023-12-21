import React from "react";
import Action from "./Action";

function Layout(props) {
  return (
    <>
      <>
        <div className="bg-green-100 p-4 rounded border border-red-400">
          <h2 className="text-lg font-primary font-semibold mb-2">
            {props.heading} Tasks
          </h2>
          {props
            .getTasksByParam(props.isSearch, props.heading)
            .map((task, index) => (
              <div key={index} className="bg-white p-2 rounded mb-2">
                <p
                  className="font-primary font-semibold mb-2"
                  onClick={() => props.setSelectedTask(task)}
                >
                  Title: {task.text}
                </p>
                <p
                  className="text-base"
                  onClick={() => props.setSelectedTask(task)}
                >
                  Description: {task.desc}
                </p>
                <p className="" onClick={() => props.setSelectedTask(task)}>
                  Due Date: {task.date}
                </p>
                <p
                  className="text-base"
                  onClick={() => props.setSelectedTask(task)}
                >
                  Priority: {task.priority}
                </p>

                <button
                  className="text-base"
                  onClick={() => props.setSelectedTask(task)}
                >
                 <u><b>More</b></u> 
                </button>

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
    </>
  );
}

export default Layout;
