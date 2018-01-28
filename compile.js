'use strict';

const { stringify } = require('querystring');
const { readFileSync } = require('fs');
const { request } = require('https');

const postData = stringify({
    'js_code': readFileSync(process.argv[2], 'utf-8'),
    'output_info': 'compiled_code'
});
const options = {
    hostname: 'closure-compiler.appspot.com',
    path: '/compile',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};
const req = request(options, res => {
    res.on('data', chunk => {
        process.stdout.write(chunk);
    });
});

req.on('error', e => {
    console.error(e);
});

req.write(postData);
req.end();
