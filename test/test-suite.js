'use strict';

const { spawnSync } = require('child_process');

let ret;

ret = spawnSync('mocha', ['test/test.js'], { stdio: 'inherit' });
if (ret.status !== 0) {
    return ret.status;
}

ret = spawnSync('phantomjs', [
    './node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js',
    'test/test.html',
    'spec',
    '{\"useColors\":true}'
], { stdio: 'inherit' });
if (ret.status !== 0) {
    return ret.status;
}

return 0;
