import { Task } from "./types";

const API_URL = '/api/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (id: number, updatedTask: Omit<Task, 'id'>): Promise<Task> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTask),
  });
  return response.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
