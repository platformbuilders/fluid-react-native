import { isEmpty } from 'lodash';
import { AccessibilityProps, AccessibilityState } from 'react-native';

interface CommonAccessibilityProps {
  id?: string;
  accessibility?: string;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  selected?: boolean;
  checked?: boolean;
  busy?: boolean;
  expanded?: boolean;
}

/**
 * Gera propriedades de acessibilidade padronizadas para componentes.
 * 
 * @param props - Propriedades comuns relacionadas à acessibilidade
 * @param role - O papel de acessibilidade do componente
 * @param defaultAccessibilityLabel - Label padrão caso nenhum seja fornecido
 * @param hint - Dica de acessibilidade sobre o resultado da interação
 * @returns Objeto com propriedades de acessibilidade padronizadas
 */
export const generateAccessibilityProps = (
  props: CommonAccessibilityProps,
  role: AccessibilityProps['accessibilityRole'],
  defaultAccessibilityLabel: string,
  hint?: string,
): AccessibilityProps => {
  const {
    id,
    accessibility,
    accessibilityLabel,
    disabled,
    selected,
    checked,
    busy,
    expanded,
  } = props;

  const state: AccessibilityState = {};

  // Adiciona estados apenas se definidos explicitamente
  if (disabled !== undefined) state.disabled = disabled;
  if (selected !== undefined) state.selected = selected;
  if (checked !== undefined) state.checked = checked;
  if (busy !== undefined) state.busy = busy;
  if (expanded !== undefined) state.expanded = expanded;

  return {
    accessibilityLabel: accessibilityLabel || accessibility || defaultAccessibilityLabel,
    accessibilityRole: role,
    accessibilityState: !isEmpty(state) ? state : undefined,
    accessibilityHint: hint,
  };
};

/**
 * Gera um ID de teste padronizado para componentes.
 * 
 * @param props - Propriedades com ID ou valor de acessibilidade
 * @param componentType - Tipo do componente (ex: 'button', 'input')
 * @returns String padronizada para testID
 */
export const generateTestID = (
  props: { id?: string; accessibility?: string; testID?: string },
  componentType: string,
): string => {
  const { testID, id, accessibility } = props;
  return testID || id || `${componentType}_${accessibility || ''}`;
};

/**
 * Gera um hitSlop adequado para garantir área mínima de toque.
 * 
 * @param currentSize - Tamanho atual do componente
 * @param minimumSize - Tamanho mínimo recomendado (padrão: 44, conforme diretrizes WCAG)
 * @returns Objeto hitSlop com valores apropriados
 */
export const generateAccessibleHitSlop = (
  currentSize: number = 0,
  minimumSize: number = 44,
): { top: number; right: number; bottom: number; left: number } => {
  // Se o componente já tem tamanho adequado, retorna hitSlop mínimo
  if (currentSize >= minimumSize) {
    return { top: 5, right: 5, bottom: 5, left: 5 };
  }

  // Calcula quanto precisamos adicionar para atingir o tamanho mínimo
  const additional = Math.max(0, Math.ceil((minimumSize - currentSize) / 2));
  return {
    top: additional,
    right: additional,
    bottom: additional,
    left: additional,
  };
}; 