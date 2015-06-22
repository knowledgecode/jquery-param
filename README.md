# jquery-param [![Circle CI](https://circleci.com/gh/knowledgecode/jquery-param.svg?style=shield)](https://circleci.com/gh/knowledgecode/jquery-param)

## Features
- equivalent to output of jQuery.param  
- not need jQuery  
- no dependency  
- legacy IE support  

## What is this good for?
In the case of making a GET/POST request in such as Web Workers which cannot use jQuery.

## Install
Node.js:
```shell
$ npm install jquery-param --save
```
Bower:
```shell
$ bower install jquery-param
```
browser:
```html
<script src="./src/jquery-param.min.js"></script>
```

## Usage
Node.js:
```javascript
var param = require('jquery-param');
var obj = { key1: 'value1', key2: [10, 20, 30] };

var str = param(obj);
// "key1=value1&key2%5B%5D=10&key2%5B%5D=20&key2%5B%5D=30"
```
browser:
```javascript
var obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };

var str = window.param(obj);
// "key1%5Bvalue1%5D%5B%5D=10&key1%5Bvalue1%5D%5B%5D=20&key1%5Bvalue1%5D%5B%5D=30&key2=%3Fa%3Db%26c%3Dd"
```

## Browser Support
Chrome, Firefox, Safari, Opera, and Internet Explorer 6+.

## License
MIT
