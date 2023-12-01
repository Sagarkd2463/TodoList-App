import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((previousItems) => {
      return [...previousItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((previousItems) => {
      return previousItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>Todo List</h1>
          <br />
          <input type='text' value={inputList} placeholder='Add a item' onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {
              Items.map((itemval, index) => {
                return <TodoList
                  text={itemval}
                  key={index}
                  id={index} 
                  onSelect={deleteItem}/>
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
};

export default App; 
