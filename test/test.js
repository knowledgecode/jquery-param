(function (global) {
    'use strict';

    describe('equivalence', function () {
        var $,
            expect = global.expect || require('expect.js'),
            param = global.param || require('../jquery-param'),
            test = function (done, obj) {
                try {
                    expect(decodeURIComponent(param(obj))).to.eql(decodeURIComponent($.param(obj)));
                } catch (e) {
                    return done(e);
                }
                done();
            };

        before(function (done) {
            if (global.jQuery) {
                $ = global.jQuery;
                done();
                return;
            }
            require('jsdom').env('', function (errors, window) {
                if (errors) {
                    return done(errors);
                }
                $ = require('jquery')(window);
                window.close();
                done();
            });
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

        it('Array', function (done) {
            var obj = {
                foo: ['hello', 'world', '!']
            };
            test(done, obj);
        });

        it('wry Array', function (done) {
            var obj = {
                '[]': ['[]', '[]', '[]']
            };
            test(done, obj);
        });

        it('Object', function (done) {
            var obj = {
                foo: {
                    bar: 'hello'
                }
            };
            test(done, obj);
        });

        it('wry Object', function (done) {
            var obj = {
                foo: {
                    '[]': 1,
                    '[[]]': 2,
                    '[[[]]]': 3
                }
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
                foo: new RegExp()
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

        it('function', function (done) {
            var obj = {
                foo: function () {
                    return 'hello world!';
                }
            };
            test(done, obj);
        });

        it('mixture', function (done) {
            var obj = {
                foo: 'hello',
                bar: 3.14,
                baz: false
            };
            test(done, obj);
        });

        it('Array in Array', function (done) {
            var obj = {
                foo: [
                    [1, 2, 3], [4, 5, 6], [7, 8, 9]
                ]
            };
            test(done, obj);
        });

        it('wry Array in Array 1', function (done) {
            var obj = {
                '[]': [
                    ['[]'], ['[]', '[]'], ['[]', '[]', '[]']
                ]
            };
            test(done, obj);
        });

        it('wry Array in Array 2', function (done) {
            var obj = [
                ['[]'], ['[]', '[]'], ['[]', '[]', '[]']
            ];
            test(done, obj);
        });

        it('wry Array in Array 3', function (done) {
            var obj = {
                foo: [
                    [[1]], [[1, 2], [1, 2]], [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
                ]
            };
            test(done, obj);
        });

        it('wry Array in Array 4', function (done) {
            var obj = [
                {
                    name: '[]',
                    value: '[1]'
                },
                {
                    name: '[]',
                    value: '[2]'
                }
            ];
            test(done, obj);
        });

        it('Object in Object', function (done) {
            var obj = {
                foo: {
                    bar: {
                        hello: 'world',
                        doodbye: 'money'
                    },
                    baz: {
                        pi: 3.14,
                        zero: 0
                    },
                    zero: {
                    }
                }
            };
            test(done, obj);
        });

        it('Object in Array', function (done) {
            var obj = {
                foo: [
                    {
                        hello: 'world',
                        doodbye: 'money'
                    },
                    {
                        pi: 3.14,
                        zero: 0
                    },
                    {
                    }
                ]
            };
            test(done, obj);
        });

        it('Array in Object', function (done) {
            var obj = {
                foo: {
                    bar: [1, 2, 3]
                },
                baz: {
                    bar: [new Error(), NaN, undefined]
                },
                zero: {
                    bar: []
                }
            };
            test(done, obj);
        });

        it('empty only', function (done) {
            var obj = '';
            test(done, obj);
        });

        it('zero only', function (done) {
            var obj = 0;
            test(done, obj);
        });

        it('false only', function (done) {
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
            var obj = new RegExp();
            test(done, obj);
        });

        it('NaN only', function (done) {
            var obj = NaN;
            test(done, obj);
        });
    });

}(this));

