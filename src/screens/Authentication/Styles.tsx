import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';

export const FacebookIcon = styled(Entypo)`
  padding-left: 4px;
  margin-right: 10px;
`;

export const LogoContainer = styled.View`
  padding: 150px 0;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 228px;
`;

export const GoogleIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const RecoveryLink = styled.TouchableOpacity`
  margin: 40px 0 100px 0;
  align-items: center;
`;

export const Separator = styled.View`
  flex: 1;
  height: 1px;
  background-color: #e8ebf0;
  margin: 40px 0;
`;

export const SignUpContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 40px 0;
  align-items: center;
`;
