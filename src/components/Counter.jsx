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
  const { amount, completedCount, incompletedCount } = useSelector((store) => {
    return store.todo;
  });

  return (
    <SFooter>
      <SFooterText>Todoアイテム数: {amount}</SFooterText>
      <SFooterText>完了済み: {completedCount} / 未完了: {incompletedCount}</SFooterText>
    </SFooter>
  )
};

export default Counter;
