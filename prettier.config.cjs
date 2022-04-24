module.exports = {
  arrowParens: 'avoid',
  printWidth: 100,
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.md'],
      options: {
        printWidth: 120,
        proseWrap: 'preserve',
        tabWidth: 2,
      },
    },
  ],
};
