---
kanban-plugin: basic
---

## Backlog

- [ ] Investigar erros `ReferenceError` no ambiente Jest após término dos testes
- [ ] Refatorar lógica de testIDs para evitar falhas com componentes aninhados
- [ ] Criar testes específicos para cenários de animação do TextInput
- [ ] Configurar CI para executar testes com thresholds personalizados
- [ ] Avaliar necessidade de thresholds personalizados para outros componentes
- [ ] Refinar documentação de testes nos arquivos README dos componentes
- [ ] Investigar warnings relacionados ao React 18 nos testes
- [ ] Implementar testes para configurações avançadas do MaskedTextInput

## Trabalho Atual

- [ ] Documentar decisões sobre thresholds personalizados no `.cursorrules`
- [ ] Adicionar comentários no código para áreas não cobertas por testes
- [ ] Melhorar testes para as linhas não cobertas do TextInput (219, 271)
- [ ] Melhorar testes para as linhas não cobertas do MaskedTextInput (13, 75-82)

## Próximos Passos

- [ ] Configurar thresholds personalizados no arquivo jest.config.js
- [ ] Preparar PR com melhorias na cobertura de testes
- [ ] Refatorar abordagem de testes para evitar dependência em elementos específicos

## Concluído

- [x] Corrigir testes quebrados no componente TextInput
- [x] Melhorar cobertura de testes do componente MaskedTextInput
- [x] Estabelecer threshold personalizado para TextInput (80% funções)
- [x] Estabelecer threshold personalizado para MaskedTextInput (70% geral)
- [x] Reescrever testes problemáticos com abordagem baseada em comportamento
- [x] Remover dependência de testIDs específicos nos testes
- [x] Adicionar testes para cenários de error no TextInput
- [x] Adicionar testes para diferentes maskTypes no MaskedTextInput
- [x] Verificar funcionamento de todos os testes com thresholds personalizados 