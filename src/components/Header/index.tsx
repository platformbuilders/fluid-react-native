import React, { Children, FC, ReactChild } from 'react';

import { isIOS } from '@platformbuilders/helpers/native';

import { HeaderTheme, IconFonts } from '../../enums';
import If from '../If';
import Shadow from '../Shadow';

import {
  ContentWrapper,
  StyledIcon,
  Subtitle,
  TextWrapper,
  Title,
  Wrapper,
} from './styles';

interface BaseProps {
  theme?: string;
  subtitle?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  leftIconName?: string;
  rightIconName?: string;
  accessibilityLeftIcon?: string;
  accessibilityRightIcon?: string;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
}

interface PropsWithTitleRequired extends BaseProps {
  title: string;
  children?: ReactChild | ReactChild[];
}

interface PropsWithChildrenRequired extends BaseProps {
  title?: string;
  children: ReactChild | ReactChild[];
}

type HeaderProps = PropsWithTitleRequired | PropsWithChildrenRequired;

export const DEFAULT_LEFT_ICON_NAME = 'arrow-left';
export const DEFAULT_RIGHT_ICON_NAME = 'times';

const Header: FC<HeaderProps> = ({
  children,
  title,
  theme = HeaderTheme.PRIMARY,
  subtitle = '',
  accessibilityLeftIcon = '',
  accessibilityRightIcon = '',
  showLeftIcon = true,
  showRightIcon = true,
  leftIconName = DEFAULT_LEFT_ICON_NAME,
  rightIconName = DEFAULT_RIGHT_ICON_NAME,
  onPressLeftIcon,
  onPressRightIcon,
}) => {
  const hasChildren = Children.count(children) > 0;
  const isIOSPlatform = isIOS();
  const isThemePrimary = theme === HeaderTheme.PRIMARY;

  return (
    <Wrapper isThemePrimary={isThemePrimary} isIOSPlatform={isIOSPlatform}>
      <Shadow hasShadow>
        <ContentWrapper
          isIOSPlatform={isIOSPlatform}
          isThemePrimary={isThemePrimary}
        >
          <If condition={showLeftIcon && leftIconName?.length > 0}>
            <StyledIcon
              isThemePrimary={isThemePrimary}
              accessibility={accessibilityLeftIcon || leftIconName}
              type={IconFonts.FontAwesome}
              onPress={onPressLeftIcon}
              name={leftIconName}
            />
          </If>
          {hasChildren ? (
            children
          ) : (
            <TextWrapper>
              <Title isThemePrimary={isThemePrimary}>{title}</Title>
              <If condition={subtitle?.length > 0}>
                <Subtitle isThemePrimary={isThemePrimary}>{subtitle}</Subtitle>
              </If>
            </TextWrapper>
          )}
          <If condition={showRightIcon && rightIconName?.length > 0}>
            <StyledIcon
              isThemePrimary={isThemePrimary}
              accessibility={accessibilityRightIcon || rightIconName}
              type={IconFonts.FontAwesome}
              onPress={onPressRightIcon}
              name={rightIconName}
            />
          </If>
        </ContentWrapper>
      </Shadow>
    </Wrapper>
  );
};

export default Header;
