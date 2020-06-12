"use strict";

const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module"
    },
    plugins: ["@typescript-eslint"],
    // IMPORTANT: Please keep these rules in alphabetical order.
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", {default: "array-simple"}],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/brace-style": "error",
        "@typescript-eslint/class-literal-property-style": "error",
        "@typescript-eslint/comma-spacing": "error",
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                assertionStyle: "as",
                objectLiteralTypeAssertions: "never"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/func-call-spacing": "error",
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    "signature",

                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",

                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",

                    "public-abstract-field",
                    "protected-abstract-field",
                    "private-abstract-field",

                    "constructor",

                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",

                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",

                    "public-abstract-method",
                    "protected-abstract-method",
                    "private-abstract-method"
                ]
            }
        ],
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["strictCamelCase"]
            },
            {
                selector: "typeLike",
                format: ["StrictPascalCase"]
            },
            {
                selector: "typeParameter",
                format: ["PascalCase"],
                custom: {
                    // Examples: T, U, V, TKey, TValue, TContextType, T1, T10.
                    regex: /^[A-Z]([A-Z][a-z]+|\d)*$/.source,
                    match: true
                }
            },
            {
                selector: "property",
                modifiers: ["public", "static", "readonly"],
                format: ["UPPER_CASE"]
            },
            // https://github.com/typescript-eslint/typescript-eslint/issues/816
            {
                selector: "property",
                modifiers: ["private"],
                format: ["strictCamelCase"],
                leadingUnderscore: "allow"
            },
            // Allow the special "toJSON" method to use non-strict camel case.
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
            {
                selector: "method",
                filter: /^toJSON$/.source,
                format: ["camelCase"]
            },
            // https://github.com/typescript-eslint/typescript-eslint/issues/1510
            {
                selector: "parameter",
                format: ["strictCamelCase"],
                leadingUnderscore: "allow"
            }
        ],
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-extraneous-class": ["error", {allowWithDecorator: true}],
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": ["error", {allowDestructuring: true}],
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": [
            "error",
            {allowConstantLoopConditions: true}
        ],
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {allowShortCircuit: true, allowTernary: true}
        ],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/quotes": ["error", "double", {avoidEscape: true}],
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": ["error", {checkCompoundAssignments: true}],
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            // Numbers should be localized (f.e. using Intl.NumberFormat).
            {allowBoolean: true, allowNumber: false}
        ],
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/space-before-function-paren": ["error", {named: "never"}],
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error",
        "accessor-pairs": "error",
        "array-bracket-newline": ["error", "consistent"],
        "array-bracket-spacing": "error",
        "array-callback-return": "error",
        "array-element-newline": ["error", "consistent"],
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-spacing": ["error", "always"],
        "capitalized-comments": [
            "error",
            "always",
            {
                block: {ignoreInlineComments: true},
                line: {ignoreConsecutiveComments: true}
            }
        ],
        "class-methods-use-this": "error",
        "comma-dangle": "error",
        "comma-style": "error",
        "complexity": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "curly": "error",
        "default-case-last": "error",
        "default-case": "error",
        "dot-location": ["error", "property"],
        "eol-last": "error",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-name-matching": [
            "error",
            {considerPropertyDescriptor: true, includeCommonJSModuleExports: true}
        ],
        "func-names": ["error", "as-needed"],
        "func-style": ["error", "declaration", {allowArrowFunctions: true}],
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "multiline-arguments"],
        "generator-star-spacing": ["error", "after"],
        "global-require": "error",
        "grouped-accessor-pairs": ["error", "getBeforeSet"],
        "guard-for-in": "error",
        "handle-callback-err": "error",
        "id-length": ["error", {min: 1, max: 40}],
        "implicit-arrow-linebreak": "error",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "linebreak-style": "error",
        "lines-around-comment": ["error", {allowBlockStart: true}],
        "max-classes-per-file": "error",
        "max-depth": "error",
        "max-len": ["error", 120],
        "max-lines-per-function": ["error", 100],
        "max-nested-callbacks": ["error", 3],
        "max-statements-per-line": "error",
        "multiline-comment-style": ["error", "separate-lines"],
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": ["error", {capIsNew: false}],
        "new-parens": "error",
        "newline-per-chained-call": ["error", {ignoreChainWithDepth: 4}],
        "no-alert": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "error",
        "no-console": "error",
        "no-constructor-return": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-dupe-else-if": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": ["error", {includeExports: true}],
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-misleading-character-class": "error",
        "no-mixed-operators": ["error", {allowSamePrecedence: false}],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": ["error", {max: 1, maxBOF: 1, maxEOF: 0}],
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": [
            "error",
            {
                // See https://github.com/eslint/eslint/issues/10428.
                restrictedNamedExports: ["default", "then"]
            }
        ],
        "no-restricted-globals": ["error", "isFinite", "isNaN"].concat(confusingBrowserGlobals),
        "no-restricted-properties": [
            "error",
            {
                object: "global",
                property: "isFinite",
                message: "Please use Number.isFinite instead."
            },
            {
                object: "self",
                property: "isFinite",
                message: "Please use Number.isFinite instead."
            },
            {
                object: "window",
                property: "isFinite",
                message: "Please use Number.isFinite instead."
            },
            {
                object: "global",
                property: "isNaN",
                message: "Please use Number.isNaN instead."
            },
            {
                object: "self",
                property: "isNaN",
                message: "Please use Number.isNaN instead."
            },
            {
                object: "window",
                property: "isNaN",
                message: "Please use Number.isNaN instead."
            },
            {
                property: "__defineGetter__",
                message: "Please use Object.defineProperty instead."
            },
            {
                property: "__defineSetter__",
                message: "Please use Object.defineProperty instead."
            }
        ],
        "no-return-assign": ["error", "always"],
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-sync": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", {defaultAssignment: false}],
        "no-unsafe-finally": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": ["error", {enforceForClassMembers: true}],
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": ["error", {minProperties: 4, multiline: true, consistent: true}],
        "object-curly-spacing": "error",
        "object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "operator-assignment": "error",
        "operator-linebreak": [
            "error",
            "before",
            {
                overrides: {
                    "=": "after",
                    "+=": "after",
                    "-=": "after",
                    "*=": "after",
                    "/=": "after",
                    "%=": "after",
                    "**=": "after",
                    "<<=": "after",
                    ">>=": "after",
                    ">>>=": "after",
                    "&=": "after",
                    "^=": "after",
                    "|=": "after"
                }
            }
        ],
        "padded-blocks": ["error", "never"],
        "padding-line-between-statements": [
            "error",
            // Require blank line before `return` statements.
            {blankLine: "always", prev: "*", next: "return"},
            // Require blank line after directives.
            {blankLine: "always", prev: "directive", next: "*"},
            {blankLine: "any", prev: "directive", next: "directive"}
        ],
        "prefer-arrow-callback": "error",
        "prefer-const": ["error", {ignoreReadBeforeAssign: true}],
        "prefer-destructuring": [
            "error",
            {
                VariableDeclarator: {
                    array: false,
                    object: true
                },
                AssignmentExpression: {
                    array: true,
                    object: false
                }
            }
        ],
        "prefer-exponentiation-operator": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "radix": "error",
        "require-unicode-regexp": "error",
        "require-yield": "error",
        "rest-spread-spacing": "error",
        "semi-spacing": "error",
        "semi-style": "error",
        "sort-keys": ["error", "asc", {caseSensitive: false, minKeys: 10, natural: true}],
        "space-before-blocks": "error",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": ["error", "never"],
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "use-isnan": ["error", {enforceForIndexOf: true}],
        "wrap-iife": ["error", "inside"],
        "yield-star-spacing": "error",
        "yoda": "error"
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            // The following rules apply only to TypeScript files.
            rules: {
                "@typescript-eslint/explicit-function-return-type": "error",
                "@typescript-eslint/explicit-member-accessibility": "error"
            }
        }
    ],
    reportUnusedDisableDirectives: true
};
