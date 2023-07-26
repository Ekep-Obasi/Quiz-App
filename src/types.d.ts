interface themeTypes {
  theme?: {
    colors: {
      primary: string;
      white: string;
      dark: {
        light: string;
        medium: string;
        dark: string;
      };
      grey: {
        light: string;
        medium: string;
        dark: string;
      };
      yellow: string;
    };
    fontFamily: string[];
    fontSizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    fontWeights: {
      light: number;
      normal: number;
      bold: number;
    };
    linearGradient: string;
    textShadow: string;
  };
}
