import React, { ReactNode } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { TextStyled } from '../../TextStyled';
import { Container, ErrorContainer, InputStyled, Wrapper } from './Styles';

type TProps = TextInputProps & {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  errorMessage?: string;
};

export const Input = (props: TProps) => {
  const { iconLeft, iconRight, errorMessage } = props;
  const theme = useTheme();

  return (
    <Container>
      <Wrapper>
        {iconLeft && iconLeft}
        <InputStyled
          hasLeftIcon={!!iconLeft}
          placeholderTextColor={theme.input.primary}
          {...props}
        />
        {iconRight && iconRight}
      </Wrapper>

      {errorMessage && (
        <ErrorContainer>
          <TextStyled size="tiny" color={theme.input.error}>
            {errorMessage}
          </TextStyled>
        </ErrorContainer>
      )}
    </Container>
  );
};
