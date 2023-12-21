import React from "react";

// Define a functional component called Action, which takes props as input
const Action = (props) => {
  return (
    // Create a container div with some styling classes
    <div className="mt-2 space-x-2">
      {/* Edit button */}
      <button
        className="btn btn-secondary"
        onClick={() => {
          // Prompt the user to edit the task's text and description
          const editedText = prompt("Edit task:", props.selectedTask.text);
          const editedDesc = prompt("Edit description:", props.selectedTask.desc);

          // Call the handleEditTask function from props with the edited values
          props.handleEditTask(editedText, editedDesc);
        }}
      >
        Edit
      </button>

      {/* Change Priority button */}
      <button
        className="btn btn-secondary"
        onClick={() =>
          // Prompt the user to enter a new priority and call handleChangePriority with the new value
          props.handleChangePriority(
            prompt("Enter new priority:", props.selectedTask.priority)
          )
        }
      >
        Change Priority
      </button>

      {/* Complete button */}
      <button
        className="btn btn-secondary"
        onClick={() => {
          // Show a confirmation alert and call handleCompleteTask when clicked
          window.alert(`Are you sure you want to complete the task?`);
          props.handleCompleteTask();
        }}
      >
        Complete
      </button>

      {/* Delete button */}
      <button
        className="btn btn-secondary"
        onClick={() => {
          // Show a confirmation alert and call handleDeleteTask when clicked
          window.alert(`Are you sure you want to delete the task?`);
          props.handleDeleteTask();
        }}
      >
        Delete
      </button>
    </div>
  );
};

// Export the Action component as the default export
export default Action;
