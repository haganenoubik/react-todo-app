import { useState } from 'react';
import './App.css';


export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["未完了1", "未完了2"]);

  const [completeTodos, setcompleteTodos] = useState(["完了1", "完了2"]);

  return (
    <>
      <div>
        <h1>React TODO App</h1>
      </div>
      <div className="input-area">
        <input placeHolder="TODOを入力" />
        <button>登録</button>
      </div>
      <div className='incomplete-area'>
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            ))};
        </ul>
      </div>
      <div className='complete-area'>
        <p>完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => (
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            )
          )};

        </ul>
      </div>
    </>
  )
};