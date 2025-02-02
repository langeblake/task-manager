import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Task } from './types';

const App: React.FC = () => {
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [refreshTasks, setRefreshTasks] = useState<boolean>(false);

  const handleEdit = (task: Task) => {
    setTaskToEdit(task);
  };

  const handleTaskSaved = () => {
    setTaskToEdit(null);
    setRefreshTasks(!refreshTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Manager</h1>
      <TaskForm taskToEdit={taskToEdit} onTaskSaved={handleTaskSaved} />
      <TaskList onEdit={handleEdit} key={refreshTasks.toString()} />
    </div>
  );
};

export default App;
