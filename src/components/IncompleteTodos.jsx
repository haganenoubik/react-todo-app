export const IncompleteTodos = (props) => {
  const { todos, onClickDelete, onClickComplete } = props;
  return (
    <div className='incomplete-area'>
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
            <li>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
};
