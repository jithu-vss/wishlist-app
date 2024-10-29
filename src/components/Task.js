"use client"
import { useState } from 'react';
import { useTasksDispatch } from './Context.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
    <div className='space-x-2'>
      <input className='border border-black text-sm w-[148px] placeholder:p-1 '
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className=' w-10 border border-black bg-gray-200 text-sm' onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Add</button>
      </div>
    </>
  );
}

let nextId = 3;
