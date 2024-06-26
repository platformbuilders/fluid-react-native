import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import { themeFormatter } from '@platformbuilders/theme-toolkit';
import theme from '../src/theme';

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => (
      <ThemeProvider theme={theme}>
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: parameters.noBackground === true ? undefined : "#fff",
            padding: 8,
          }}
        >
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default preview;
