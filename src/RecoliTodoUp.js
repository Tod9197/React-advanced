import { useRecoilState } from "recoil";
import { useState } from "react";
import { idsAtom, todoListSelector } from "./store/atomUp";
import "./StateTodo.css";

export default function RecoilTodoUp() {
  const [title, setTitle] = useState("");
  // Atomi,Selectorから値、セッターを取得
  const [todo, setTodo] = useRecoilState(todoListSelector);
  const [ids, setIds] = useRecoilState(idsAtom);

  // テキストボックスへの入力をStateに反映
  const handleChangeTitle = (e) => setTitle(e.target.value);

  // 追加ボタンクリックでTodo項目を追加
  const handleAdd = () => {
    const newId = Math.max(...(ids.length ? ids : [0])) + 1;
    setTodo({
      type: "add",
      newItem: {
        id: newId,
        title,
        isDone: false,
      },
    });
    setIds([...ids, newId]);
    setTitle("");
  };

  // 済ボタンクリックで該当のTodo項目を作業済としてマーク
  const handleDone = (e) => {
    setTodo({
      type: "done",
      id: Number(e.target.dataset.id),
    });
  };

  // 削除ボタンクリックで該当のTodo項目を削除
  const handleRemove = (e) => {
    const removeId = Number(e.target.dataset.id);
    setTodo({
      type: "remove",
      id: removeId,
    });
    setIds(ids.filter((id) => id !== removeId));
  };

  return (
    <div>
      <label>
        やること:
        <input type="text" value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button" onClick={handleAdd}>
        追加
      </button>
      <hr />
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title}
            <button onClick={handleDone} data-id={item.id}>
              済
            </button>
            <button onClick={handleRemove} data-id={item.id}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
