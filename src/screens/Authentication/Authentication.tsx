import React from 'react';
import { useTheme } from 'styled-components/native';
import { ButtonStyled, Container, Content, TextStyled } from '../../components';
import {
  FacebookIcon,
  GoogleIcon,
  LogoContainer,
  Separator,
  SignUpContainer,
} from './Styles';
import { useTranslation } from 'react-i18next';
import { Images } from '../../assets/images/index';

export const Authentication = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <LogoContainer />

        <ButtonStyled color={theme.common.facebook}>
          <FacebookIcon name="facebook" size={22} color={theme.common.white} />
          <TextStyled family="semiBold">
            {t('authentication.facebook')}
          </TextStyled>
        </ButtonStyled>

        <ButtonStyled color={theme.common.white} bordered={true}>
          <GoogleIcon source={Images.google} />
          <TextStyled family="semiBold" color={theme.common.black}>
            {t('authentication.google')}
          </TextStyled>
        </ButtonStyled>

        <Separator />

        <ButtonStyled color={theme.common.elm}>
          <TextStyled family="semiBold">
            {t('authentication.signIn')}
          </TextStyled>
        </ButtonStyled>

        <SignUpContainer>
          <TextStyled family="semiBold" color={theme.common.black}>
            {t('authentication.signUp.uno')}
            <TextStyled family="bold" color={theme.common.black}>
              {t('authentication.signUp.dos')}
            </TextStyled>
          </TextStyled>
        </SignUpContainer>
      </Content>
    </Container>
  );
};
