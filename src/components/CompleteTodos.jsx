export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className='complete-area'>
      <p>完了したTODO</p>
      <ul>
        {todos.map((todo, index) => (
            <li>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          )
        )};
      </ul>
    </div>
  )
};
