(function (global) {
    'use strict';

    describe('equivalence', function () {
        var $,
            expect = global.expect || require('expect.js'),
            param = global.param || require('../jquery-param'),
            test = function (done, obj) {
                try {
                    expect(decodeURIComponent(param(obj))).to.eql(decodeURIComponent($.param(obj)));
                    done();
                } catch (e) {
                    done(e);
                }
            };

        before(function (done) {
            if (global.jQuery) {
                $ = global.jQuery;
            } else {
                var _window = (new (require('jsdom').JSDOM)()).window;
                $ = require('jquery')(_window);
                _window.close();
            }
            done();
        });

        it('ascii', function (done) {
            var obj = {
                foo: 'bar'
            };
            test(done, obj);
        });

        it('non-ascii', function (done) {
            var obj = {
                foo: 'こんにちは'
            };
            test(done, obj);
        });

        it('number', function (done) {
            var obj = {
                foo: 12345
            };
            test(done, obj);
        });

        it('boolean', function (done) {
            var obj = {
                foo: true
            };
            test(done, obj);
        });

        // Array #1 (ascii)
        it('Array #1', function (done) {
            var obj = {
                foo: ['hello', 'world', '!']
            };
            test(done, obj);
        });
        // Array #2 (non-ascii)
        it('Array #2', function (done) {
            var obj = {
                foo: ['こんにちは', '世界', '！']
            };
            test(done, obj);
        });
        // Array #3 (number)
        it('Array #3', function (done) {
            var obj = {
                foo: [0, 1, 2]
            };
            test(done, obj);
        });
        // Array #4 (boolean)
        it('Array #4', function (done) {
            var obj = {
                foo: [true, false, true]
            };
            test(done, obj);
        });
        // Array #5 (Array)
        it('Array #5', function (done) {
            var obj = {
                'foo': ['[]', '[]', '[]']
            };
            test(done, obj);
        });
        // Array #6 (Object)
        it('Array #6', function (done) {
            var obj = {
                foo: [{}, {}, {}]
            };
            test(done, obj);
        });
        // Array #7 (Date)
        it('Array #7', function (done) {
            var obj = {
                foo: [new Date(), new Date(), new Date()]
            };
            test(done, obj);
        });
        // Array #8 (Error)
        it('Array #8', function (done) {
            var obj = {
                foo: [new Error(), new Error(), new Error()]
            };
            test(done, obj);
        });
        // Array #9 (Function)
        it('Array #9', function (done) {
            var obj = {
                foo: [new Function(), new Function(), new Function()]   // eslint-disable-line no-new-func
            };
            test(done, obj);
        });
        // Array #10 (RegExp)
        it('Array #10', function (done) {
            var obj = {
                foo: [/[[]]/, /[[]]/, /[[]]/]
            };
            test(done, obj);
        });
        // Array #11 (function)
        it('Array #11', function (done) {
            var obj = {
                foo: [function () {}, function () {}, function () {}]
            };
            test(done, obj);
        });
        // Array #12 (null)
        it('Array #12', function (done) {
            var obj = {
                foo: [null, null, null]
            };
            test(done, obj);
        });
        // Array #13 (undefined)
        it('Array #13', function (done) {
            var obj = {
                foo: [undefined, undefined, undefined]
            };
            test(done, obj);
        });
        // Array #14 (NaN)
        it('Array #14', function (done) {
            var obj = {
                foo: [NaN, NaN, NaN]
            };
            test(done, obj);
        });

        // Object #1 (ascii)
        it('Object #1', function (done) {
            var obj = {
                foo: { bar: 'hello' }
            };
            test(done, obj);
        });
        // Object #2 (non-ascii)
        it('Object #2', function (done) {
            var obj = {
                foo: { bar: 'こんにちは' }
            };
            test(done, obj);
        });
        // Object #3 (number)
        it('Object #3', function (done) {
            var obj = {
                foo: { bar: 3.14 }
            };
            test(done, obj);
        });
        // Object #4 (boolean)
        it('Object #4', function (done) {
            var obj = {
                foo: { bar: false }
            };
            test(done, obj);
        });
        // Object #5 (Array)
        it('Object #5', function (done) {
            var obj = {
                foo: { bar: [1, 2, 3] }
            };
            test(done, obj);
        });
        // Object #6 (Object)
        it('Object #6', function (done) {
            var obj = {
                foo: { bar: {} }
            };
            test(done, obj);
        });
        // Object #7 (Date)
        it('Object #7', function (done) {
            var obj = {
                foo: { bar: new Date() }
            };
            test(done, obj);
        });
        // Object #8 (Error)
        it('Object #8', function (done) {
            var obj = {
                foo: { bar: new Error() }
            };
            test(done, obj);
        });
        // Object #9 (Function)
        it('Object #9', function (done) {
            var obj = {
                foo: { bar: new Function() }    // eslint-disable-line no-new-func
            };
            test(done, obj);
        });
        // Object #10 (RegExp)
        it('Object #10', function (done) {
            var obj = {
                foo: { bar: /[[]]/ }
            };
            test(done, obj);
        });
        // Object #11 (function)
        it('Object #11', function (done) {
            var obj = {
                foo: { bar: function () {} }
            };
            test(done, obj);
        });
        // Object #12 (null)
        it('Object #12', function (done) {
            var obj = {
                foo: { bar: null }
            };
            test(done, obj);
        });
        // Object #13 (undefined)
        it('Object #13', function (done) {
            var obj = {
                foo: { bar: undefined }
            };
            test(done, obj);
        });
        // Object #14 (NaN)
        it('Object #14', function (done) {
            var obj = {
                foo: { bar: NaN }
            };
            test(done, obj);
        });

        it('String', function (done) {
            var obj = {
                foo: new String()   // eslint-disable-line no-new-wrappers
            };
            test(done, obj);
        });

        it('Number', function (done) {
            var obj = {
                foo: new Number()   // eslint-disable-line no-new-wrappers
            };
            test(done, obj);
        });

        it('Boolean', function (done) {
            var obj = {
                foo: new Boolean()  // eslint-disable-line no-new-wrappers
            };
            test(done, obj);
        });

        it('Date', function (done) {
            var obj = {
                foo: new Date()
            };
            test(done, obj);
        });

        it('Error', function (done) {
            var obj = {
                foo: new Error()
            };
            test(done, obj);
        });

        it('Function', function (done) {
            var obj = {
                foo: new Function() // eslint-disable-line no-new-func
            };
            test(done, obj);
        });

        it('RegExp', function (done) {
            var obj = {
                foo: /[[]]/
            };
            test(done, obj);
        });

        it('null', function (done) {
            var obj = {
                foo: null
            };
            test(done, obj);
        });

        it('undefined', function (done) {
            var obj = {
                foo: undefined
            };
            test(done, obj);
        });

        it('NaN', function (done) {
            var obj = {
                foo: NaN
            };
            test(done, obj);
        });

        // function #1 (ascii)
        it('function #1', function (done) {
            var obj = {
                foo: function () {
                    return 'hello';
                }
            };
            test(done, obj);
        });
        // function #2 (non-ascii)
        it('function #2', function (done) {
            var obj = {
                foo: function () {
                    return 'こんにちは';
                }
            };
            test(done, obj);
        });
        // function #3 (number)
        it('function #3', function (done) {
            var obj = {
                foo: function () {
                    return 0;
                }
            };
            test(done, obj);
        });
        // function #4 (boolean)
        it('function #4', function (done) {
            var obj = {
                foo: function () {
                    return false;
                }
            };
            test(done, obj);
        });
        // function #5 (Array)
        it('function #5', function (done) {
            var obj = {
                foo: function () {
                    return [];
                }
            };
            test(done, obj);
        });
        // function #6 (Object)
        it('function #6', function (done) {
            var obj = {
                foo: function () {
                    return {};
                }
            };
            test(done, obj);
        });
        // function #7 (Date)
        it('function #7', function (done) {
            var obj = {
                foo: function () {
                    return new Date();
                }
            };
            test(done, obj);
        });
        // function #8 (Error)
        it('function #8', function (done) {
            var obj = {
                foo: function () {
                    return new Error();
                }
            };
            test(done, obj);
        });
        // function #9 (Function)
        it('function #9', function (done) {
            var obj = {
                foo: function () {
                    return new Function();  // eslint-disable-line no-new-func
                }
            };
            test(done, obj);
        });
        // function #10 (RegExp)
        it('function #9', function (done) {
            var obj = {
                foo: function () {
                    return /[[]]/;
                }
            };
            test(done, obj);
        });
        // function #11 (function)
        it('function #11', function (done) {
            var obj = {
                foo: function () {
                    return function () {
                        return undefined;
                    };
                }
            };
            test(done, obj);
        });
        // function #12 (null)
        it('function #12', function (done) {
            var obj = {
                foo: function () {
                    return null;
                }
            };
            test(done, obj);
        });
        // function #13 (undefined)
        it('function #13', function (done) {
            var obj = {
                foo: function () {
                    return undefined;
                }
            };
            test(done, obj);
        });
        // function #14 (NaN)
        it('function #14', function (done) {
            var obj = {
                foo: function () {
                    return NaN;
                }
            };
            test(done, obj);
        });

        // Array in Array #1 (ascii)
        it('Array in Array #1', function (done) {
            var obj = {
                foo: [
                    ['hello', 'world', '!'],
                    ['hello', 'world', '!'],
                    ['hello', 'world', '!']
                ]
            };
            test(done, obj);
        });
        // Array in Array #2 (non-ascii)
        it('Array in Array #2', function (done) {
            var obj = {
                foo: [
                    ['こんにちは', '世界', '！'],
                    ['こんにちは', '世界', '！'],
                    ['こんにちは', '世界', '！']
                ]
            };
            test(done, obj);
        });
        // Array in Array #3 (number)
        it('Array in Array #3', function (done) {
            var obj = {
                foo: [
                    [-1, 0, 1],
                    [-1, 0, 1],
                    [-1, 0, 1]
                ]
            };
            test(done, obj);
        });
        // Array in Array #4 (boolean)
        it('Array in Array #4', function (done) {
            var obj = {
                foo: [
                    [true, false, true],
                    [true, false, true],
                    [true, false, true]
                ]
            };
            test(done, obj);
        });
        // Array in Array #5 (Array)
        it('Array in Array #5', function (done) {
            var obj = {
                foo: [
                    [[], [], []],
                    [[], [], []],
                    [[], [], []]
                ]
            };
            test(done, obj);
        });
        // Array in Array #6 (Object)
        it('Array in Array #6', function (done) {
            var obj = {
                foo: [
                    [{}, {}, {}],
                    [{}, {}, {}],
                    [{}, {}, {}]
                ]
            };
            test(done, obj);
        });
        // Array in Array #7 (Date)
        it('Array in Array #7', function (done) {
            var obj = {
                foo: [
                    [new Date(), new Date(), new Date()],
                    [new Date(), new Date(), new Date()],
                    [new Date(), new Date(), new Date()]
                ]
            };
            test(done, obj);
        });
        // Array in Array #8 (Error)
        it('Array in Array #8', function (done) {
            var obj = {
                foo: [
                    [new Error(), new Error(), new Error()],
                    [new Error(), new Error(), new Error()],
                    [new Error(), new Error(), new Error()]
                ]
            };
            test(done, obj);
        });
        // Array in Array #9 (Function)
        it('Array in Array #9', function (done) {
            var obj = {
                foo: [
                    [new Function(), new Function(), new Function()],   // eslint-disable-line no-new-func
                    [new Function(), new Function(), new Function()],   // eslint-disable-line no-new-func
                    [new Function(), new Function(), new Function()]    // eslint-disable-line no-new-func
                ]
            };
            test(done, obj);
        });
        // Array in Array #10 (RegExp)
        it('Array in Array #10', function (done) {
            var obj = {
                foo: [
                    [/[[]]/, /[[]]/, /[[]]/],
                    [/[[]]/, /[[]]/, /[[]]/],
                    [/[[]]/, /[[]]/, /[[]]/]
                ]
            };
            test(done, obj);
        });
        // Array in Array #11 (function)
        it('Array in Array #11', function (done) {
            var obj = {
                foo: [
                    [function () {}, function () {}, function () {}],
                    [function () {}, function () {}, function () {}],
                    [function () {}, function () {}, function () {}]
                ]
            };
            test(done, obj);
        });
        // Array in Array #12 (null)
        it('Array in Array #12', function (done) {
            var obj = {
                foo: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null]
                ]
            };
            test(done, obj);
        });
        // Array in Array #13 (undefined)
        it('Array in Array #13', function (done) {
            var obj = {
                foo: [
                    [undefined, undefined, undefined],
                    [undefined, undefined, undefined],
                    [undefined, undefined, undefined]
                ]
            };
            test(done, obj);
        });
        // Array in Array #14 (NaN)
        it('Array in Array #14', function (done) {
            var obj = {
                foo: [
                    [NaN, NaN, NaN],
                    [NaN, NaN, NaN],
                    [NaN, NaN, NaN]
                ]
            };
            test(done, obj);
        });

        // Object in Object #1 (ascii)
        it('Object in Object #1', function (done) {
            var obj = {
                foo: {
                    'hello': 'hello',
                    'world': 'world',
                    '!': '!'
                }
            };
            test(done, obj);
        });
        // Object in Object #2 (non-ascii)
        it('Object in Object #2', function (done) {
            var obj = {
                foo: {
                    'こんにちは': 'こんにちは',
                    '世界': '世界',
                    '！': '！'
                }
            };
            test(done, obj);
        });
        // Object in Object #3 (number)
        it('Object in Object #3', function (done) {
            var obj = {
                foo: {
                    '-1': -1,
                    '0': 0,
                    '1': 1
                }
            };
            test(done, obj);
        });
        // Object in Object #4 (boolean)
        it('Object in Object #4', function (done) {
            var obj = {
                foo: {
                    'true': true,
                    'false': false
                }
            };
            test(done, obj);
        });
        // Object in Object #5 (Array)
        it('Object in Object #5', function (done) {
            var obj = {
                foo: {
                    '[]': [],
                    '[[]]': [[]],
                    '[[[]]]': [[[]]]
                }
            };
            test(done, obj);
        });
        // Object in Object #6 (Object)
        it('Object in Object #6', function (done) {
            var obj = {
                foo: {
                    '{}': {},
                    '{{}}': { '{}': {} },
                    '{{{}}}': { '{}': { '{}': {} } }
                }
            };
            test(done, obj);
        });
        // Object in Object #7 (Date)
        it('Object in Object #7', function (done) {
            var obj = {
                foo: {
                    'date1': new Date(),
                    'date2': new Date(),
                    'date3': new Date()
                }
            };
            test(done, obj);
        });
        // Object in Object #8 (Error)
        it('Object in Object #8', function (done) {
            var obj = {
                foo: {
                    'error1': new Error(),
                    'error2': new Error(),
                    'error3': new Error()
                }
            };
            test(done, obj);
        });
        // Object in Object #9 (Function)
        it('Object in Object #9', function (done) {
            var obj = {
                foo: {
                    'Function1': new Function(),    // eslint-disable-line no-new-func
                    'Function2': new Function(),    // eslint-disable-line no-new-func
                    'Function3': new Function()     // eslint-disable-line no-new-func
                }
            };
            test(done, obj);
        });
        // Object in Object #10 (RegExp)
        it('Object in Object #10', function (done) {
            var obj = {
                foo: {
                    '/[[]]/': /[[]]/,
                    '/[[[]]]/': /[[[]]]/,
                    '/[[[[]]]]/': /[[[[]]]]/
                }
            };
            test(done, obj);
        });
        // Object in Object #11 (function)
        it('Object in Object #11', function (done) {
            var obj = {
                foo: {
                    'function1': function () {},
                    'function2': function () {},
                    'function3': function () {}
                }
            };
            test(done, obj);
        });
        // Object in Object #12 (null)
        it('Object in Object #12', function (done) {
            var obj = {
                foo: {
                    'null1': null,
                    'null2': null,
                    'null3': null
                }
            };
            test(done, obj);
        });
        // Object in Object #13 (undefined)
        it('Object in Object #13', function (done) {
            var obj = {
                foo: {
                    'undefined1': undefined,
                    'undefined2': undefined,
                    'undefined3': undefined
                }
            };
            test(done, obj);
        });
        // Object in Object #14 (NaN)
        it('Object in Object #14', function (done) {
            var obj = {
                foo: {
                    'NaN1': NaN,
                    'NaN2': NaN,
                    'NaN3': NaN
                }
            };
            test(done, obj);
        });

        it('Extended Object', function (done) {
            var P = function () {};
            var obj = Object.create(P.prototype);

            P.prototype.foo = function () { return [1, 2, 3]; };
            obj.bar = { 'undefined': 'null' };
            test(done, obj);
        });

        it('Mixed Array #1', function (done) {
            var obj = {
                foo: [undefined, null, NaN, new Date(), / /],
                bar: {
                    1: undefined,
                    2: null,
                    3: NaN,
                    4: new Date(),
                    5: / /
                }
            };
            test(done, obj);
        });
        it('Mixed Array #2', function (done) {
            var obj = [
                { name: 'foo', value: 'bar' },
                { name: 'foo', value: 'bar' },
                { name: 'name', value: 'value' },
                { name: null, value: null },
                { name: undefined, value: undefined },
                { foo: 'name', bar: 'value' },
                { foo: null, bar: null },
                { foo: undefined, bar: undefined },
                { foo: '', bar: '' },
                { foo: 0, bar: 0 },
                { foo: NaN, bar: NaN }
            ];
            test(done, obj);
        });

        it('empty', function (done) {
            var obj = '';
            test(done, obj);
        });

        it('zero', function (done) {
            var obj = 0;
            test(done, obj);
        });

        it('false', function (done) {
            var obj = false;
            test(done, obj);
        });

        it('Date only', function (done) {
            var obj = new Date();
            test(done, obj);
        });

        it('String only', function (done) {
            var obj = new String(); // eslint-disable-line no-new-wrappers
            test(done, obj);
        });

        it('Number only', function (done) {
            var obj = new Number(); // eslint-disable-line no-new-wrappers
            test(done, obj);
        });

        it('Boolean only', function (done) {
            var obj = new Boolean();    // eslint-disable-line no-new-wrappers
            test(done, obj);
        });

        it('Error only', function (done) {
            var obj = new Error();
            test(done, obj);
        });

        it('Function only', function (done) {
            var obj = new Function();   // eslint-disable-line no-new-func
            test(done, obj);
        });

        it('RegExp only', function (done) {
            var obj = /[[]]/;
            test(done, obj);
        });

        it('NaN only', function (done) {
            var obj = NaN;
            test(done, obj);
        });
    });

}(this));
