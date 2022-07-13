import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const IconStyled = styled(Feather)`
  padding-left: 4px;
`;

export const LogoContainer = styled.View`
  padding: 100px 0;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 228px;
`;

export const RecoveryLink = styled.TouchableOpacity`
  margin: 40px 0 100px 0;
  align-items: center;
`;
