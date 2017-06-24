module.exports = {

  extends: 'eslint:recommended',

  rules: {

    //Warnings.
    'no-alert': [1],
    'no-console': [1],
    'no-warning-comments': [1, {terms: ['todo', 'tmp', 'temp', 'temporary', 'fixme']}],
    'no-sync': [1],

    //Best practices.
    'no-prototype-builtins': [2],
    'array-callback-return': [2],
    'consistent-return': [2],
    'curly': [2],
    'default-case': [2],
    'dot-location': [2, 'property'],
    'dot-notation': [2],
    'eqeqeq': [2, 'always'],
    'no-caller': [2],
    'no-eq-null': [2],
    'no-eval': [2],
    'no-extend-native': [2],
    'no-extra-label': [2],
    'no-floating-decimal': [2],
    'no-implicit-coercion': [2],
    'no-implied-eval': [2],
    'no-iterator': [2],
    'no-lone-blocks': [2],
    'no-multi-spaces': [2],
    'no-multi-str': [2],
    'no-new-func': [2],
    'no-octal-escape': [2],
    'no-param-reassign': [2],
    'no-proto': [2],
    'no-self-compare': [2],
    'no-sequences': [2],
    'no-throw-literal': [2],
    'no-unmodified-loop-condition': [2],
    'no-unused-expressions': [2, {allowShortCircuit: true, allowTernary: true}],
    'no-unused-vars': [2, {argsIgnorePattern: '^_$'}],
    'no-useless-call': [2],
    'no-useless-concat': [2],
    'no-useless-escape': [2],
    'no-with': [2],
    'radix': [2],
    'wrap-iife': [2],
    'yoda': [2, 'never'],
    'strict': [2],
    'no-catch-shadow': [2],
    'no-label-var': [2],
    'no-shadow-restricted-names': [2],
    'no-use-before-define': [2],
    'func-name-matching': [2],
    'no-useless-return': [2],
    'nonblock-statement-body-position': [2, 'beside'],
    'for-direction': [2],

    //Code quality.
    'consistent-this': [2, 'self'],
    'eol-last': [2],
    'func-style': [2],
    'class-methods-use-this': [2],
    'linebreak-style': [2],
    'max-len': [2, {code: 100}],
    'max-statements-per-line': [2, {max: 2}],
    'no-else-return': [2],
    'no-array-constructor': [2],
    'no-lonely-if': [2],
    'no-multiple-empty-lines': [2],
    'no-new-object': [2],
    'no-trailing-spaces': [2],
    'no-unneeded-ternary': [2],
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single', {avoidEscape: true, allowTemplateLiterals: false}],
    'unicode-bom': [2, 'never'],
    'max-depth': [2, {max: 5}],
    'max-nested-callbacks': [2, {max: 5}],
    'complexity': [2, {max: 12}],

    //Stylistic preferences.
    'indent': [2, 2, {MemberExpression: 0, SwitchCase: 1}],
    'new-cap': [2, {newIsCap: true, capIsNew: false}],
    'line-comment-position': [2, {position: 'above'}],
    'lines-around-directive': [2, 'always'],
    'no-spaced-func': [2],
    'array-bracket-spacing': [2, 'never'],
    'no-whitespace-before-property': [2],
    'object-curly-spacing': [2, 'never'],
    'semi': [2, 'always'],
    'semi-spacing': [2, {before: false, after: true}],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2],
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'camelcase': [2, {properties: 'always'}],
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'key-spacing': [2, {beforeColon: false, afterColon: true, mode: 'minimum'}],
    'brace-style': [2, '1tbs', {allowSingleLine: true}]
    'switch-colon-spacing': [2, {after: true, before: false}],
    'array-bracket-newline': [2, {multiline: true}],
    'array-element-newline': [2, {multiline: true}],
    'semi-style': [2, 'last'],
    'padding-line-between-statements': [2,
      {blankline: 'always', prev: '*', next: 'function'},
      {blankline: 'always', prev: 'function', next: '*'},
      {blankline: 'always', prev: '*', next: 'multiline-block-like'},
      {blankline: 'always', prev: 'multiline-block-like', next: '*'},
      {blankline: 'always': prev: 'directive', next: '*'},
      {blankline: 'never', prev: 'var', next: 'var'}
    ]

  }

}
