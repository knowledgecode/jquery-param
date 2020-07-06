# jquery-param

[![Circle CI](https://circleci.com/gh/knowledgecode/jquery-param.svg?style=shield)](https://circleci.com/gh/knowledgecode/jquery-param)

## Features

- Equivalent to jQuery.param (based on jQuery 3.x)
- No dependencies
- Universal (Isomorphic)
- ES Modules Support

## Installation

Node.js:

```shell
npm install jquery-param --save
```

the browser:

```html
<script src="/path/to/jquery-param.min.js"></script>
```

## Usage

CommonJS:

```javascript
const param = require('jquery-param');

const obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
const str = param(obj);
// => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
```

TypeScript:

```javascript
import param from 'jquery-param';

const obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
const str = param(obj);
// => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
```

*You will need to add `"esModuleInterop": true` to the `"compilerOptions"` field in `tsconfig.json`.*

ES Modules:

```html
<script type="module">
import param from './esm/jquery-param.es.js';

const obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
const str = param(obj);
// => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
</script>
```

Older browser:

```html
<script>
var obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
var str = window.param(obj);    // global object
// => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
</script>
```

## Browser Support

Chrome, Firefox, Safari, Edge, and IE9+.

## License

MIT
