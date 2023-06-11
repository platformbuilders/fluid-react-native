import { ThemeProvider } from 'styled-components/native';

type AnyIfEmpty<T extends object> = keyof T extends never ? any : T

declare module 'styled-components' {
  export const ThemeContext: React.Context<AnyIfEmpty<DefaultTheme>>;
  export const ThemeProvider: ThemeProvider;
  export interface DefaultTheme {
    [key: string]: any;
  }
}
