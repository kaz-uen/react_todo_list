import List from "./List";
import Form from "./Form";
import Counter from "./Counter";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import styled from "styled-components";

const STodoApp = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const Container = () => {
    const { isOpen } = useSelector((store) => store.modal);

    return (
      <STodoApp>
        { isOpen && <Modal /> }
        <Form />
        <List />
        <Counter />
      </STodoApp>
    );
};

export default Container;
