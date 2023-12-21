import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTasks, setSearchTasks] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [heading, setHeading] = useState("");
  const [searchTaskTitle, setSearchTaskTitle] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("High");
  const [selectedTask, setSelectedTask] = useState(null);

  const listStyles = {
    listStyleType: "none", // This removes the bullets
    // Add other styles if needed
  };

  // UseEffect For StoredTasks in Local Stroage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // With Help Of State Management We Handle Input Change
  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleDateInputChange = (event) => {
    setDateInput(event.target.value);
  };

  const handleDescInputChange = (event) => {
    setDescInput(event.target.value);
  };

  // handlePriorityChange
  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  // Handle Function When Click On Submit
  const handleTaskSubmit = () => {
    if (textInput.trim() === "") {
      return;
    }
    // Selecting The New Task To Put
    const newTask = {
      text: textInput,
      desc: descInput,
      priority: selectedPriority,
      date: dateInput,
      statusValue: statusValue,
    };

    const currentTime = new Date();

    console.log("hello");
    console.log(currentTime);

    const taskDate = new Date(newTask.date);

    if (taskDate.getTime() > currentTime.getTime()) {
      newTask.statusValue = "Upcoming";
    } else if (taskDate.getTime() < currentTime.getTime()) {
      newTask.statusValue = "Overdue";
    } else {
      newTask.statusValue = "Completed";
    }

    setTasks([...tasks, newTask]);
    setTextInput("");
    setSelectedPriority("High");
  };

  const getTasksByPriority = (priority) => {
    return tasks.filter((task) => task.priority === priority);
  };

  const getTasksByParam = (isSearch, heading) => {
    const currentTime = Date.now();

    if (heading === "Upcoming") {
      return tasks.filter((task) => task.statusValue === "Upcoming");
    } else if (heading === "Overdue") {
      return tasks.filter((task) => task.statusValue === "Overdue");
    } else {
      return tasks.filter((task) => task.statusValue === "Completed");
    }
  };

  const handleEditTask = (editedText,editedDesc) => {
    const updatedTasks = tasks.map((task) =>
      task === selectedTask ? { ...task, text: editedText, desc: editedDesc} : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleChangePriority = (newPriority) => {
    const updatedTasks = tasks.map((task) =>
      task === selectedTask ? { ...task, priority: newPriority } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((task) => task !== selectedTask);
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleCompleteTask = () => {
    const updatedTask = { ...selectedTask, statusValue: "Completed" };

    // Replace the selectedTask with the updatedTask in the tasks array
    const updatedTasks = tasks.map((task) =>
      task === selectedTask ? updatedTask : task
    );

    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const [searchPriority, setSearchPriority] = useState("All");
  const [searchStatus, setSearchStatus] = useState("All");

  // Updated function for handling search by task title
  const handleSearch = () => {
    // Perform filtering based on task title
    const filteredTasks = tasks.filter((task) =>
      task.text.toLowerCase().includes(searchTaskTitle.toLowerCase())
    );
    setSearchTasks(filteredTasks);
  };

  // Function to filter tasks based on priority and status
  const handleFilter = () => {
    let filteredTasks = searchTasks;

    // Filter by priority
    if (searchPriority !== "All") {
      filteredTasks = filteredTasks.filter(
        (task) => task.priority === searchPriority
      );
    }

    // Filter by status
    if (searchStatus !== "All") {
      filteredTasks = filteredTasks.filter(
        (task) => task.statusValue === searchStatus
      );
    }

    setSearchTasks(filteredTasks);
  };

  return (
    <div className="p-8">
    <h1 className="text-4xl font-bold text-center mb-8">Task Management Application</h1>

      <div className="lg:flex grid gap-2 items-center font-main">
        <div className="">
          <input
            type="text"
            value={textInput}
            onChange={handleTextInputChange}
            className="w-full lg:w-96 border rounded p-2"
            placeholder="Enter task"
          />
        </div>

        <div className="">
          <input
            type="date"
            value={dateInput}
            onChange={handleDateInputChange}
            className="w-full lg:w-96 border rounded p-2"
            placeholder="Enter due date"
          />
        </div>

        <div className="">
          <select
            value={selectedPriority}
            onChange={handlePriorityChange}
            className="w-full border rounded p-2"
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>

        <button onClick={handleTaskSubmit} className="btn btn-secondary">
          Add Task
        </button>
      </div>

      <textarea
        value={descInput}
        onChange={handleDescInputChange}
        className="w-full lg:w-96 border rounded p-2 mt-7"
        placeholder="Enter task description"
      />

      <div className="mt-8 space-y-4 text-black ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Layout
            getTasksByPriority={getTasksByPriority}
            getTasksByParam={getTasksByParam}
            setSelectedTask={setSelectedTask}
            selectedTask={selectedTask}
            handleEditTask={handleEditTask}
            handleChangePriority={handleChangePriority}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            heading="Upcoming"
            isSearch="0"
          />
          {/* Medium Priority */}
          <Layout
            getTasksByPriority={getTasksByPriority}
            getTasksByParam={getTasksByParam}
            setSelectedTask={setSelectedTask}
            selectedTask={selectedTask}
            handleEditTask={handleEditTask}
            handleChangePriority={handleChangePriority}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            heading="Overdue"
            isSearch="0"
          />
          {/* Low Priority */}
          <Layout
            getTasksByPriority={getTasksByPriority}
            getTasksByParam={getTasksByParam}
            setSelectedTask={setSelectedTask}
            selectedTask={selectedTask}
            handleEditTask={handleEditTask}
            handleChangePriority={handleChangePriority}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            heading="Completed"
            isSearch="0"
          />
        </div>
      </div>

      {/* Search functionality */}
      <div className="lg:flex grid gap-2 items-center font-main mt-10">
        <div className="">
          <input
            type="text"
            value={searchTaskTitle}
            onChange={(e) => setSearchTaskTitle(e.target.value)}
            className="w-full lg:w-96 border rounded p-2"
            placeholder="Enter Task to search"
          />
        </div>

        <button onClick={handleSearch} className="btn btn-secondary">
          Search Tasks
        </button>

        <div className="">
          <select
            value={searchPriority}
            onChange={(e) => setSearchPriority(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="All">All Priorities</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>

        <div className="">
          <select
            value={searchStatus}
            onChange={(e) => setSearchStatus(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="All">All Status</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Overdue">Overdue</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button onClick={handleFilter} className="btn btn-secondary">
          Apply Filters
        </button>
      </div>

      <div className="mt-8 space-y-4 text-black ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded border border-red-400 mt-5">
            {searchTasks.map((task, index) => (
              <div key={index} className="bg-white p-2 rounded mb-2">
                <li key={index} style={listStyles}>
                  <p className="font-primary font-semibold mb-2">
                    Title: {task.text}
                  </p>
                  <p>Priority: {task.priority}</p>
                  <p>Date: {task.date}</p>
                  <p>Status: {task.statusValue}</p>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
