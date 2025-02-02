import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api';
import { Task } from '../types';


interface TaskListProps {
  onEdit: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ onEdit }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => handleDelete(task.id)} style={{ marginLeft: '10px' }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
