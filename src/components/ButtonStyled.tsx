import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity<{ color?: string }>`
  background: ${({ theme, color }) => color || theme.common.activeBtn};
  height: 45px;
  border-radius: 30px;
  padding: 10px;
  align-items: center;
  margin-top: 10px;
`;
