import React, { useState } from 'react'
import FormTodo from './FormTodo'
import TaskList from './TaskList'
import DarkMode from './DarkMode';

const Container = () => {
  const [list, setList] = useState([]);
  const handleAddItem = addItem => {
    setList([...list, addItem]); /* spread */
  };
  return (
    <div>
      <DarkMode />
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container