import React from 'react';
import { render } from '@testing-library/react-native';
import Toggle from '../index';

describe('Toggle - Acessibilidade', () => {
  it('deve ter atributos de acessibilidade corretos quando ativado', () => {
    const { getByRole } = render(
      <Toggle 
        value={true} 
        onValueChange={() => {}}
        accessibility="toggle-teste"
      />
    );
    
    const toggle = getByRole('switch');
    
    expect(toggle.props.accessibilityRole).toBe('switch');
    expect(toggle.props.accessibilityState).toEqual({
      checked: true,
      disabled: false,
    });
    expect(toggle.props.accessibilityLabel).toBe('Alternar. Estado atual: ativado');
    expect(toggle.props.accessibilityHint).toBe('Toque duas vezes para alternar');
  });

  it('deve ter atributos de acessibilidade corretos quando desativado', () => {
    const { getByRole } = render(
      <Toggle 
        value={false} 
        onValueChange={() => {}}
        accessibility="toggle-teste"
      />
    );
    
    const toggle = getByRole('switch');
    
    expect(toggle.props.accessibilityState.checked).toBe(false);
    expect(toggle.props.accessibilityLabel).toBe('Alternar. Estado atual: desativado');
  });

  it('deve ter atributos de acessibilidade corretos quando desabilitado', () => {
    const { getByRole } = render(
      <Toggle 
        value={true} 
        onValueChange={() => {}}
        isDisabled={true}
        accessibility="toggle-desabilitado"
      />
    );
    
    const toggle = getByRole('switch');
    
    expect(toggle.props.accessibilityState.disabled).toBe(true);
  });

  it('deve usar label específico quando fornecido', () => {
    const { getByRole } = render(
      <Toggle 
        value={true} 
        onValueChange={() => {}}
        accessibility="toggle-custom"
        accessibilityLabel="Modo escuro"
      />
    );
    
    const toggle = getByRole('switch');
    
    expect(toggle.props.accessibilityLabel).toBe('Modo escuro');
  });

  it('deve ter ID de teste padronizado', () => {
    const { getByTestId } = render(
      <Toggle 
        value={false} 
        onValueChange={() => {}}
        accessibility="toggle-teste"
        id="toggler"
      />
    );
    
    expect(getByTestId('toggle_toggler')).toBeTruthy();
  });

  it('deve gerar ID de teste a partir de accessibility quando id não for fornecido', () => {
    const { getByTestId } = render(
      <Toggle 
        value={false} 
        onValueChange={() => {}}
        accessibility="toggle-action"
      />
    );
    
    expect(getByTestId('toggle_toggle-action')).toBeTruthy();
  });
}); 