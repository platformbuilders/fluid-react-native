(self['webpackChunkfluid_react_native_docs'] = self['webpackChunkfluid_react_native_docs'] || []).push([["441"], {
"./docs/guide/accessibility.mdx": function (module, __webpack_exports__, __webpack_require__) {
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
globalThis.__RSPRESS_PAGE_META["guide%2Faccessibility.mdx"] = {
    "toc": [
        {
            "id": "princípios-de-acessibilidade",
            "text": "Princípios de Acessibilidade",
            "depth": 2
        },
        {
            "id": "recursos-de-acessibilidade-implementados",
            "text": "Recursos de Acessibilidade Implementados",
            "depth": 2
        },
        {
            "id": "propriedades-comuns-de-acessibilidade",
            "text": "Propriedades Comuns de Acessibilidade",
            "depth": 3
        },
        {
            "id": "testids-para-automação-de-testes",
            "text": "TestIDs para Automação de Testes",
            "depth": 3
        },
        {
            "id": "boas-práticas-por-tipo-de-componente",
            "text": "Boas Práticas por Tipo de Componente",
            "depth": 2
        },
        {
            "id": "botões-e-controles-interativos",
            "text": "Botões e Controles Interativos",
            "depth": 3
        },
        {
            "id": "campos-de-formulário",
            "text": "Campos de Formulário",
            "depth": 3
        },
        {
            "id": "imagens-e-mídia",
            "text": "Imagens e Mídia",
            "depth": 3
        },
        {
            "id": "testando-acessibilidade",
            "text": "Testando Acessibilidade",
            "depth": 2
        },
        {
            "id": "checklist-de-acessibilidade",
            "text": "Checklist de Acessibilidade",
            "depth": 2
        },
        {
            "id": "recursos-adicionais",
            "text": "Recursos Adicionais",
            "depth": 2
        }
    ],
    "title": "Acessibilidade",
    "frontmatter": {}
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    var _components = Object.assign({
        h1: "h1",
        a: "a",
        p: "p",
        h2: "h2",
        ol: "ol",
        li: "li",
        strong: "strong",
        h3: "h3",
        table: "table",
        thead: "thead",
        tr: "tr",
        th: "th",
        tbody: "tbody",
        td: "td",
        code: "code",
        pre: "pre",
        ul: "ul",
        input: "input"
    }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_.useMDXComponents)(), props.components);
    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.Fragment, {
        children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h1, {
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
                children: "A acessibilidade é uma parte fundamental do design do Fluid React Native. Nossa biblioteca foi desenvolvida com foco em tornar aplicações móveis acessíveis para todos os usuários, incluindo aqueles com deficiências visuais, auditivas, motoras ou cognitivas."
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "princípios-de-acessibilidade",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#princípios-de-acessibilidade",
                        children: "#"
                    }),
                    "Princípios de Acessibilidade"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O Fluid React Native segue os seguintes princípios de acessibilidade:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                                children: "Perceptível"
                            }),
                            ": Os componentes são projetados para serem perceptíveis por todos os usuários, independentemente de suas habilidades."
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                                children: "Operável"
                            }),
                            ": Os componentes podem ser operados por uma ampla gama de dispositivos de entrada."
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                                children: "Compreensível"
                            }),
                            ": A interface é projetada para ser clara, consistente e previsível."
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                                children: "Robusto"
                            }),
                            ": Os componentes funcionam com uma ampla variedade de tecnologias assistivas."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "recursos-de-acessibilidade-implementados",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#recursos-de-acessibilidade-implementados",
                        children: "#"
                    }),
                    "Recursos de Acessibilidade Implementados"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Todos os componentes do Fluid React Native implementam recursos de acessibilidade seguindo as melhores práticas para React Native, incluindo:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "propriedades-comuns-de-acessibilidade",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#propriedades-comuns-de-acessibilidade",
                        children: "#"
                    }),
                    "Propriedades Comuns de Acessibilidade"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.table, {
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.thead, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                            children: [
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.th, {
                                    children: "Propriedade"
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
                                            children: "accessibility"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Identificador único para o componente (usado também para gerar testIDs)"
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
                                        children: "Texto descritivo que será lido pelos leitores de tela"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "accessibilityHint"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Dica sobre o resultado da interação com o componente"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "accessibilityRole"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Papel do componente (ex: button, checkbox, header)"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "accessibilityState"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Estado atual do componente (ex: disabled, selected)"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "testids-para-automação-de-testes",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#testids-para-automação-de-testes",
                        children: "#"
                    }),
                    "TestIDs para Automação de Testes"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Nossos componentes seguem um padrão consistente para a geração de testIDs, facilitando a automação de testes. O padrão geral é:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    meta: "",
                    children: "componentType_identifier\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Por exemplo:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                            children: "button_submit"
                        })
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                            children: "textinput_email"
                        })
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                            children: "checkbox_terms"
                        })
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "boas-práticas-por-tipo-de-componente",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#boas-práticas-por-tipo-de-componente",
                        children: "#"
                    }),
                    "Boas Práticas por Tipo de Componente"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "botões-e-controles-interativos",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#botões-e-controles-interativos",
                        children: "#"
                    }),
                    "Botões e Controles Interativos"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Use verbos de ação claros em labels e descrições"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Garanta área de toque mínima de 44x44dp"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Sempre forneça feedback visual e tátil para interações"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Evite depender apenas de cores para indicar estados"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Button \n  accessibility=\"salvar-perfil\"\n  accessibilityLabel=\"Salvar alterações do perfil\"\n  onPress={handleSave}\n>\n  Salvar\n</Button>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "campos-de-formulário",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#campos-de-formulário",
                        children: "#"
                    }),
                    "Campos de Formulário"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Associe labels claros com campos de entrada"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Forneça mensagens de erro descritivas e acessíveis"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Use instruções explícitas em vez de placeholder como única indicação"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<TextInput\n  id=\"email\"\n  accessibility=\"campo-email\"\n  label=\"E-mail\"\n  placeholder=\"Digite seu e-mail\"\n  error={errors.email}\n  accessibilityLabel=\"Campo de entrada para seu endereço de e-mail\"\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "imagens-e-mídia",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#imagens-e-mídia",
                        children: "#"
                    }),
                    "Imagens e Mídia"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Sempre forneça texto alternativo descritivo para imagens"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Use rótulos claros para ícones e elementos gráficos"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "Garanta que informações não são transmitidas apenas por meio visual"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Image\n  accessibility=\"logo-empresa\"\n  accessibilityLabel=\"Logo da Empresa XYZ\"\n  source={require('./assets/logo.png')}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "testando-acessibilidade",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#testando-acessibilidade",
                        children: "#"
                    }),
                    "Testando Acessibilidade"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Recomendamos testar a acessibilidade de sua aplicação usando:"
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
                                        children: "Leitores de tela nativos"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "VoiceOver no iOS"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "TalkBack no Android"
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
                                        children: "Ferramentas de inspeção"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "React Native Accessibility Inspector"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Accessibility Scanner (Android)"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Accessibility Inspector (iOS)"
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
                                        children: "Testes automatizados"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Usando os TestIDs consistentes fornecidos pelos componentes"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Verificando atributos de acessibilidade em testes de integração"
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
                id: "checklist-de-acessibilidade",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#checklist-de-acessibilidade",
                        children: "#"
                    }),
                    "Checklist de Acessibilidade"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Use esta checklist ao implementar interfaces com Fluid React Native:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                className: "contains-task-list",
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        className: "task-list-item",
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }),
                            " ",
                            "Todos os elementos interativos têm labels de acessibilidade descritivos"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        className: "task-list-item",
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }),
                            " ",
                            "A hierarquia de navegação com leitor de tela é lógica"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        className: "task-list-item",
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }),
                            " ",
                            "Componentes visuais têm contraste de cores adequado"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        className: "task-list-item",
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }),
                            " ",
                            "Feedback é fornecido por múltiplos canais (visual, tátil)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        className: "task-list-item",
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }),
                            " ",
                            "Textos alternativos descrevem adequadamente imagens e ícones"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        className: "task-list-item",
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }),
                            " ",
                            "Todos os estados de componentes são comunicados corretamente"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        className: "task-list-item",
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }),
                            " ",
                            "Tamanhos de fonte são adequados e escaláveis"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        className: "task-list-item",
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }),
                            " ",
                            "Áreas de toque são grandes o suficiente (mínimo 44x44dp)"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "recursos-adicionais",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#recursos-adicionais",
                        children: "#"
                    }),
                    "Recursos Adicionais"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Para mais informações sobre acessibilidade em React Native:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                            href: "https://reactnative.dev/docs/accessibility",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Documentação oficial de acessibilidade do React Native"
                        })
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                            href: "https://www.w3.org/TR/WCAG21/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "WCAG 2.1 Guidelines"
                        })
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                            href: "https://formidable.com/blog/2019/react-native-accessibility/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Testing for Accessibility in React Native"
                        })
                    }),
                    "\n"
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
//# sourceMappingURL=441.js.map