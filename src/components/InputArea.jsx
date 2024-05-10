export const InputArea = (props) => {
  const { text, onChange, onClickAdd } = props;
  return (
  <div className="input-area">
    <input placeHolder="TODOを入力"
    value={text}
    onChange={onChange} />
    <button onClick={onClickAdd}>登録</button>
  </div>
  )
};
