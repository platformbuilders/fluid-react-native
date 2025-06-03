import React from 'react';
import { TextStyle } from 'react-native';
import Markdown from 'react-native-markdown-display';

type Props = {
  textStyle?: TextStyle;
  children?: any;
};

const MarkdownRenderer: React.FC<Props> = ({ textStyle = {}, children }) =>
  React.createElement(Markdown as any, { style: { body: textStyle } }, children);

export default MarkdownRenderer;
