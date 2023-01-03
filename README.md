# jquery-param

[![Circle CI](https://circleci.com/gh/knowledgecode/jquery-param.svg?style=shield)](https://circleci.com/gh/knowledgecode/jquery-param)

## Features

- Equivalent to jQuery.param (based on jQuery 3.x)
- No dependencies
- Universal (Isomorphic)
- ES Modules Support

## Installation

via npm:

```shell
npm i jquery-param
```

## Usage

```javascript
import param from 'jquery-param';

const obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
const str = param(obj);
// => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
```

CommonJS:

```javascript
const param = require('jquery-param');

const obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
const str = param(obj);
// => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
```

ES Modules (Browser):

```html
<script type="module">
import param from '/path/to/jquery-param.js';

const obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
const str = param(obj);
// => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
</script>
```

Traditional (Browser):

```html
<script src="/path/to/jquery-param.js">
<script>
var obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
var str = window.param(obj);
// => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
</script>
```

## Browser Support

Chrome, Firefox, Safari, Edge, and IE9+.

## License

MIT
