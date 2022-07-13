import styled from 'styled-components/native';

type Props = {
  color?: string;
  family?: string | 'regular' | 'medium' | 'semiBold' | 'bold';
  size?: number | 'huge' | 'big' | 'medium' | 'normal' | 'small' | 'tiny';
};

const Fonts: Record<string, string> = {
  regular: 'RedHatDisplay-Regular',
  medium: 'RedHatDisplay-Medium',
  semiBold: 'RedHatDisplay-SemiBold',
  bold: 'RedHatDisplay-Bold',
};

const getSize = (size: any, theme: any) => {
  if (!size) {
    return theme.fontSizes.normal;
  } else if (isNaN(size)) {
    return theme.fontSizes[size];
  }
  return size + 'px';
};

export const TextStyled = styled.Text<Props>`
  font-size: ${({ size, theme }) => getSize(size, theme)};
  font-family: ${({ family, theme }) =>
    family ? Fonts[family] : theme.fonts.regular};
  color: ${({ color, theme }) => color || theme.common.white};
`;
