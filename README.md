# @platformbuilders/fluid-react-native

[![Build Status][check-badge]][workflows]
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]
[![Docusaurus Firebase Deploy](https://github.com/platformbuilders/fluid-react-native/actions/workflows/docusaurus_release.yml/badge.svg)](https://github.com/platformbuilders/fluid-react-native/actions/workflows/docusaurus_release.yml)

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/fluid-react-native.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/fluid-react-native
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/fluid-react-native/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/fluid-react-native/actions
[check-badge]: https://github.com/platformbuilders/fluid-react-native/workflows/check/badge.svg

Welcome to the @platformbuilders/elements package here you will find out all of our components shared with the community

# Whats the idea of this repository

Its a place that we can share a little bit of our code base and show how we work on our projects with our components!

# How can i use the library?

Here's how you add our dependencie to your project @platformbuilders/elements

1. depend on it:

```bash
yarn add @platformbuilders/fluid-react-native
```

2. import the ThemeProvider from [styled-components](https://styled-components.com/docs/advanced) and provide the Theme following the ThemeType definition.

```jsx
import { ThemeProvider } from 'styled-components';
import { ThemeType } from '@platformbuilders/fluid-react-native';

const theme: ThemeType = { ... };

<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
```

3. use it

```jsx
import { Button } from '@platformbuilders/fluid-react-native';
```
