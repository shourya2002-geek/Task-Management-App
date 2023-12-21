## How long did you spend on the coding test? 
I spent 6 hours on the coding test.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Hooks was one of the most useful features included in React. 
Here is a code snippet to show the usage:

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


  ## How would you track down a performance issue in production? Have you ever had to do this?

  Tracking performance in production is a critical task. There are several methods I could follow to track down a performance issue in production:

1. The first step is to clearly identify the performance issue. This could be slower response times, reduced throughput, or system crashes. Monitoring tools and user reports can help pinpoint the problem.

2. Once the issue is identified, the next step is to gather relevant data. This includes logs, metrics, and traces from the affected systems. Tools like Splunk for logs can be used. I have utlized Splunk to analyze logs before.

3. Analyzing the collected data to identify patterns or anomalies could involve looking at resource usage (CPU, memory, disk I/O, network), examining application logs for errors or slow operations, and tracing transactions through the system to see where delays occur. I have done this during my Operating Systems course and practical lab.

Further, one can prepare detailed documentation regarding the issue for further reference. In the past, I had to resolve a performance issue in production, when one of my backend applications was failing to reach the endpoints. I checked the Heroku logs and resolved the issue.
It turned out that issue was with one of the deprecated node js dependencies.

## If you had more time, what additional features or improvements would you consider adding to the task management application?

Some features would be:

1. Deadline Reminders: Send notifications or reminders as deadlines approach.
2. Drag-and-Drop Interface: Improve the user experience with a drag-and-drop interface for rearranging tasks.
3. Team Collaboration: Add features for team collaboration, like shared task lists and group projects.
4. Calendar Integration: Sync tasks with external calendars like Google Calendar or Outlook.


