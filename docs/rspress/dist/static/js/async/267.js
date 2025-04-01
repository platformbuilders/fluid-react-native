(self['webpackChunkfluid_react_native_docs'] = self['webpackChunkfluid_react_native_docs'] || []).push([["267"], {
"./docs/components/media/icon.mdx": function (module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'default': function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* react/jsx-runtime */"./node_modules/react/jsx-runtime.js");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_);
/* harmony import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* @mdx-js/react */"./node_modules/@mdx-js/react/index.js");
var _globalThis;
var $ReactRefreshRuntime$ = __webpack_require__(/* /Volumes/git/builders/fluid-react-native/docs/rspress/node_modules/@rspack/dev-client/src/reactRefresh.js */"./node_modules/@rspack/dev-client/src/reactRefresh.js");
(_globalThis = globalThis).__RSPRESS_PAGE_META || (_globalThis.__RSPRESS_PAGE_META = {});
globalThis.__RSPRESS_PAGE_META["components%2Fmedia%2Ficon.mdx"] = {
    "toc": [
        {
            "id": "importação",
            "text": "Importação",
            "depth": 2
        },
        {
            "id": "uso-básico",
            "text": "Uso Básico",
            "depth": 2
        },
        {
            "id": "variações",
            "text": "Variações",
            "depth": 2
        },
        {
            "id": "tipos-de-ícones",
            "text": "Tipos de Ícones",
            "depth": 3
        },
        {
            "id": "tamanho-personalizado",
            "text": "Tamanho Personalizado",
            "depth": 3
        },
        {
            "id": "cor-personalizada",
            "text": "Cor Personalizada",
            "depth": 3
        },
        {
            "id": "emoji-como-ícone",
            "text": "Emoji como Ícone",
            "depth": 3
        },
        {
            "id": "ícones-touchable-ou-não-touchable",
            "text": "Ícones Touchable ou Não Touchable",
            "depth": 3
        },
        {
            "id": "dimensões-personalizadas-para-svgs",
            "text": "Dimensões Personalizadas (para SVGs)",
            "depth": 3
        },
        {
            "id": "cores-de-fundo-e-borda",
            "text": "Cores de Fundo e Borda",
            "depth": 3
        },
        {
            "id": "manipulação-de-eventos",
            "text": "Manipulação de Eventos",
            "depth": 2
        },
        {
            "id": "acessibilidade",
            "text": "Acessibilidade",
            "depth": 2
        },
        {
            "id": "exemplo-com-acessibilidade",
            "text": "Exemplo com Acessibilidade",
            "depth": 3
        },
        {
            "id": "boas-práticas-de-acessibilidade",
            "text": "Boas Práticas de Acessibilidade",
            "depth": 3
        },
        {
            "id": "testids",
            "text": "TestIDs",
            "depth": 2
        },
        {
            "id": "exemplo-de-uso-de-testids",
            "text": "Exemplo de uso de TestIDs",
            "depth": 3
        },
        {
            "id": "ícones-svg-customizados",
            "text": "Ícones SVG Customizados",
            "depth": 2
        },
        {
            "id": "props",
            "text": "Props",
            "depth": 2
        }
    ],
    "title": "Icon",
    "frontmatter": {}
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    var _components = Object.assign({
        h1: "h1",
        a: "a",
        p: "p",
        h2: "h2",
        pre: "pre",
        code: "code",
        h3: "h3",
        ul: "ul",
        li: "li",
        ol: "ol",
        strong: "strong",
        table: "table",
        thead: "thead",
        tr: "tr",
        th: "th",
        tbody: "tbody",
        td: "td"
    }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_.useMDXComponents)(), props.components);
    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.Fragment, {
        children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h1, {
                id: "icon",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#icon",
                        children: "#"
                    }),
                    "Icon"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O componente Icon fornece uma maneira fácil de utilizar ícones em sua aplicação, oferecendo suporte a várias bibliotecas de ícones, incluindo FontAwesome e Material, além de ícones SVG customizados e emojis."
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "importação",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#importação",
                        children: "#"
                    }),
                    "Importação"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "import { Icon } from '@platformbuilders/fluid-react-native';\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "uso-básico",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#uso-básico",
                        children: "#"
                    }),
                    "Uso Básico"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "import React from 'react';\nimport { View } from 'react-native';\nimport { Icon } from '@platformbuilders/fluid-react-native';\n\nconst BasicIconExample = () => (\n  <View>\n    <Icon \n      name=\"home\" \n      accessibility=\"Ícone de casa\"\n    />\n  </View>\n);\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "variações",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#variações",
                        children: "#"
                    }),
                    "Variações"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "tipos-de-ícones",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#tipos-de-ícones",
                        children: "#"
                    }),
                    "Tipos de Ícones"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                children: [
                    "O componente Icon suporta diferentes tipos de fontes de ícones, que podem ser definidos usando a propriedade ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                        children: "type"
                    }),
                    ":"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "import { Icon, IconFonts } from '@platformbuilders/fluid-react-native';\n\n// FontAwesome (padrão)\n<Icon \n  name=\"home\" \n  accessibility=\"Ícone de casa\"\n/>\n\n// Material Icons\n<Icon \n  name=\"home\" \n  accessibility=\"Ícone de casa\"\n  type={IconFonts.Material} \n/>\n\n// FontAwesome Brands\n<Icon \n  name=\"github\" \n  accessibility=\"Ícone do GitHub\"\n  type={IconFonts.FABrands} \n/>\n\n// FontAwesome Light\n<Icon \n  name=\"user\" \n  accessibility=\"Ícone de usuário\"\n  type={IconFonts.FALight} \n/>\n\n// FontAwesome Regular\n<Icon \n  name=\"bell\" \n  accessibility=\"Ícone de notificação\"\n  type={IconFonts.FARegular} \n/>\n\n// FontAwesome Solid\n<Icon \n  name=\"star\" \n  accessibility=\"Ícone de estrela\"\n  type={IconFonts.FASolid} \n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "tamanho-personalizado",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#tamanho-personalizado",
                        children: "#"
                    }),
                    "Tamanho Personalizado"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Icon \n  name=\"home\" \n  accessibility=\"Ícone de casa\"\n  size={30} \n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "cor-personalizada",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#cor-personalizada",
                        children: "#"
                    }),
                    "Cor Personalizada"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Icon \n  name=\"heart\" \n  accessibility=\"Ícone de coração\"\n  color=\"#FF0000\" \n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "emoji-como-ícone",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#emoji-como-ícone",
                        children: "#"
                    }),
                    "Emoji como Ícone"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Icon \n  name=\"👍\" \n  accessibility=\"Polegar para cima\"\n  isEmoji\n  size={24}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "ícones-touchable-ou-não-touchable",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#ícones-touchable-ou-não-touchable",
                        children: "#"
                    }),
                    "Ícones Touchable ou Não Touchable"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Por padrão, todos os ícones são touchable (podem ser pressionados). Para criar um ícone apenas visual:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Icon \n  name=\"info-circle\" \n  accessibility=\"Informação\"\n  touchable={false} \n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "dimensões-personalizadas-para-svgs",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#dimensões-personalizadas-para-svgs",
                        children: "#"
                    }),
                    "Dimensões Personalizadas (para SVGs)"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Icon \n  name=\"Profile\" // Nome do ícone SVG (primeira letra maiúscula)\n  accessibility=\"Perfil de usuário\"\n  width={40}\n  height={40}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "cores-de-fundo-e-borda",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#cores-de-fundo-e-borda",
                        children: "#"
                    }),
                    "Cores de Fundo e Borda"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Icon \n  name=\"check\" \n  accessibility=\"Ícone de confirmação\"\n  backgroundColor=\"#E0F7FA\"\n  borderColor=\"#00BCD4\"\n  size={24}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "manipulação-de-eventos",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#manipulação-de-eventos",
                        children: "#"
                    }),
                    "Manipulação de Eventos"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O Icon permite definir uma função para tratar o evento de clique:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "const IconButtonExample = () => {\n  const handleIconPress = () => {\n    // Ação quando o ícone for pressionado\n    console.log('Ícone foi pressionado');\n    // Ou navegação, feedback tátil, etc.\n  };\n  \n  return (\n    <Icon\n      name=\"arrow-right\"\n      accessibility=\"Avançar\"\n      onPress={handleIconPress}\n      size={24}\n      color=\"#007AFF\"\n    />\n  );\n};\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "acessibilidade",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#acessibilidade",
                        children: "#"
                    }),
                    "Acessibilidade"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O componente Icon implementa automaticamente recursos de acessibilidade, como:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "Os ícones são tratados como botões para leitores de tela (quando ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "touchable={true}"
                            }),
                            ")"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Utiliza propriedades de acessibilidade específicas para descrição do ícone"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Fornece área de toque adequada para facilitar interações"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "exemplo-com-acessibilidade",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#exemplo-com-acessibilidade",
                        children: "#"
                    }),
                    "Exemplo com Acessibilidade"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Icon\n  id=\"notifications\"\n  accessibility=\"Visualizar notificações\" \n  accessibilityLabel=\"Toque para abrir suas notificações\"\n  name=\"bell\"\n  onPress={() => navigation.navigate('Notifications')}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "boas-práticas-de-acessibilidade",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#boas-práticas-de-acessibilidade",
                        children: "#"
                    }),
                    "Boas Práticas de Acessibilidade"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                                        children: "Labels descritivos"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Use verbos de ação que descrevam o que o ícone faz quando pressionado"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Exemplo: \"Voltar para a tela anterior\" em vez de \"Seta para esquerda\""
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                                        children: "Tamanho adequado"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Use ícones com tamanho suficiente para fácil toque (recomendado 44x44 dp)"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "O tamanho mínimo recomendado é de 24x24 dp"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                                        children: "Contraste"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Garanta que a cor do ícone tenha contraste adequado com o fundo"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Considere usar cores do tema para manter a consistência visual"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "testids",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#testids",
                        children: "#"
                    }),
                    "TestIDs"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O componente Icon gera TestIDs automaticamente seguindo a hierarquia:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "Usa ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "testID"
                            }),
                            " se fornecido explicitamente"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "Usa ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "id"
                            }),
                            " se fornecido e ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "testID"
                            }),
                            " não estiver presente"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "Usa ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "accessibility"
                            }),
                            " como fallback final"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Este comportamento facilita a implementação de testes automatizados."
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "exemplo-de-uso-de-testids",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#exemplo-de-uso-de-testids",
                        children: "#"
                    }),
                    "Exemplo de uso de TestIDs"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "// Explícito (prioridade mais alta)\n<Icon\n  testID=\"icon_notification\"\n  name=\"bell\"\n  accessibility=\"Notificações\"\n/>\n\n// Usando ID (segunda prioridade)\n<Icon\n  id=\"notification\"\n  name=\"bell\"\n  accessibility=\"Notificações\"\n/>\n\n// Usando accessibility como fallback (terceira prioridade)\n<Icon\n  name=\"bell\"\n  accessibility=\"Notificações\"\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "ícones-svg-customizados",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#ícones-svg-customizados",
                        children: "#"
                    }),
                    "Ícones SVG Customizados"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O componente Icon também suporta ícones SVG personalizados:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "// Os ícones SVG devem ser importados em assets/svg\n// O formato deve ser IconNome.tsx (primeira letra maiúscula)\n\n<Icon\n  name=\"Profile\" // Corresponde a assets/svg/IconProfile.tsx\n  accessibility=\"Perfil do usuário\"\n  size={24}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "props",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#props",
                        children: "#"
                    }),
                    "Props"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.table, {
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.thead, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                            children: [
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.th, {
                                    children: "Prop"
                                }),
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.th, {
                                    children: "Tipo"
                                }),
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.th, {
                                    children: "Padrão"
                                }),
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.th, {
                                    children: "Descrição"
                                })
                            ]
                        })
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tbody, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "id"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "ID do componente"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "accessibility"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "ID para acessibilidade"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "accessibilityLabel"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Descrição para leitores de tela"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "testID"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "ID para testes"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "name"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Nome do ícone"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "size"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "number"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "22"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Tamanho do ícone em pixels"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "color"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Cor do ícone"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "backgroundColor"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Cor de fundo do ícone"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "borderColor"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Cor da borda do ícone"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "touchable"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "true"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se o ícone pode ser pressionado"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "type"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "IconFonts"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "IconFonts.FontAwesome"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Tipo de fonte do ícone"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "onPress"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "function"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Função chamada ao pressionar o ícone"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "style"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "StyleProp<TextStyle>"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Estilo personalizado para o ícone"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "isEmoji"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "false"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se o ícone é um emoji"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "width"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "number"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Largura para ícones SVG"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "height"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "number"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Altura para ícones SVG"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _Object_assign = Object.assign({}, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_.useMDXComponents)(), props.components), MDXLayout = _Object_assign.wrapper;
    return MDXLayout ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(MDXLayout, Object.assign({}, props, {
        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_createMdxContent, props)
    })) : _createMdxContent(props);
}
_c = MDXContent;
var __WEBPACK_DEFAULT_EXPORT__ = MDXContent;
var _c;
$RefreshReg$(_c, "MDXContent");
function $RefreshReg$(type, id) {
    $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
    $ReactRefreshRuntime$.refresh(module.id, module.hot);
});
},

}]);
//# sourceMappingURL=267.js.map