import { useDispatch } from "react-redux";
import { clearTodo } from "../features/todo/TodoSlice";
import { closeModal } from "../features/modal/ModalSlice";
import styled from "styled-components";

const SModal = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SModalBody = styled.div`
  background: var(--color-white);
  width: 80vw;
  max-width: 400px;
  border-radius: var(--radius);
  padding: 2rem 1rem;
  text-align: center;
`;

const SModalTitle = styled.h4`
  margin-bottom: 1em;
  line-height: 1.5;
`;

const SModalBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SConfirmButton = styled.button`
  width: 80px;
  height: 40px;
  color: #fff;
  background-color: #cc9a9a;
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const SClearButton = styled.button`
  width: 80px;
  height: 40px;
  color: #fff;
  background-color: #cc9a9a;
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Modal = () => {

  const dispatch = useDispatch();

  return (
    <SModal>
      <SModalBody>
        <SModalTitle>全てのタスクを<br />削除してもよろしいですか？</SModalTitle>
        <SModalBtnContainer>
          <SConfirmButton onClick={() => {
            dispatch(clearTodo());
            dispatch(closeModal());
          }}>
            はい
          </SConfirmButton>
          <SClearButton onClick={() => dispatch(closeModal())}>いいえ</SClearButton>
        </SModalBtnContainer>
      </SModalBody>
    </SModal>
  )
};

export default Modal;
