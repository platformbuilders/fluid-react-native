(self['webpackChunkfluid_react_native_docs'] = self['webpackChunkfluid_react_native_docs'] || []).push([["362"], {
"./docs/components/typography.mdx": function (module, __webpack_exports__, __webpack_require__) {
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
globalThis.__RSPRESS_PAGE_META["components%2Ftypography.mdx"] = {
    "toc": [
        {
            "id": "importação",
            "text": "Importação",
            "depth": 2
        },
        {
            "id": "exemplo-básico",
            "text": "Exemplo Básico",
            "depth": 2
        },
        {
            "id": "exemplos",
            "text": "Exemplos",
            "depth": 2
        },
        {
            "id": "variantes-de-tamanho",
            "text": "Variantes de tamanho",
            "depth": 3
        },
        {
            "id": "com-linha-limitada-de-altura",
            "text": "Com linha limitada de altura",
            "depth": 3
        },
        {
            "id": "número-de-linhas-limitado",
            "text": "Número de linhas limitado",
            "depth": 3
        },
        {
            "id": "texto-animado",
            "text": "Texto animado",
            "depth": 3
        },
        {
            "id": "com-estilo-personalizado",
            "text": "Com estilo personalizado",
            "depth": 3
        },
        {
            "id": "api",
            "text": "API",
            "depth": 2
        },
        {
            "id": "props",
            "text": "Props",
            "depth": 3
        },
        {
            "id": "variantes-disponíveis",
            "text": "Variantes Disponíveis",
            "depth": 2
        },
        {
            "id": "notas-de-uso",
            "text": "Notas de uso",
            "depth": 2
        }
    ],
    "title": "Typography",
    "frontmatter": {}
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    var _components = Object.assign({
        h1: "h1",
        a: "a",
        p: "p",
        code: "code",
        h2: "h2",
        pre: "pre",
        h3: "h3",
        table: "table",
        thead: "thead",
        tr: "tr",
        th: "th",
        tbody: "tbody",
        td: "td",
        ul: "ul",
        li: "li"
    }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_.useMDXComponents)(), props.components);
    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.Fragment, {
        children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h1, {
                id: "typography",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#typography",
                        children: "#"
                    }),
                    "Typography"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                children: [
                    "O componente ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                        children: "Typography"
                    }),
                    " é utilizado para renderizar texto com estilos consistentes em toda a aplicação, seguindo o design system."
                ]
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
                    className: "language-tsx",
                    meta: "",
                    children: "import { Typography } from '@platformbuilders/fluid-react-native';\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "exemplo-básico",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#exemplo-básico",
                        children: "#"
                    }),
                    "Exemplo Básico"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-tsx",
                    meta: "",
                    children: "<Typography>Texto de exemplo</Typography>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "exemplos",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#exemplos",
                        children: "#"
                    }),
                    "Exemplos"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "variantes-de-tamanho",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#variantes-de-tamanho",
                        children: "#"
                    }),
                    "Variantes de tamanho"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-tsx",
                    meta: "",
                    children: "<Typography variant=\"min\">Texto muito pequeno</Typography>\n<Typography variant=\"xs\">Texto extra pequeno</Typography>\n<Typography variant=\"sm\">Texto pequeno</Typography>\n<Typography variant=\"md\">Texto médio (padrão)</Typography>\n<Typography variant=\"lg\">Texto grande</Typography>\n<Typography variant=\"xl\">Texto extra grande</Typography>\n<Typography variant=\"max\">Texto muito grande</Typography>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "com-linha-limitada-de-altura",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#com-linha-limitada-de-altura",
                        children: "#"
                    }),
                    "Com linha limitada de altura"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-tsx",
                    meta: "",
                    children: "<Typography\n  variant=\"md\"\n  lineHeightVariant=\"min\"\n>\n  Texto com altura de linha mínima\n</Typography>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "número-de-linhas-limitado",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#número-de-linhas-limitado",
                        children: "#"
                    }),
                    "Número de linhas limitado"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-tsx",
                    meta: "",
                    children: "<Typography\n  numberOfLines={2}\n>\n  Este texto será truncado se exceder duas linhas. Exemplo de texto longo para demonstrar a truncagem quando o conteúdo não cabe completamente no espaço reservado.\n</Typography>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "texto-animado",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#texto-animado",
                        children: "#"
                    }),
                    "Texto animado"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-tsx",
                    meta: "",
                    children: "<Typography\n  variant=\"animated\"\n>\n  Este texto pode ser animado\n</Typography>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "com-estilo-personalizado",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#com-estilo-personalizado",
                        children: "#"
                    }),
                    "Com estilo personalizado"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-tsx",
                    meta: "",
                    children: "<Typography\n  style={{ \n    color: '#3366ff',\n    fontWeight: 'bold',\n    textAlign: 'center'\n  }}\n>\n  Texto estilizado\n</Typography>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "api",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#api",
                        children: "#"
                    }),
                    "API"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
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
                                            children: "variant"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "TypographyVariants | TextVariant | 'normal' | 'animated'"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "'md'"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Variante de tamanho do texto"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "lineHeightVariant"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "TypographyVariants"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "'min'"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Variante de altura de linha"
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
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "string | string[] | ReactNode"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Conteúdo do texto"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "id"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "string"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "ID para o componente"
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
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "string"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Identificador de acessibilidade"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "numberOfLines"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "number"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Limita o número de linhas"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "animated"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "boolean"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "false"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se o texto deve ser animado (depreciado, use variant=\"animated\")"
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
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "StyleProp<TextStyle>"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Estilo personalizado"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "variantes-disponíveis",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#variantes-disponíveis",
                        children: "#"
                    }),
                    "Variantes Disponíveis"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O componente suporta as seguintes variantes de tamanho:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "min"
                            }),
                            ": Tamanho mínimo (10px)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "xs"
                            }),
                            ": Extra pequeno (12px)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "sm"
                            }),
                            ": Pequeno (13px)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "md"
                            }),
                            ": Médio (15px, padrão)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "lg"
                            }),
                            ": Grande (17px)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "xl"
                            }),
                            ": Extra grande (24px)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "max"
                            }),
                            ": Tamanho máximo (32px)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "animated"
                            }),
                            ": Para textos com animação"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "notas-de-uso",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#notas-de-uso",
                        children: "#"
                    }),
                    "Notas de uso"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "O componente aplica automaticamente as cores e tamanhos definidos no tema"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "Para texto animado, use ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "variant=\"animated\""
                            }),
                            " em vez da prop ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "animated"
                            })
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "A altura da linha é controlada pela prop ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "lineHeightVariant"
                            }),
                            ", independente do tamanho do texto"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                        children: "O componente pode receber qualquer outra propriedade válida do componente Text nativo"
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            "O testID é gerado a partir de ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "id"
                            }),
                            ", ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "accessibility"
                            }),
                            " ou do próprio conteúdo textual, nessa ordem de prioridade"
                        ]
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
//# sourceMappingURL=362.js.map