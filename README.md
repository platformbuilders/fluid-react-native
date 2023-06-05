# @platformbuilders/fluid-react-native

[![Build Status][check-badge]][workflows]
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]
[![Docusaurus Firebase Deploy](https://github.com/platformbuilders/fluid-react-native/actions/workflows/docusaurus_release.yml/badge.svg)](https://github.com/platformbuilders/fluid-react-native/actions/workflows/docusaurus_release.yml)

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/fluid-react-native.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/fluid-react-native
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/fluid-react-native/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/fluid-react-native/actions
[check-badge]: https://github.com/platformbuilders/fluid-react-native/workflows/check/badge.svg

# Fluid React Native
A Fluid React Native é uma biblioteca de componentes UI pronta para uso, desenvolvida pela Platform Builders. Ela foi criada com o objetivo de acelerar o processo de desenvolvimento de aplicativos React Native, oferecendo uma ampla variedade de componentes prontos para serem utilizados.


**Instalação**

    npm install fluid-react-native
	//ou
    yarn add fluid-react-native

**Uso**
Após a instalação, você pode importar e utilizar os componentes da Fluid React Native em seu aplicativo. Aqui está um exemplo básico de como utilizar um botão da Fluid:

    import React from 'react';
    import { Button } from 'fluid-react-native';
    
    const App = () => {
      return (
        <Button title="Clique aqui" onPress={() => console.log('Botão clicado!')} />
      );
    }
    export default App;

## Como criar um componente na Fluid

Para criar um novo componente na Fluid React Native, você pode seguir os seguintes passos:

Crie um novo arquivo para o seu componente. Por exemplo, MeuComponente.js.

        import React from 'react';
        import { Text } from 'react-native';
        const MeuComponente = () => {
	        return (
		        <Text>Olá, Mundo!</Text>
		     );
	    }
	    export default MeuComponente;

  
  No arquivo src/components/index.ts exporte seu novo componente:

    export { default  as  MeuComponente } from  './MeuComponente';

***Não esqueça de criar testes para seu novo componente**
1.  Crie um arquivo de teste para o seu componente. Por exemplo, `MeuComponente.spec.js`. 
2. Escreva um teste para verificar se o componente é renderizado corretamente:

    	import React from 'react';
        import { render, getByText } from 'react-native-testing-library';
        import MeuComponente from './MeuComponente';
    	describe('MeuComponente', () => {
   	      it('deve renderizar corretamente', () => {
   	        const { getByText } = render(<MeuComponente />);
   	        const textoElement = getByText('Olá, Mundo!');
   	        expect(textElement).toBeDefined();
   	      });
   	    });
    
    Neste exemplo, estamos verificando se o texto "Olá, Mundo!" é renderizado corretamente no componente `MeuComponente`.
    
6.  Execute os testes para verificar se o componente está funcionando corretamente. No seu terminal, execute o seguinte comando:

        npm test
        // ou
        yarn test

## Como testar usando o Yalc

Certifique-se de ter o Yalc instalado globalmente em sua máquina. Se ainda não o tiver, você pode instalá-lo executando o seguinte comando:

    npm install -g yalc

Navegue até o diretório raiz do projeto da Fluid React Native.

Execute o comando yalc publish para publicar a biblioteca localmente:

    yalc publish

Isso fará com que a biblioteca Fluid React Native seja disponibilizada localmente por meio do Yalc.

No seu projeto React Native, navegue até o diretório raiz e execute o comando yalc add seguido do nome da biblioteca. Por exemplo:

    yalc add fluid-react-native

Isso adicionará a biblioteca Fluid React Native ao seu projeto localmente através do Yalc.

Agora você pode importar e utilizar os componentes da Fluid React Native em seu aplicativo normalmente.

Sempre que você fizer alterações na biblioteca Fluid React Native, execute o comando yalc push no diretório raiz do projeto para atualizar o pacote no seu projeto React Native:

    yalc publish --push

Isso fará com que as alterações sejam refletidas automaticamente no seu projeto React Native.
