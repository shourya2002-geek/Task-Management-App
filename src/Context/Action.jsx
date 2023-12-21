import React from "react";

const Action = (props) => {
  return (
    <div className="mt-2 space-x-2">
    <button
    className="btn btn-secondary"
    onClick={() => {
      const editedText = prompt("Edit task:", props.selectedTask.text);
      const editedDesc = prompt("Edit description:", props.selectedTask.desc);
  
      props.handleEditTask(editedText, editedDesc);
    }}
  >
    Edit
  </button>
      <button
        className="btn btn-secondary"
        onClick={() =>
          props.handleChangePriority(
            prompt("Enter new priority:", props.selectedTask.priority)
          )
        }
      >
        Change Priority
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          window.alert(`Are you sure you want to complete the task?`);
          props.handleCompleteTask();
        }}
      >
        Complete
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => {
          window.alert(`Are you sure you want to delete the task?`);
          props.handleDeleteTask();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Action;
