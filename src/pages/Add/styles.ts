import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;

  flex-direction: column;
  gap: 20px;

  input {
    width: 250px;
    padding: 10px;
    border: 1px solid gray;
  }

  text-area {
    padding: 10px;
  }

  button {
    width: 250px;
    border: none;
    padding: 10px;
    background-color: teal;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
