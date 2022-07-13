import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

type InputProps = TextInputProps & {
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
};

export const Container = styled.View`
  margin-top: 10px;
  padding-bottom: 16px;
`;

export const Wrapper = styled.View`
  height: 39px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.input.primary};
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

export const InputStyled = styled(TextInput)<InputProps>`
  flex: 1;
  height: 39px;
  padding: 0 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.input.textColor};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ErrorContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
`;
