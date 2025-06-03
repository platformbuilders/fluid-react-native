import React, { useState } from 'react';
import { head } from 'lodash';
import { Text, TouchableOpacity, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Markdown from '../Markdown';
import { AccordionType } from '../../types';
import If from '../If';
import { Icon } from './styles';

type Props = {
  StyledTitle?: JSX.Element | any;
  StyledBody?: JSX.Element | any;
  StyledHeader?: JSX.Element | any;
  StyledContent?: JSX.Element | any;
  data: AccordionType[];
  hasIcon?: boolean;
  iconUpName?: string;
  iconDownName?: string;
  activeIconColor?: string;
  inactiveIconColor?: string;
  isMarkdown?: boolean;
  onChange?(title: string): void;
};

const AccordionContainer: React.FC<Props> = ({
  StyledTitle = Text,
  StyledBody = Text,
  StyledHeader = View,
  StyledContent = View,
  data,
  hasIcon = false,
  iconUpName = 'chevron-up',
  iconDownName = 'chevron-down',
  activeIconColor,
  inactiveIconColor,
  isMarkdown = false,
  onChange,
}) => {
  const [activeSections, setActiveSections] = useState([]);

  const isActive = (section: AccordionType) => {
    const element = (item: AccordionType) => item.title === section.title;
    const index = data.findIndex(element);
    return index.toString() === activeSections.join('');
  };

  const getIconName = (section: AccordionType) =>
    isActive(section) ? iconUpName : iconDownName;

  type SectionType = {
    title: string;
    content: any;
  };

  const renderHeader = (section: SectionType) => {
    return (
      <StyledHeader isActive={isActive(section)}>
        <StyledTitle isActive={isActive(section)}>{section.title}</StyledTitle>
        <If condition={hasIcon}>
          <Icon
            name={getIconName(section)}
            color={isActive(section) ? activeIconColor : inactiveIconColor}
            id={iconUpName}
            accessibility={isActive(section) ? 'Fechar' : 'Abrir'}
          />
        </If>
      </StyledHeader>
    );
  };

  const renderContent = (section: SectionType) => {
    return (
      <StyledContent>
        <If condition={isMarkdown}>
          <Markdown>{section.content as any}</Markdown>
        </If>
        <If condition={!isMarkdown}>
          <StyledBody>{section.content as any}</StyledBody>
        </If>
      </StyledContent>
    );
  };

  const handleChange = (activeSectionsArray: []) => {
    const index: number = head(activeSectionsArray) || 0;
    if (onChange) onChange(data[index].title);
    setActiveSections(activeSectionsArray);
  };

  return (
    <Accordion
      sections={data as any}
      touchableComponent={TouchableOpacity as any}
      activeSections={activeSections as any}
      renderHeader={renderHeader as any}
      renderContent={renderContent as any}
      onChange={handleChange as any}
    />
  );
};

export default AccordionContainer;
