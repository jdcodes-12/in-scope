const Configuration = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  /*
   * Any rules defined here will override rules from 
   * `@commitlint/config-conventional`.
   */
  rules: {
    'header-case': [1, 'always', 'start-case'],
    'header-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 120],
    'header-min-length': [2, 'always', 0],
    'body-full-stop': [2, 'always', '.'],
    'body-leading-blank': [2, 'always'],
    'body-empty': [2, 'never'],
    'body-max-length': [2, 'always', 1000],
    'body-max-line-length': [2, 'always', 100],
    'body-case': [2, 'always', 'sentence-case'],
    'footer-leading-blank': [2, 'always'],
    'footer-empty': [0, 'always'],
    'footer-max-length': [0, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [1, 'never'],
    'scope-max-length': [1, 'always', 36],
    'scope-min-length': [2, 'always', 0],
    'scope-enum': [1, 'always', [
      'ui', 'view', 'styling',
      'setup', 'misc'
    ]],
    'subject-case': [1, 'always', 'start-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', 5],
    'subject-exclamation-mark': [1, 'never'],
    'type-enum': [2, 'always',[
      'FEAT', 'EDIT', 'ADD',
      'REFAC',
      'TEST',
      'PM', 'REV',
      'CQ'
    ]],
    'type-case': [2, 'always', 'upper-case'],
    'type-empty': [2, 'never'],
    'type-max-length': [2, 'always', 36],
    'type-min-length': [2, 'always', 0]
  },
  defaultIgnores: true,
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

module.exports = Configuration;

