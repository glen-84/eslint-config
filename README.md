# ESLint config

A shareable [ESLint](https://eslint.org/) config for TypeScript projects.

## Installation

[Authenticate](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) with `npm login --registry=https://npm.pkg.github.com/` using your GitHub username and a personal access token (with the `read:packages` scope).

1. In the same directory as your `package.json` file, create or edit a `.npmrc` file to include the following line:
    ```npmrc
    @glen-84:registry=https://npm.pkg.github.com
    ```
2. Run `npm install @glen-84/eslint-config --save-dev`.
3. Add `"@glen-84"` to the `extends` property in your `.eslintrc.js` file.

## Development

Run `npm install` to install the project dependencies.

### Publishing a new version

[Authenticate](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) with `npm login --registry=https://npm.pkg.github.com/` using your GitHub username and a personal access token (with the `write:packages` scope).

1. Run `npm version patch` (replace `patch` [as necessary](https://docs.npmjs.com/cli/version)) to increase the version number.
2. Run `git push && git push --tags` to push the version commit and tag.
3. Run `npm publish` to publish the new version.

## Unused rules

### Has issues

* `@typescript-eslint/strict-boolean-expressions`
    * https://github.com/typescript-eslint/typescript-eslint/issues/1025
* `@typescript-eslint/unbound-method`
    * https://github.com/typescript-eslint/typescript-eslint/issues/636
    * https://github.com/typescript-eslint/typescript-eslint/issues/700
    * https://github.com/typescript-eslint/typescript-eslint/issues/743
* `lines-between-class-members`
    * https://github.com/typescript-eslint/typescript-eslint/issues/977
* `no-invalid-this`
    * https://github.com/typescript-eslint/typescript-eslint/issues/491
* `require-atomic-updates`
    * https://github.com/eslint/eslint/issues/11899

### Too strict

* `@typescript-eslint/no-extra-parens` – extra parentheses sometimes aid readability.
* `@typescript-eslint/no-magic-numbers` – difficult to follow, especially in existing projects.
* `@typescript-eslint/no-type-alias` – partly handled by `@typescript-eslint/consistent-type-definitions`.
* `init-declarations`
* `line-comment-position`
* `no-continue` – see discussion in https://github.com/airbnb/javascript/issues/1103.
* `no-else-return` – okay for guard clauses, but symmetry is preferred in other cases.
* `no-ternary`

### Handled by TypeScript

* `@typescript-eslint/no-unused-vars` – ts(6133) with `noUnusedLocals` and `noUnusedParameters`.
* `@typescript-eslint/typedef` – ts(7005), ts(7006), and ts(7008) with `noImplicitAny`.
* `constructor-super` – ts(2335) and ts(2377).
* `getter-return` – ts(2378).
* `no-const-assign` – ts(2588).
* `no-dupe-args` – ts(2300).
* `no-dupe-class-members` – ts(2393).
* `no-dupe-keys` – ts(1117).
* `no-func-assign` – ts(2539).
* `no-import-assign` – ts(2539).
* `no-new-symbol` – ts(2350).
* `no-obj-calls` – ts(2349).
* `no-setter-return` – ts(2408).
* `no-this-before-super` – ts(17009) and ts(17011).
* `no-undef` – ts(2304).
* `no-unreachable` – ts(7027) with `allowUnreachableCode: false`.
* `no-unsafe-negation` – ts(2358), ts(2360), and ts(2365).
* `valid-typeof` – ts(2367).

### Unnecessary

* `@typescript-eslint/no-untyped-public-signature` – unnecessary with `noImplicitAny: true` and `@typescript-eslint/explicit-function-return-type`.
* `block-scoped-var` – unnecessary with `no-var`.
* `brace-style` – unnecessary with `@typescript-eslint/brace-style`.
* `camelcase` – unnecessary with `@typescript-eslint/camelcase`.
* `consistent-this` – unnecessary with `@typescript-eslint/no-this-alias`.
* `func-call-spacing` – unnecessary with `@typescript-eslint/func-call-spacing`.
* `indent` – unnecessary with `@typescript-eslint/indent`.
* `no-array-constructor` – unnecessary with `@typescript-eslint/no-array-constructor`.
* `no-async-promise-executor` – unnecessary with `@typescript-eslint/no-misused-promises`.
* `no-constant-condition` – unnecessary with `@typescript-eslint/no-unnecessary-condition`.
* `no-empty-function` – unnecessary with `@typescript-eslint/no-empty-function`.
* `no-eq-null` – unnecessary with `eqeqeq`.
* `no-extra-label` – unnecessary with `no-labels`.
* `no-implicit-globals` – unnecessary with `parserOptions.sourceType = module`.
* `no-label-var` – unnecessary with `no-labels`.
* `no-magic-numbers` – unnecessary with `@typescript-eslint/no-magic-numbers`.
* `no-mixed-requires` – unnecessary with `one-var` (option `never`).
* `no-plusplus` – unnecessary with `@typescript-eslint/semi` (should not be affected by ASI).
* `no-redeclare` – unnecessary with `no-var`.
* `no-undefined` – unnecessary with `no-global-assign` and `no-shadow-restricted-names`.
* `no-unused-labels` – unnecessary with `no-labels`.
* `no-unused-vars` – unnecessary with `@typescript-eslint/no-unused-vars`.
* `no-use-before-define` – unnecessary with `@typescript-eslint/no-use-before-define`.
* `no-useless-constructor` – unnecessary with `@typescript-eslint/no-useless-constructor`.
* `nonblock-statement-body-position` – unnecessary with `curly`.
* `one-var-declaration-per-line` – unnecessary with `one-var`.
* `quotes` – unnecessary with `@typescript-eslint/quotes`.
* `require-await` – unnecessary with `@typescript-eslint/require-await`.
* `semi` – unnecessary with `@typescript-eslint/semi`.
* `sort-vars` – unnecessary with `one-var`.
* `space-before-function-paren` – unnecessary with `@typescript-eslint/space-before-function-paren`.
* `vars-on-top` – unnecessary with `no-var`.

### No use for

* `callback-return` – has false positives, and callback functions are not likely to be used much.
* `id-blacklist`
* `id-match` – unable to exclude import names.
* `max-lines`
* `max-params`
* `max-statements`
* `no-inline-comments`
* `no-process-env` – seems unnecessary.
* `no-restricted-imports`
* `no-restricted-modules`
* `no-restricted-syntax`
* `no-warning-comments`
* `sort-imports`
* `wrap-regex` – seems unnecessary.

### Revisit later

* `prefer-named-capture-group` – code must be targeting ES2018.

## Used rules with issues

* `@typescript-eslint/ban-types`
    * https://github.com/typescript-eslint/typescript-eslint/issues/842
* `@typescript-eslint/member-naming`
    * https://github.com/typescript-eslint/typescript-eslint/issues/816
* `@typescript-eslint/member-ordering`
    * https://github.com/typescript-eslint/typescript-eslint/issues/929
