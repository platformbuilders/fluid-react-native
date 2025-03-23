/**
 * Utilitários para acessibilidade
 */

type AccessibilityBaseProps = {
  id?: string;
  accessibility?: string;
  accessibilityLabel?: string;
  checked?: boolean;
  disabled?: boolean;
  busy?: boolean;
};

type AccessibilityRole =
  | 'none'
  | 'button'
  | 'link'
  | 'search'
  | 'image'
  | 'keyboardkey'
  | 'text'
  | 'adjustable'
  | 'checkbox'
  | 'header'
  | 'summary'
  | 'imagebutton'
  | 'switch'
  | 'tabbar'
  | 'combobox'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'scrollbar'
  | 'spinbutton'
  | 'tab'
  | 'tablist'
  | 'timer'
  | 'toolbar';

/**
 * Gera propriedades de acessibilidade para componentes
 * @param {AccessibilityBaseProps} props - Propriedades base de acessibilidade
 * @param {AccessibilityRole} role - O papel do componente para acessibilidade
 * @param {string} defaultLabel - Rótulo padrão caso accessibilityLabel não seja fornecido
 * @param {string} hint - Dica de acessibilidade (opcional)
 * @returns Objeto com propriedades de acessibilidade
 */
export const generateAccessibilityProps = (
  props: AccessibilityBaseProps,
  role: AccessibilityRole,
  defaultLabel?: string,
  hint?: string,
) => {
  const { accessibilityLabel, disabled, checked, busy } = props;

  // id não é usado diretamente nas props de acessibilidade

  return {
    accessible: true,
    accessibilityLabel: accessibilityLabel || defaultLabel,
    accessibilityRole: role,
    accessibilityState: {
      checked,
      disabled,
      busy,
    },
    ...(hint && { accessibilityHint: hint }),
  };
};

/**
 * Gera um ID de teste baseado no tipo de componente
 * @param {string} prefix - Prefixo para o testID (tipo de componente)
 * @param {string} id - ID da instância do componente
 * @returns ID de teste formatado
 */
export const generateTestID = (prefix: string, id?: string): string => {
  return id ? `${prefix}_${id}` : prefix;
};

/**
 * Gera valores de hitSlop para garantir área mínima de toque acessível
 * @param {number} currentSize - Tamanho atual do componente
 * @param {number} minSize - Tamanho mínimo recomendado para acessibilidade (padrão: 44)
 * @returns Objeto com valores de hitSlop
 */
export const generateAccessibleHitSlop = (
  currentSize: number,
  minSize = 44,
): Record<string, number> => {
  if (currentSize >= minSize) return { top: 0, bottom: 0, left: 0, right: 0 };

  const difference = Math.max(0, minSize - currentSize);
  const padding = Math.ceil(difference / 2);

  return {
    top: padding,
    bottom: padding,
    left: padding,
    right: padding,
  };
};
