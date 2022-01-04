# Run Z Prettier Configuration

[![NPM][npm-image]][npm-url] [![Build Status][build-status-img]][build-status-link]
[![GitHub Project][github-image]][github-url]

Contains highly opinionated Prettier rules.

Used in [Hatsy], [proc7ts], [run-z], and [Wesib] projects.

[npm-image]: https://img.shields.io/npm/v/@run-z/prettier-config.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/@run-z/prettier-config
[build-status-img]: https://github.com/run-z/prettier-config/workflows/Build/badge.svg
[build-status-link]: https://github.com/run-z/prettier-config/actions?query=workflow:Build
[github-image]: https://img.shields.io/static/v1?logo=github&label=GitHub&message=project&color=informational
[github-url]: https://github.com/run-z/prettier-config
[hatsy]: https://github.com/hatsyjs
[proc7ts]: https://github.com/proc7ts
[run-z]: https://github.com/run-z
[wesib]: https://github.com/wesib

## Example Configuration

Add dependencies:

```shell
pnpm add -D prettier @run-z/prettier-config
```

Put the following to `.prettierrc.cjs`:

```javascript
module.exports = require('@run-z/prettier-config');
```
