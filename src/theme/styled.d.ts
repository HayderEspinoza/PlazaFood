import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      white: string;
      black: string;
      wildBlueYonder: string;
      link: string;
      activeBtn: string;
      facebook: string;
      elm: string;
    };
    input: {
      primary: string;
      textColor: string;
      error: string;
    };
    fonts: {
      regular: string;
    };
    fontSizes: {
      huge: string;
      big: string;
      medium: string;
      normal: string;
      small: string;
      tiny: string;
    };
  }
}
