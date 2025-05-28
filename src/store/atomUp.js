import { atom, atomFamily, selector } from "recoil";

// idを管理するためのAtom
export const idsAtom = atom({
  key: "idsAtom",
  default: [],
});

// 個々のTodo項目を個別のAtomとして管理
export const todoAtom = atomFamily({
  key: "todoAtom",
  default: null,
});

// Todom項目をリストとして束ね、操作するためのセレクター
export const todoListSelector = selector({
  key: "todoListSelector",
  get: ({ get }) => {
    const ids = get(idsAtom);
    return ids.map((id) => get(todoAtom(id)));
  },

  set: ({ set, reset }, { type, id, newItem }) => {
    switch (type) {
      // 新たなTodo項目(todoAtom)を生成
      case "add":
        set(todoAtom(newItem.id), newItem);
        set(idsAtom, (ids) => [...ids, newItem.id]);
        break;
      // 既存のTodo項目(idであるtodoAtom)のisDoneプロパティをtrueに
      case "done":
        set(todoAtom(id), (todo) => ({ ...todo, isDone: true }));
        break;
      // 既存のTodo項目(idであるtodoAtom)を削除&id郡(isdAtom)から、対応するid値を削除
      case "remove":
        reset(todoAtom(id));
        set(idsAtom, (ids) => ids.filter((e) => e !== id));
        break;
      default:
        throw new Error("Type is invalid.");
    }
  },
});
