import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: flex-end;

  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-right: 15px;
`;

export const Text = styled.span`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 260px;
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  border: none;
  font: inherit;
`;

export const Button = styled.button`
  width: 70px;
  height: 35px;

  border-radius: 4px;
  border: none;
  background-color: orangered;

  color: white;
  font-weight: 700;
`;
