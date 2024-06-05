import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo, editTodoStart, editTodoComplete } from "../features/todo/TodoSlice";
import { openModal } from "../features/modal/ModalSlice";
import { escapeSpecialChars } from "../utils";
import styled from "styled-components";
import { useEffect } from "react";

const SComment = styled.div`
  text-align: center;
  padding: 2em 1em;
`;

const SCommentText = styled.p`
  font-size: 1.2rem;
`;

const STodoContainer = styled.div`
  padding: 20px;
`;

const STodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const STodoListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  &:last-child {
    border-bottom: none;
  }
`;

const SCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 40px;
  height: auto;
  margin: auto 0;
  border: none;
`;

const SInput = styled.input.attrs({ type: "text" })`
  font-size: 24px;
  line-height: 1.4em;
  border: solid 1px #cfcfcf;
  border-radius: 0.3rem;
  color: inherit;
  box-sizing: border-box;
  padding: 0.2rem 0.6rem;
  margin-right: 0.3rem;
  margin-left: 30px;
`;

const SSaveButton = styled.button`
  width: 60px;
  height: 40px;
  color: #fff;
  background-color: #d06464;
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const SEditButton = styled.button`
  width: 60px;
  height: 40px;
  color: #9d4646;
  background-color: #fff;
  border: solid 1px #9d4646;
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  position: absolute;
  right: 80px;
  &:hover {
    cursor: pointer;
  }
`;

const SDeleteButton = styled.button`
  width: 60px;
  height: 40px;
  color: #fff;
  background-color: #9d4646;
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  position: absolute;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const SResetContainer = styled.div`
  text-align: center ;
`;

const SResetButton = styled.button`
  display: inline-block;
  width: 120px;
  padding: 0.5rem 1.5rem;
  background-color: #fff;
  border: solid 1px #606060;
  border-radius: 1.5rem;
  color: #606060;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
      cursor: pointer;
  }
`;


const List = () => {
  const { todoItemsData } = useSelector((store) => store.todo);

  // ローカルストレージにTodo保存
  useEffect(() => {
    localStorage.setItem('Todo', JSON.stringify(todoItemsData));
  }, [todoItemsData])

  const [editTodo, setEditTodo] = useState("");

  const dispatch = useDispatch();

  const handleCheck = (id) => {
    dispatch(updateTodo(id));
  };

  const handleEdit = (item) => {
    const escapedTitle = escapeSpecialChars(item.title); //エスケープ処理
    setEditTodo(escapedTitle);
    dispatch(editTodoStart(item.id));
  };

  const handleSave = (id) => {
    dispatch(editTodoComplete({id, title: editTodo}));
  };

  const handleDelete = (id) => {
    if (window.confirm("本当に削除してもよろしいですか？")) {
      dispatch(deleteTodo(id));
    }
  };

  if (todoItemsData.length === 0) {
    return (
      <SComment>
        <SCommentText>現在タスクはありません。</SCommentText>
      </SComment>
    );
  }

  return (
    <STodoContainer>
      <STodoList>
        {todoItemsData.map((item) => (
          <STodoListItem key={item.id}>
              {!item.completed && item.isEditing ? (
                <>
                  <SInput
                    type="text"
                    value={editTodo}
                    onChange={e => setEditTodo(e.target.value)}
                  />
                  <SSaveButton
                    type="button"
                    onClick={e => handleSave(item.id)}
                  >保存</SSaveButton>
                </>
             ) : (
                <>
                  <SCheckbox
                    id={item.id}
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheck(item.id)}
                  />
                  {item.completed ? (
                    <>
                      <label htmlFor={item.id}><s>{item.title}</s></label>
                      <SEditButton
                        type="button"
                        disabled
                      >
                      編集
                      </SEditButton>
                      <SDeleteButton
                        type="button"
                        onClick={() => handleDelete(item.id)}
                      >
                      削除
                      </SDeleteButton>
                    </>
                  ) : (
                    <>
                      <label htmlFor={item.id}>{item.title}</label>
                      <SEditButton
                        type="button"
                        onClick={() => handleEdit(item)}
                      >
                      編集
                      </SEditButton>
                      <SDeleteButton
                        type="button"
                        onClick={() => handleDelete(item.id)}
                      >
                      削除
                      </SDeleteButton>
                    </>
                  )}
                </>
             )}
          </STodoListItem>
        ))}
      </STodoList>

      <SResetContainer className="todo-remove">
        <SResetButton className="remove-btn" onClick={() => dispatch(openModal())}>
          全削除
        </SResetButton>
      </SResetContainer>
    </STodoContainer>
  );
};

export default List;
