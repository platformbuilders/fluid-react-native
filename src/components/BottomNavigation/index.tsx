import React, { useCallback } from 'react';
import { useSpacingsWithSafeArea } from '@platformbuilders/helpers/native';
import {
  generateAccessibilityProps,
  generateTestID,
} from '../../utils/accessibility';
import { BottomNavigationWrapper, NavField, NavIcon, NavLabel } from './styles';

type Props = {
  fields: {
    routeName: string;
    onPress(): void;
    iconName: string;
    label: string;
  }[];
  currentRoute: string;
  activeFieldColor?: string;
};

const BottomNavigation: React.FC<Props> = ({
  fields,
  currentRoute,
  activeFieldColor,
}) => {
  const { bottomSpacing } = useSpacingsWithSafeArea();
  const renderFields = useCallback(
    () =>
      fields.map((navField) => {
        const isActive = navField.routeName === currentRoute;
        const baseAccessibilityId = navField.routeName;
        const defaultLabel = navField.label;
        const hint = `Ir para ${navField.label}${isActive ? ', item selecionado' : ''}`;

        const navFieldAccessibilityProps = generateAccessibilityProps(
          {
            id: navField.routeName,
            accessibility: baseAccessibilityId,
            accessibilityLabel: defaultLabel,
          },
          'button',
          defaultLabel,
          hint,
        );

        const navFieldTestID = generateTestID(
          'bottom_nav_item',
          baseAccessibilityId,
        );

        return (
          <NavField
            key={navField.routeName}
            {...navFieldAccessibilityProps}
            testID={navFieldTestID}
            onPress={navField.onPress}
          >
            <NavIcon
              importantForAccessibility="no"
              name={navField.iconName}
              active={isActive}
              activeColor={activeFieldColor}
              id={`Icon${navField.routeName}`}
            />

            <NavLabel
              active={isActive}
              activeColor={activeFieldColor}
              id={`Label${navField.routeName}`}
              importantForAccessibility="no"
            >
              {navField.label}
            </NavLabel>
          </NavField>
        );
      }),
    [fields, currentRoute, activeFieldColor],
  );

  return (
    <BottomNavigationWrapper bottomSpacing={bottomSpacing}>
      {renderFields()}
    </BottomNavigationWrapper>
  );
};

export default BottomNavigation;
