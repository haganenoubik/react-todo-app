import { useState } from 'react';
import { InputArea } from './components/InputArea';
import { IncompleteTodos } from './components/IncompleteTodos';

import './App.css';


export const App = () => {
  const [text, setText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["未完了1", "未完了2"]);

  const [completeTodos, setCompleteTodos] = useState(["完了1", "完了2"]);

  const onChangeText = (e) => setText(e.target.value);

  const onClickAdd = () => {
    if (text === "") return;
    const addTodos = [...incompleteTodos, text];
    setIncompleteTodos(addTodos);
    setText("");
  };

  const onClickDelete = (index) => {
    const deleteTodos = [...incompleteTodos];
    deleteTodos.splice(index, 1);
    setIncompleteTodos(deleteTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div>
        <h1>React TODO App</h1>
      </div>
      <InputArea
        text={text}
        onChange={onChangeText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <div className='complete-area'>
        <p>完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => (
              <li>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            )
          )};

        </ul>
      </div>
    </>
  )
};
