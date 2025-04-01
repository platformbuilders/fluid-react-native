(self['webpackChunkfluid_react_native_docs'] = self['webpackChunkfluid_react_native_docs'] || []).push([["148"], {
"./docs/components/button.mdx": function (module, __webpack_exports__, __webpack_require__) {
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
globalThis.__RSPRESS_PAGE_META["components%2Fbutton.mdx"] = {
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
            "id": "variantes-de-estilo",
            "text": "Variantes de Estilo",
            "depth": 3
        },
        {
            "id": "estados",
            "text": "Estados",
            "depth": 3
        },
        {
            "id": "com-ícones",
            "text": "Com Ícones",
            "depth": 3
        },
        {
            "id": "acessibilidade",
            "text": "Acessibilidade",
            "depth": 2
        },
        {
            "id": "exemplo-com-acessibilidade-personalizada",
            "text": "Exemplo com Acessibilidade Personalizada",
            "depth": 3
        },
        {
            "id": "boas-práticas-de-acessibilidade",
            "text": "Boas Práticas de Acessibilidade",
            "depth": 3
        },
        {
            "id": "props",
            "text": "Props",
            "depth": 2
        }
    ],
    "title": "Button",
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
                id: "button",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#button",
                        children: "#"
                    }),
                    "Button"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O componente Button fornece um botão acessível para ações do usuário."
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
                    children: "import { Button } from '@platformbuilders/fluid-react-native';\n"
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
                    children: "<Button \n  onPress={() => console.log('Botão pressionado')}\n  accessibility=\"botao-salvar\"\n>\n  Salvar\n</Button>\n"
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
                id: "variantes-de-estilo",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#variantes-de-estilo",
                        children: "#"
                    }),
                    "Variantes de Estilo"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "// Preenchido (padrão)\n<Button \n  onPress={handlePress}\n  accessibility=\"botao-primario\"\n  variant=\"filled\"\n  colorVariant=\"primary\"\n>\n  Botão Primário\n</Button>\n\n// Delineado\n<Button \n  onPress={handlePress}\n  accessibility=\"botao-secundario\"\n  variant=\"outline\"\n  colorVariant=\"secondary\"\n>\n  Botão Secundário\n</Button>\n\n// Texto plano\n<Button \n  onPress={handlePress}\n  accessibility=\"botao-texto\"\n  variant=\"text\"\n>\n  Botão Texto\n</Button>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "estados",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#estados",
                        children: "#"
                    }),
                    "Estados"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "// Desabilitado\n<Button \n  onPress={handlePress}\n  accessibility=\"botao-desabilitado\"\n  disabled\n>\n  Botão Desabilitado\n</Button>\n\n// Carregando\n<Button \n  onPress={handlePress}\n  accessibility=\"botao-carregando\"\n  loading\n>\n  Salvando...\n</Button>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "com-ícones",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#com-ícones",
                        children: "#"
                    }),
                    "Com Ícones"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "// Ícone à esquerda\n<Button \n  onPress={handlePress}\n  accessibility=\"botao-adicionar\"\n  leftIconName=\"plus\"\n>\n  Adicionar\n</Button>\n\n// Ícone à direita\n<Button \n  onPress={handlePress}\n  accessibility=\"botao-proximo\"\n  rightIconName=\"arrow-right\"\n>\n  Próximo\n</Button>\n"
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
                children: "O componente Button implementa as seguintes propriedades de acessibilidade:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "accessibilityLabel"
                            }),
                            ": Descrição do botão para leitores de tela"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "accessibilityRole"
                            }),
                            ": Definido como \"button\""
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "accessibilityState"
                            }),
                            ": Informa os estados \"disabled\" e \"busy\" (quando loading=true)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "accessibilityHint"
                            }),
                            ": Informa que o botão ativa ao ser pressionado"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "exemplo-com-acessibilidade-personalizada",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#exemplo-com-acessibilidade-personalizada",
                        children: "#"
                    }),
                    "Exemplo com Acessibilidade Personalizada"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Button \n  onPress={handlePress}\n  accessibility=\"botao-concluir\"\n  accessibilityLabel=\"Finalizar pedido\"\n  accessibilityHint=\"Pressione para concluir seu pedido\"\n>\n  Finalizar\n</Button>\n"
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
                                        children: "Use textos claros e específicos"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Evite termos genéricos como \"Clique aqui\" ou \"OK\""
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
                                        children: "Estados visíveis"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Garanta que o estado desabilitado seja visualmente claro"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Forneça feedback visual durante o carregamento"
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
                                        children: "Área de toque adequada"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "O botão tem área de toque mínima de 44x44dp"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Considere botões maiores para alvos mais fáceis de tocar"
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
                                        children: "Obrigatório"
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
                                        children: "Texto do botão"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Descrição do botão para leitores de tela"
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
                                            children: "children"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "ReactNode"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Conteúdo do botão"
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
                                        children: "Função chamada ao pressionar o botão"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "disabled"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "false"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se o botão está desabilitado"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "loading"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "false"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se o botão está em estado de carregamento"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "variant"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "'filled' | 'outline' | 'text'"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "'filled'"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Variante de estilo do botão"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "colorVariant"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "'primary'"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Variante de cor"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "typographyVariant"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "'md'"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Tamanho da tipografia"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "leftIconName"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Nome do ícone à esquerda"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "rightIconName"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Nome do ícone à direita"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "contrast"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "false"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Aumentar contraste (para fundos escuros)"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "rounded"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "false"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se o botão deve ter cantos arredondados"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "flat"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "false"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se o botão deve ser plano (sem sombra)"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "minWidth"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "number | string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Largura mínima do botão"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "maxWidth"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "number | string"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Largura máxima do botão"
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
                                        children: "ViewStyle"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Estilo customizado do botão"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "textStyle"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "TextStyle"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Estilo customizado do texto"
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
//# sourceMappingURL=148.js.map