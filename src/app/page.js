"use client"
import AddTask from '@/components/Task.js';
import  TaskList from '@/components/List.js';
import { TasksProvider } from '@/components/Context';

export default function TaskApp() {
  return (
    <div className='p-3'>
    <TasksProvider>
      <h1 className='font-extrabold text-[19px] mb-3'>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
    </div>
  );
}
