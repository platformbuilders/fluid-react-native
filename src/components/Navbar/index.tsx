import React, { useCallback } from 'react';
import { useSpacingsWithSafeArea } from '@platformbuilders/helpers/native';
import { NavField, NavIcon, NavLabel, NavbarWrapper } from './styles';

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

const Navbar: React.FC<Props> = ({
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
    <NavbarWrapper bottomSpacing={bottomSpacing}>
      {renderFields()}
    </NavbarWrapper>
  );
};

export default Navbar;
