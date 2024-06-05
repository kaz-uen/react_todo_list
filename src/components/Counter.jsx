import { useSelector } from "react-redux";
import styled from "styled-components";

const SFooter = styled.footer`
  color: #777;
  padding: 10px 15px;
  border-top: 1px solid #e6e6e6;
`;

const SFooterText = styled.p`
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;

const Counter = () => {
  const { todoItemsData } = useSelector((store) => store.todo);

  const getTodoItemAmount = (todos) => todos.length || 0;
  const getCompletedTodoItemCount = (todos) => todos.filter(todoItem => todoItem.completed === true).length || 0;
  const getIncompletedTodoItemCount = (todos) => todos.filter(todoItem => todoItem.completed === false).length || 0;

  return (
    <SFooter>
      <SFooterText>Todoアイテム数: {getTodoItemAmount(todoItemsData)}</SFooterText>
      <SFooterText>完了済み: {getCompletedTodoItemCount(todoItemsData)} / 未完了: {getIncompletedTodoItemCount(todoItemsData)}</SFooterText>
    </SFooter>
  )
};

export default Counter;
