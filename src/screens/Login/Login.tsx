import React from 'react';
import { useTheme } from 'styled-components/native';
import {
  ButtonStyled,
  Container,
  Content,
  Input,
  TextStyled,
} from '../../components';
import { IconStyled, Logo, LogoContainer, RecoveryLink } from './Styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import schema from './schema';
import { Images } from '../../assets';

export const Login = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema()),
  });

  // const onSubmit = data => console.log(data);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo source={Images.homeLogo} />
        </LogoContainer>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors?.identification?.message?.toString()}
              placeholder={t('fields.identification')}
              iconLeft={
                <IconStyled name="user" size={20} color={theme.input.primary} />
              }
            />
          )}
          name="identification"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors?.password?.message?.toString()}
              placeholder={t('fields.password')}
              iconLeft={
                <IconStyled name="lock" size={20} color={theme.input.primary} />
              }
            />
          )}
          name="password"
        />

        <RecoveryLink>
          <TextStyled size="small" color={theme.common.link}>
            {t('login.recoveryPassword')}
          </TextStyled>
        </RecoveryLink>

        <ButtonStyled>
          <TextStyled family="bold" color="#fff">
            {t('login.signIn')}
          </TextStyled>
        </ButtonStyled>

        <ButtonStyled color="#fff">
          <TextStyled family="bold" color="#192850">
            {t('login.register')}
          </TextStyled>
        </ButtonStyled>
      </Content>
    </Container>
  );
};
