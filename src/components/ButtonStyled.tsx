import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
  color?: string;
  bordered?: boolean;
  borderColor?: string;
};

export const ButtonStyled = styled.TouchableOpacity<Props>`
  background: ${({ theme, color }) => color || theme.common.activeBtn};
  height: ${hp('7%') + 'px'};
  flex-direction: row;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-width: ${({ bordered }) => (bordered ? '1px' : 0)};
  border-color: ${({ borderColor }) =>
    borderColor ? borderColor : '#E5E5E5'}; ;
`;
