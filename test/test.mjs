import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import jquery from 'jquery';
import param from '../dist/esm/jquery-param.mjs';

describe('equivalence', function () {
    var $ = jquery(new JSDOM().window),
        test = function (obj) {
            expect(decodeURIComponent(param(obj))).to.equal(decodeURIComponent($.param(obj)));
        };

    it('ascii', function () {
        var obj = {
            foo: 'bar'
        };
        test(obj);
    });

    it('non-ascii', function () {
        var obj = {
            foo: 'こんにちは'
        };
        test(obj);
    });

    it('number', function () {
        var obj = {
            foo: 12345
        };
        test(obj);
    });

    it('boolean', function () {
        var obj = {
            foo: true
        };
        test(obj);
    });

    // Array #1 (ascii)
    it('Array #1', function () {
        var obj = {
            foo: ['hello', 'world', '!']
        };
        test(obj);
    });
    // Array #2 (non-ascii)
    it('Array #2', function () {
        var obj = {
            foo: ['こんにちは', '世界', '！']
        };
        test(obj);
    });
    // Array #3 (number)
    it('Array #3', function () {
        var obj = {
            foo: [0, 1, 2]
        };
        test(obj);
    });
    // Array #4 (boolean)
    it('Array #4', function () {
        var obj = {
            foo: [true, false, true]
        };
        test(obj);
    });
    // Array #5 (Array)
    it('Array #5', function () {
        var obj = {
            'foo': ['[]', '[]', '[]']
        };
        test(obj);
    });
    // Array #6 (Object)
    it('Array #6', function () {
        var obj = {
            foo: [{}, {}, {}]
        };
        test(obj);
    });
    // Array #7 (Date)
    it('Array #7', function () {
        var obj = {
            foo: [new Date(), new Date(), new Date()]
        };
        test(obj);
    });
    // Array #8 (Error)
    it('Array #8', function () {
        var obj = {
            foo: [new Error(), new Error(), new Error()]
        };
        test(obj);
    });
    // Array #9 (Function)
    it('Array #9', function () {
        var obj = {
            foo: [new Function(), new Function(), new Function()]   // eslint-disable-line no-new-func
        };
        test(obj);
    });
    // Array #10 (RegExp)
    it('Array #10', function () {
        var obj = {
            foo: [/[[]]/, /[[]]/, /[[]]/]
        };
        test(obj);
    });
    // Array #11 (function)
    it('Array #11', function () {
        var obj = {
            foo: [function () {}, function () {}, function () {}]
        };
        test(obj);
    });
    // Array #12 (null)
    it('Array #12', function () {
        var obj = {
            foo: [null, null, null]
        };
        test(obj);
    });
    // Array #13 (undefined)
    it('Array #13', function () {
        var obj = {
            foo: [undefined, undefined, undefined]
        };
        test(obj);
    });
    // Array #14 (NaN)
    it('Array #14', function () {
        var obj = {
            foo: [NaN, NaN, NaN]
        };
        test(obj);
    });

    // Object #1 (ascii)
    it('Object #1', function () {
        var obj = {
            foo: { bar: 'hello' }
        };
        test(obj);
    });
    // Object #2 (non-ascii)
    it('Object #2', function () {
        var obj = {
            foo: { bar: 'こんにちは' }
        };
        test(obj);
    });
    // Object #3 (number)
    it('Object #3', function () {
        var obj = {
            foo: { bar: 3.14 }
        };
        test(obj);
    });
    // Object #4 (boolean)
    it('Object #4', function () {
        var obj = {
            foo: { bar: false }
        };
        test(obj);
    });
    // Object #5 (Array)
    it('Object #5', function () {
        var obj = {
            foo: { bar: [1, 2, 3] }
        };
        test(obj);
    });
    // Object #6 (Object)
    it('Object #6', function () {
        var obj = {
            foo: { bar: {} }
        };
        test(obj);
    });
    // Object #7 (Date)
    it('Object #7', function () {
        var obj = {
            foo: { bar: new Date() }
        };
        test(obj);
    });
    // Object #8 (Error)
    it('Object #8', function () {
        var obj = {
            foo: { bar: new Error() }
        };
        test(obj);
    });
    // Object #9 (Function)
    it('Object #9', function () {
        var obj = {
            foo: { bar: new Function() }    // eslint-disable-line no-new-func
        };
        test(obj);
    });
    // Object #10 (RegExp)
    it('Object #10', function () {
        var obj = {
            foo: { bar: /[[]]/ }
        };
        test(obj);
    });
    // Object #11 (function)
    it('Object #11', function () {
        var obj = {
            foo: { bar: function () {} }
        };
        test(obj);
    });
    // Object #12 (null)
    it('Object #12', function () {
        var obj = {
            foo: { bar: null }
        };
        test(obj);
    });
    // Object #13 (undefined)
    it('Object #13', function () {
        var obj = {
            foo: { bar: undefined }
        };
        test(obj);
    });
    // Object #14 (NaN)
    it('Object #14', function () {
        var obj = {
            foo: { bar: NaN }
        };
        test(obj);
    });

    it('String', function () {
        var obj = {
            foo: new String()   // eslint-disable-line no-new-wrappers
        };
        test(obj);
    });

    it('Number', function () {
        var obj = {
            foo: new Number()   // eslint-disable-line no-new-wrappers
        };
        test(obj);
    });

    it('Boolean', function () {
        var obj = {
            foo: new Boolean()  // eslint-disable-line no-new-wrappers
        };
        test(obj);
    });

    it('Date', function () {
        var obj = {
            foo: new Date()
        };
        test(obj);
    });

    it('Error', function () {
        var obj = {
            foo: new Error()
        };
        test(obj);
    });

    it('Function', function () {
        var obj = {
            foo: new Function() // eslint-disable-line no-new-func
        };
        test(obj);
    });

    it('RegExp', function () {
        var obj = {
            foo: /[[]]/
        };
        test(obj);
    });

    it('null', function () {
        var obj = {
            foo: null
        };
        test(obj);
    });

    it('undefined', function () {
        var obj = {
            foo: undefined
        };
        test(obj);
    });

    it('NaN', function () {
        var obj = {
            foo: NaN
        };
        test(obj);
    });

    // function #1 (ascii)
    it('function #1', function () {
        var obj = {
            foo: function () {
                return 'hello';
            }
        };
        test(obj);
    });
    // function #2 (non-ascii)
    it('function #2', function () {
        var obj = {
            foo: function () {
                return 'こんにちは';
            }
        };
        test(obj);
    });
    // function #3 (number)
    it('function #3', function () {
        var obj = {
            foo: function () {
                return 0;
            }
        };
        test(obj);
    });
    // function #4 (boolean)
    it('function #4', function () {
        var obj = {
            foo: function () {
                return false;
            }
        };
        test(obj);
    });
    // function #5 (Array)
    it('function #5', function () {
        var obj = {
            foo: function () {
                return [];
            }
        };
        test(obj);
    });
    // function #6 (Object)
    it('function #6', function () {
        var obj = {
            foo: function () {
                return {};
            }
        };
        test(obj);
    });
    // function #7 (Date)
    it('function #7', function () {
        var obj = {
            foo: function () {
                return new Date();
            }
        };
        test(obj);
    });
    // function #8 (Error)
    it('function #8', function () {
        var obj = {
            foo: function () {
                return new Error();
            }
        };
        test(obj);
    });
    // function #9 (Function)
    it('function #9', function () {
        var obj = {
            foo: function () {
                return new Function();  // eslint-disable-line no-new-func
            }
        };
        test(obj);
    });
    // function #10 (RegExp)
    it('function #9', function () {
        var obj = {
            foo: function () {
                return /[[]]/;
            }
        };
        test(obj);
    });
    // function #11 (function)
    it('function #11', function () {
        var obj = {
            foo: function () {
                return function () {
                    return undefined;
                };
            }
        };
        test(obj);
    });
    // function #12 (null)
    it('function #12', function () {
        var obj = {
            foo: function () {
                return null;
            }
        };
        test(obj);
    });
    // function #13 (undefined)
    it('function #13', function () {
        var obj = {
            foo: function () {
                return undefined;
            }
        };
        test(obj);
    });
    // function #14 (NaN)
    it('function #14', function () {
        var obj = {
            foo: function () {
                return NaN;
            }
        };
        test(obj);
    });

    // Array in Array #1 (ascii)
    it('Array in Array #1', function () {
        var obj = {
            foo: [
                ['hello', 'world', '!'],
                ['hello', 'world', '!'],
                ['hello', 'world', '!']
            ]
        };
        test(obj);
    });
    // Array in Array #2 (non-ascii)
    it('Array in Array #2', function () {
        var obj = {
            foo: [
                ['こんにちは', '世界', '！'],
                ['こんにちは', '世界', '！'],
                ['こんにちは', '世界', '！']
            ]
        };
        test(obj);
    });
    // Array in Array #3 (number)
    it('Array in Array #3', function () {
        var obj = {
            foo: [
                [-1, 0, 1],
                [-1, 0, 1],
                [-1, 0, 1]
            ]
        };
        test(obj);
    });
    // Array in Array #4 (boolean)
    it('Array in Array #4', function () {
        var obj = {
            foo: [
                [true, false, true],
                [true, false, true],
                [true, false, true]
            ]
        };
        test(obj);
    });
    // Array in Array #5 (Array)
    it('Array in Array #5', function () {
        var obj = {
            foo: [
                [[], [], []],
                [[], [], []],
                [[], [], []]
            ]
        };
        test(obj);
    });
    // Array in Array #6 (Object)
    it('Array in Array #6', function () {
        var obj = {
            foo: [
                [{}, {}, {}],
                [{}, {}, {}],
                [{}, {}, {}]
            ]
        };
        test(obj);
    });
    // Array in Array #7 (Date)
    it('Array in Array #7', function () {
        var obj = {
            foo: [
                [new Date(), new Date(), new Date()],
                [new Date(), new Date(), new Date()],
                [new Date(), new Date(), new Date()]
            ]
        };
        test(obj);
    });
    // Array in Array #8 (Error)
    it('Array in Array #8', function () {
        var obj = {
            foo: [
                [new Error(), new Error(), new Error()],
                [new Error(), new Error(), new Error()],
                [new Error(), new Error(), new Error()]
            ]
        };
        test(obj);
    });
    // Array in Array #9 (Function)
    it('Array in Array #9', function () {
        var obj = {
            foo: [
                [new Function(), new Function(), new Function()],   // eslint-disable-line no-new-func
                [new Function(), new Function(), new Function()],   // eslint-disable-line no-new-func
                [new Function(), new Function(), new Function()]    // eslint-disable-line no-new-func
            ]
        };
        test(obj);
    });
    // Array in Array #10 (RegExp)
    it('Array in Array #10', function () {
        var obj = {
            foo: [
                [/[[]]/, /[[]]/, /[[]]/],
                [/[[]]/, /[[]]/, /[[]]/],
                [/[[]]/, /[[]]/, /[[]]/]
            ]
        };
        test(obj);
    });
    // Array in Array #11 (function)
    it('Array in Array #11', function () {
        var obj = {
            foo: [
                [function () {}, function () {}, function () {}],
                [function () {}, function () {}, function () {}],
                [function () {}, function () {}, function () {}]
            ]
        };
        test(obj);
    });
    // Array in Array #12 (null)
    it('Array in Array #12', function () {
        var obj = {
            foo: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
        };
        test(obj);
    });
    // Array in Array #13 (undefined)
    it('Array in Array #13', function () {
        var obj = {
            foo: [
                [undefined, undefined, undefined],
                [undefined, undefined, undefined],
                [undefined, undefined, undefined]
            ]
        };
        test(obj);
    });
    // Array in Array #14 (NaN)
    it('Array in Array #14', function () {
        var obj = {
            foo: [
                [NaN, NaN, NaN],
                [NaN, NaN, NaN],
                [NaN, NaN, NaN]
            ]
        };
        test(obj);
    });

    // Object in Object #1 (ascii)
    it('Object in Object #1', function () {
        var obj = {
            foo: {
                'hello': 'hello',
                'world': 'world',
                '!': '!'
            }
        };
        test(obj);
    });
    // Object in Object #2 (non-ascii)
    it('Object in Object #2', function () {
        var obj = {
            foo: {
                'こんにちは': 'こんにちは',
                '世界': '世界',
                '！': '！'
            }
        };
        test(obj);
    });
    // Object in Object #3 (number)
    it('Object in Object #3', function () {
        var obj = {
            foo: {
                '-1': -1,
                '0': 0,
                '1': 1
            }
        };
        test(obj);
    });
    // Object in Object #4 (boolean)
    it('Object in Object #4', function () {
        var obj = {
            foo: {
                'true': true,
                'false': false
            }
        };
        test(obj);
    });
    // Object in Object #5 (Array)
    it('Object in Object #5', function () {
        var obj = {
            foo: {
                '[]': [],
                '[[]]': [[]],
                '[[[]]]': [[[]]]
            }
        };
        test(obj);
    });
    // Object in Object #6 (Object)
    it('Object in Object #6', function () {
        var obj = {
            foo: {
                '{}': {},
                '{{}}': { '{}': {} },
                '{{{}}}': { '{}': { '{}': {} } }
            }
        };
        test(obj);
    });
    // Object in Object #7 (Date)
    it('Object in Object #7', function () {
        var obj = {
            foo: {
                'date1': new Date(),
                'date2': new Date(),
                'date3': new Date()
            }
        };
        test(obj);
    });
    // Object in Object #8 (Error)
    it('Object in Object #8', function () {
        var obj = {
            foo: {
                'error1': new Error(),
                'error2': new Error(),
                'error3': new Error()
            }
        };
        test(obj);
    });
    // Object in Object #9 (Function)
    it('Object in Object #9', function () {
        var obj = {
            foo: {
                'Function1': new Function(),    // eslint-disable-line no-new-func
                'Function2': new Function(),    // eslint-disable-line no-new-func
                'Function3': new Function()     // eslint-disable-line no-new-func
            }
        };
        test(obj);
    });
    // Object in Object #10 (RegExp)
    it('Object in Object #10', function () {
        var obj = {
            foo: {
                '/[[]]/': /[[]]/,
                '/[[[]]]/': /[[[]]]/,
                '/[[[[]]]]/': /[[[[]]]]/
            }
        };
        test(obj);
    });
    // Object in Object #11 (function)
    it('Object in Object #11', function () {
        var obj = {
            foo: {
                'function1': function () {},
                'function2': function () {},
                'function3': function () {}
            }
        };
        test(obj);
    });
    // Object in Object #12 (null)
    it('Object in Object #12', function () {
        var obj = {
            foo: {
                'null1': null,
                'null2': null,
                'null3': null
            }
        };
        test(obj);
    });
    // Object in Object #13 (undefined)
    it('Object in Object #13', function () {
        var obj = {
            foo: {
                'undefined1': undefined,
                'undefined2': undefined,
                'undefined3': undefined
            }
        };
        test(obj);
    });
    // Object in Object #14 (NaN)
    it('Object in Object #14', function () {
        var obj = {
            foo: {
                'NaN1': NaN,
                'NaN2': NaN,
                'NaN3': NaN
            }
        };
        test(obj);
    });

    it('Extended Object', function () {
        var P = function () {};
        var obj = Object.create(P.prototype);

        P.prototype.foo = function () { return [1, 2, 3]; };
        obj.bar = { 'undefined': 'null' };
        test(obj);
    });

    it('Mixed Array #1', function () {
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
        test(obj);
    });
    it('Mixed Array #2', function () {
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
        test(obj);
    });

    it('empty', function () {
        var obj = '';
        test(obj);
    });

    it('zero', function () {
        var obj = 0;
        test(obj);
    });

    it('false', function () {
        var obj = false;
        test(obj);
    });

    it('Date only', function () {
        var obj = new Date();
        test(obj);
    });

    it('String only', function () {
        var obj = new String(); // eslint-disable-line no-new-wrappers
        test(obj);
    });

    it('Number only', function () {
        var obj = new Number(); // eslint-disable-line no-new-wrappers
        test(obj);
    });

    it('Boolean only', function () {
        var obj = new Boolean();    // eslint-disable-line no-new-wrappers
        test(obj);
    });

    it('Error only', function () {
        var obj = new Error();
        test(obj);
    });

    it('Function only', function () {
        var obj = new Function();   // eslint-disable-line no-new-func
        test(obj);
    });

    it('RegExp only', function () {
        var obj = /[[]]/;
        test(obj);
    });

    it('NaN only', function () {
        var obj = NaN;
        test(obj);
    });

    it('null Prototype', function () {
        var obj = Object.create(null);
        obj.test = Object.create(null);
        obj.test.test = 1;
        test(obj);
    });
});
