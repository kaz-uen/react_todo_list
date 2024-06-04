import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";
import { escapeSpecialChars } from "../utils";
import styled from "styled-components";

const SForm = styled.form`
  text-align: center;
  padding: 1rem;
`;

const SInput = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  border: solid 1px #cfcfcf;
  border-radius: 0.3rem;
  color: inherit;
  box-sizing: border-box;
  padding: 1rem 1rem 1rem 3rem;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.03);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

const SButton = styled.button`
  display: inline-block;
  width: 120px;
  padding: 0.5rem 1.5rem;
  background-color: #606060;
  border-radius: 1.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
      cursor: pointer;
  }
`;

const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <SForm
      onSubmit={(e) => {
        e.preventDefault();
        if(enteredTodo) {
          const escapedTodo = escapeSpecialChars(enteredTodo); //エスケープ処理
          dispatch(addTodo(escapedTodo)); //フォームに値が入力されている場合のみDispatchする
        }
        setEnteredTodo(""); //フォームの値を空にする
      }}
    >
      <SInput
        type="text"
        placeholder="タスクを入力"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
        autocomplete="off"
      />
      <SButton>追加</SButton>
    </SForm>
  );
};

export default Form;
