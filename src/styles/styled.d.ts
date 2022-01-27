import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: sting;

    colors: {
      background: string;
      headerBackground: string;
    };
  }
}
