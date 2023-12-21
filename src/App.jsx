// Import the React library, which is required for creating React components.
import React from "react";

// Import the CSS file for styling this component.
import "./App.css";

// Import the TaskDashboard component from the specified path.
import TaskDashboard from "./Context/TaskDashboard";

// Define the main App component.
function App() {
  // Render the App component's content.
  return (
    <>
      {/* Render the TaskDashboard component within a fragment. */}
      <>
        <TaskDashboard />
      </>
    </>
  );
}

// Export the App component as the default export of this module.
export default App;
