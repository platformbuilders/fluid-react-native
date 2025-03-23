import { 
  generateAccessibilityProps, 
  generateTestID, 
  generateAccessibleHitSlop 
} from '../accessibility';

describe('Accessibility Utils', () => {
  describe('generateTestID', () => {
    it('should generate testID with prefix and id', () => {
      expect(generateTestID('button', 'submit')).toBe('button_submit');
    });

    it('should generate testID with only prefix when id is not provided', () => {
      expect(generateTestID('button')).toBe('button');
    });

    it('should handle empty prefix correctly', () => {
      expect(generateTestID('', 'submit')).toBe('_submit');
    });

    it('should handle empty id correctly', () => {
      expect(generateTestID('button', '')).toBe('button');
    });

    it('should handle undefined id correctly', () => {
      expect(generateTestID('button', undefined)).toBe('button');
    });

    it('should handle numeric id correctly', () => {
      expect(generateTestID('button', '123')).toBe('button_123');
    });

    it('should handle special characters in id correctly', () => {
      expect(generateTestID('button', 'special@#$')).toBe('button_special@#$');
    });
  });

  describe('generateAccessibilityProps', () => {
    it('should generate accessibility props with all parameters', () => {
      const props = {
        id: 'test-id',
        accessibility: 'test-accessibility',
        accessibilityLabel: 'Custom Label',
        checked: true,
        disabled: true,
        busy: true
      };
      
      const result = generateAccessibilityProps(
        props,
        'button',
        'Default Label',
        'This is a hint'
      );

      expect(result).toEqual({
        accessible: true,
        accessibilityLabel: 'Custom Label',
        accessibilityRole: 'button',
        accessibilityState: {
          checked: true,
          disabled: true,
          busy: true
        },
        accessibilityHint: 'This is a hint'
      });
    });

    it('should use default label when accessibilityLabel is not provided', () => {
      const props = {
        id: 'test-id',
        accessibility: 'test-accessibility',
      };
      
      const result = generateAccessibilityProps(
        props,
        'button',
        'Default Label'
      );

      expect(result.accessibilityLabel).toBe('Default Label');
    });

    it('should not include accessibilityHint when hint is not provided', () => {
      const props = {
        id: 'test-id',
        accessibility: 'test-accessibility',
      };
      
      const result = generateAccessibilityProps(
        props,
        'button',
        'Default Label'
      );

      expect(result.accessibilityHint).toBeUndefined();
    });

    it('should handle undefined checked value correctly', () => {
      const props = {
        id: 'test-id',
        accessibility: 'test-accessibility',
        checked: undefined,
      };
      
      const result = generateAccessibilityProps(
        props,
        'checkbox',
        'Default Label'
      );

      expect(result.accessibilityState.checked).toBeUndefined();
    });

    it('should handle undefined state values correctly', () => {
      const props = {
        id: 'test-id',
        accessibility: 'test-accessibility',
      };
      
      const result = generateAccessibilityProps(
        props,
        'button',
        'Default Label'
      );

      expect(result.accessibilityState).toEqual({
        checked: undefined,
        disabled: undefined,
        busy: undefined
      });
    });

    it('should handle empty accessibilityLabel correctly', () => {
      const props = {
        id: 'test-id',
        accessibility: 'test-accessibility',
        accessibilityLabel: '',
      };
      
      const result = generateAccessibilityProps(
        props,
        'button',
        'Default Label'
      );

      expect(result.accessibilityLabel).toBe('Default Label');
    });

    it('should handle empty hint correctly', () => {
      const props = {
        id: 'test-id',
        accessibility: 'test-accessibility',
      };
      
      const result = generateAccessibilityProps(
        props,
        'button',
        'Default Label',
        ''
      );

      expect(result.accessibilityHint).toBeUndefined();
    });

    it('should work with all possible accessibility roles', () => {
      const roles: Array<Parameters<typeof generateAccessibilityProps>[1]> = [
        'adjustable', 'button', 'checkbox', 'combobox', 'header', 'image', 
        'imagebutton', 'keyboardkey', 'link', 'menu', 'menubar', 'menuitem', 
        'none', 'progressbar', 'radio', 'radiogroup', 'scrollbar', 'search', 
        'spinbutton', 'summary', 'switch', 'tab', 'tabbar', 'tablist', 'text', 
        'timer', 'toolbar'
      ];
      
      roles.forEach(role => {
        const result = generateAccessibilityProps({}, role);
        expect(result.accessibilityRole).toBe(role);
      });
    });
  });

  describe('generateAccessibleHitSlop', () => {
    it('should generate zero hitSlop when current size is greater than or equal to minimum size', () => {
      const result = generateAccessibleHitSlop(50, 44);
      expect(result).toEqual({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      });
    });

    it('should generate equal hitSlop on all sides when current size is less than minimum size', () => {
      const result = generateAccessibleHitSlop(24, 44);
      expect(result).toEqual({
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
      });
    });

    it('should use default minimum size of 44 when not provided', () => {
      const result = generateAccessibleHitSlop(24);
      expect(result).toEqual({
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
      });
    });

    it('should handle edge case where current size is 0', () => {
      const result = generateAccessibleHitSlop(0);
      expect(result).toEqual({
        top: 22,
        bottom: 22,
        left: 22,
        right: 22
      });
    });

    it('should handle equal current size and minimum size', () => {
      const result = generateAccessibleHitSlop(44, 44);
      expect(result).toEqual({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      });
    });

    it('should handle negative current size by treating it as 0', () => {
      const result = generateAccessibleHitSlop(-10, 44);
      expect(result).toEqual({
        top: 27,
        bottom: 27,
        left: 27,
        right: 27
      });
    });

    it('should handle larger custom minimum sizes', () => {
      const result = generateAccessibleHitSlop(40, 60);
      expect(result).toEqual({
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
      });
    });

    it('should handle floating point values by rounding up', () => {
      const result = generateAccessibleHitSlop(33.3, 44);
      expect(result).toEqual({
        top: 6,
        bottom: 6,
        left: 6,
        right: 6
      });
    });
  });
}); 