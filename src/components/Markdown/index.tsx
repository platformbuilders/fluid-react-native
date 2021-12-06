import React from 'react';
import { TextStyle } from 'react-native';
import Markdown from 'react-native-markdown-display';

type Props = {
  textStyle?: TextStyle;
};

const MarkdownRenderer: React.FC<Props> = ({ textStyle = {}, children }) => (
  <Markdown style={{ body: textStyle }}>{children}</Markdown>
);

export default MarkdownRenderer;
