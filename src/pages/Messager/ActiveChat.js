import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import IconArrow from "components/assets/images/arrow.svg";

const animateOpenChat = keyframes`
0% {transform: translateY(100%)}

100% {transform: translateY(0)}
`;

const WrapperOpenChat = styled.div`
  position: fixed;
  width: 300px;
  height: 400px;
  bottom: 0;
  right: 50px;
  border: none;
  box-shadow: 0 0 12px 2px #818181;
  border-radius: 22px 22px 0 0;
  background-color: white;
  color: black;

  display: flex;
  flex-direction: column;

  animation: ${animateOpenChat} 0.3s ease-in-out;
`;

const StyledTitle = styled.p`
  color: #373738;

  font-weight: 600;
  background-color: #f6f6f6;
  flex-basis: 30px;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid white;
  text-align: center;

  line-height: 30px;
`;

const WrapperActiveChat = styled.div`
  height: calc(100% - 45px);
  display: flex;
  flex-direction: column;
`;

const StyledMessagesWrapper = styled.div`
  flex-grow: 1;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f6f6f6;
  }

  ::-webkit-scrollbar-thumb {
    background: #e5e3e8;
    border-radius: 5px;
    width: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #e6e4e8;
  }
`;

const WrapperInput = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-basis: 100px;

  display: grid;
  grid-template-columns: 80% 20%;
`;

const StyledInput = styled.input`
  padding: 5px;
`;

const StyledMessage = styled.p`
  width: 80%;
  background-color: ${({ type }) => (type === "user" ? "#e5e3e8" : "#f6f6f6;")};

  border-radius: 15px;
  padding: 10px;
  margin: ${({ type }) =>
    type === "worker" ? "2px auto 0 5px " : "2px 5px 0 auto"};
`;

const StyledButton = styled.button`
  background-image: url(${IconArrow});
  background-position: center;
  background-repeat: no-repeat;
  border: none;
`;

const ActiveChat = ({ onClickClosed }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "worker",
      message: "Witaj. Proszę czekać na pracownika 😊",
    },
  ]);

  const [messageInput, setMessageInput] = useState("");

  const refMessagesWrapper = useRef(null);

  useEffect(() => {
    const currentElement = refMessagesWrapper.current;
    const currentElementHeight = currentElement.clientHeight;
    if (currentElement) {
      if (currentElementHeight !== null) {
        currentElement.scrollTo({
          top: currentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [messages]);

  const messageInMessager = messages.map(({ id, type, message }) => (
    <StyledMessage key={id + type} type={type}>
      {message}
    </StyledMessage>
  ));

  const sendMessage = (e) => {
    e.preventDefault();
    if (messageInput !== "") {
      const newMessage = {
        id: messages.length,
        type: "user",
        message: e.target[0].value,
      };

      setMessages([...messages, newMessage]);

      setMessageInput("");
    }
  };

  return (
    <WrapperOpenChat>
      <div>
        <StyledTitle>Chat</StyledTitle>
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "3px",

            cursor: "pointer",
            borderRadius: "50%",
            backgroundColor: "#f6f6f6",
            width: "25px",
            height: "25px",
            textAlign: "center",
            lineHeight: "25px",
            transition: "0.3s linear",
          }}
          onClick={onClickClosed}
        >
          X
        </div>
      </div>

      <WrapperActiveChat>
        <StyledMessagesWrapper ref={refMessagesWrapper}>
          {messageInMessager}
        </StyledMessagesWrapper>
        <WrapperInput onSubmit={sendMessage}>
          <StyledInput
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <StyledButton></StyledButton>
        </WrapperInput>
      </WrapperActiveChat>
    </WrapperOpenChat>
  );
};

export default ActiveChat;
