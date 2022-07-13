import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      wildBlueYonder: string;
      link: string;
      activeBtn: string;
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
