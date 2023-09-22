import React, { useState } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
  const [list, setList] = useState([]); 

  // (A-2)
  const handleAddItem = addItem => {
    setList([...list, addItem]); 
  };
  return (
    <div>
      {/*(A-1)*/}
      <FormTodo handleAddItem={handleAddItem} />
      {/*(C)*/}
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;