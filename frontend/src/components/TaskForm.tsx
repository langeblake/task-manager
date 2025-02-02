import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../api';
import { Task } from '../types';

interface TaskFormProps {
  taskToEdit: Task | null;
  onTaskSaved: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ taskToEdit, onTaskSaved }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (taskToEdit) {
      await updateTask(taskToEdit.id, { title, description });
    } else {
      await createTask({ title, description });
    }
    setTitle('');
    setDescription('');
    onTaskSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
