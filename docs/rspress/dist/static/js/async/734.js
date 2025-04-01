(self['webpackChunkfluid_react_native_docs'] = self['webpackChunkfluid_react_native_docs'] || []).push([["734"], {
"./docs/components/media/avatar.mdx": function (module, __webpack_exports__, __webpack_require__) {
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
globalThis.__RSPRESS_PAGE_META["components%2Fmedia%2Favatar.mdx"] = {
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
            "id": "com-imagem",
            "text": "Com Imagem",
            "depth": 3
        },
        {
            "id": "com-monograma-iniciais",
            "text": "Com Monograma (Iniciais)",
            "depth": 3
        },
        {
            "id": "com-upload-de-imagem",
            "text": "Com Upload de Imagem",
            "depth": 3
        },
        {
            "id": "customizações-visuais",
            "text": "Customizações Visuais",
            "depth": 3
        },
        {
            "id": "métodos-e-referências",
            "text": "Métodos e Referências",
            "depth": 2
        },
        {
            "id": "métodos-disponíveis-via-ref",
            "text": "Métodos Disponíveis via Ref",
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
    "title": "Avatar",
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
                id: "avatar",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#avatar",
                        children: "#"
                    }),
                    "Avatar"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O componente Avatar exibe uma imagem de perfil do usuário, com suporte para carregamento de imagens da galeria, monograma quando não há imagem, e várias opções de personalização."
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
                    children: "import { Avatar } from '@platformbuilders/fluid-react-native';\n"
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
                    children: "<Avatar \n  accessibility=\"foto-perfil\"\n  size={80}\n  name=\"João Silva\"\n/>\n"
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
                id: "com-imagem",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#com-imagem",
                        children: "#"
                    }),
                    "Com Imagem"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "// Imagem externa\n<Avatar \n  accessibility=\"avatar-usuario\" \n  image={{ uri: 'https://example.com/avatar.jpg' }}\n  size={60}\n/>\n\n// Imagem local\n<Avatar \n  accessibility=\"avatar-usuario\" \n  image={require('./assets/avatar.png')}\n  size={60}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "com-monograma-iniciais",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#com-monograma-iniciais",
                        children: "#"
                    }),
                    "Com Monograma (Iniciais)"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Quando não há imagem definida, o Avatar pode exibir um monograma com as iniciais do nome:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "<Avatar \n  accessibility=\"avatar-iniciais\"\n  name=\"Maria Oliveira\"\n  size={80}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "com-upload-de-imagem",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#com-upload-de-imagem",
                        children: "#"
                    }),
                    "Com Upload de Imagem"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "const handleUpload = (imageUri) => {\n  console.log('Imagem carregada:', imageUri);\n  // Salvar a imagem ou enviar para o servidor\n};\n\n<Avatar \n  accessibility=\"avatar-upload\"\n  name=\"Pedro Santos\"\n  size={100}\n  onUpload={handleUpload}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "customizações-visuais",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#customizações-visuais",
                        children: "#"
                    }),
                    "Customizações Visuais"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "// Personalização de borda\n<Avatar \n  accessibility=\"avatar-customizado\"\n  name=\"Ana Souza\"\n  size={70}\n  showBorder={true}\n  borderWidth={3}\n  borderColor=\"#FF5722\"\n/>\n\n// Personalização do monograma\n<Avatar \n  accessibility=\"avatar-monograma-customizado\"\n  name=\"Carlos Ferreira\"\n  size={80}\n  monogramStyle={{ \n    backgroundColor: '#4CAF50',\n    color: '#FFFFFF'\n  }}\n/>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "métodos-e-referências",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#métodos-e-referências",
                        children: "#"
                    }),
                    "Métodos e Referências"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "O componente Avatar suporta o uso de referências (ref) para acessar métodos internos:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-jsx",
                    meta: "",
                    children: "import React, { useRef } from 'react';\nimport { Button, Avatar } from '@platformbuilders/fluid-react-native';\n\nconst ProfileScreen = () => {\n  const avatarRef = useRef(null);\n  \n  const handleUploadPress = () => {\n    // Abre o seletor de imagens\n    avatarRef.current.openPicker();\n  };\n  \n  const handleClearPress = () => {\n    // Limpa a imagem carregada\n    avatarRef.current.clearUploadImage();\n  };\n  \n  return (\n    <>\n      <Avatar \n        ref={avatarRef}\n        accessibility=\"foto-perfil\"\n        size={100}\n        name=\"José Silva\"\n        onUpload={(uri) => console.log(uri)}\n      />\n      \n      <Button onPress={handleUploadPress}>\n        Selecionar Imagem\n      </Button>\n      \n      <Button onPress={handleClearPress}>\n        Limpar Imagem\n      </Button>\n    </>\n  );\n};\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "métodos-disponíveis-via-ref",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#métodos-disponíveis-via-ref",
                        children: "#"
                    }),
                    "Métodos Disponíveis via Ref"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "openPicker()"
                            }),
                            ": Abre o seletor de imagens da galeria"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "getUploadImage()"
                            }),
                            ": Retorna a URI da imagem atualmente carregada"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "clearUploadImage()"
                            }),
                            ": Limpa a imagem carregada"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "takePicture()"
                            }),
                            ": Se configurado com uma câmera, captura uma foto"
                        ]
                    }),
                    "\n"
                ]
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
                children: "O componente Avatar implementa as seguintes propriedades de acessibilidade:"
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
                            ": Descrição do avatar para leitores de tela"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "accessibilityRole"
                            }),
                            ": Definido automaticamente como \"image\" ou \"button\" (quando interativo)"
                        ]
                    }),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.li, {
                        children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                children: "accessibilityState"
                            }),
                            ": Informa o estado \"disabled\" quando apropriado"
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
                    children: "<Avatar \n  accessibility=\"avatar-perfil\"\n  accessibilityLabel=\"Foto de perfil de João Silva\"\n  name=\"João Silva\"\n  size={80}\n/>\n"
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
                                        children: "Use descrições claras e específicas"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Inclua o nome da pessoa quando relevante"
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
                                        children: "Use um tamanho mínimo de 44x44dp para avatares interativos"
                                    }),
                                    "\n",
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.li, {
                                        children: "Considere tamanhos maiores para melhor usabilidade"
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
                                        children: "'Upload de Avatar'"
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
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.td, {
                                        children: [
                                            "valor de ",
                                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                                children: "accessibility"
                                            })
                                        ]
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Descrição do avatar para leitores de tela"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "image"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "ImageSourcePropType"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Fonte da imagem (URI ou recurso local)"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "animatedLoading"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "true"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se deve mostrar animação de carregamento"
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
                                        children: "50"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Tamanho do avatar em pixels"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "imageQuality"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "number"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "0.5"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Qualidade da imagem ao fazer upload (0-1)"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "borderWidth"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "number"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "2"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Largura da borda"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "showBorder"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "true"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se deve mostrar borda"
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
                                        children: "Cor da borda (usa a cor primária do tema se não especificada)"
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
                                        children: "Função chamada ao pressionar o avatar"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "onUpload"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "function"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Função chamada quando uma imagem é carregada pelo seletor"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "displayMonogram"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "boolean"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "true"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Se deve mostrar o monograma quando não há imagem"
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
                                        children: "Nome usado para gerar o monograma"
                                    })
                                ]
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.tr, {
                                children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                            children: "monogramStyle"
                                        })
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "StyleProp<TextStyle>"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "-"
                                    }),
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.td, {
                                        children: "Estilo personalizado para o monograma"
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
//# sourceMappingURL=734.js.map