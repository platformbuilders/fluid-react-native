import React, { useCallback } from 'react';
import { useSpacingsWithSafeArea } from '@platformbuilders/helpers/native';
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
      fields.map((navField) => (
        <NavField
          key={navField.routeName}
          accessibility={`Ir para ${navField.label}`}
          onPress={navField.onPress}
          id={navField.routeName}
        >
          <NavIcon
            accessibility={navField.iconName}
            name={navField.iconName}
            active={navField.routeName === currentRoute}
            activeColor={activeFieldColor}
            id={`Icon${navField.routeName}`}
          />

          <NavLabel
            active={navField.routeName === currentRoute}
            activeColor={activeFieldColor}
            id={`Label${navField.routeName}`}
          >
            {navField.label}
          </NavLabel>
        </NavField>
      )),
    [fields, currentRoute],
  );

  return (
    <BottomNavigationWrapper bottomSpacing={bottomSpacing}>
      {renderFields()}
    </BottomNavigationWrapper>
  );
};

export default BottomNavigation;
