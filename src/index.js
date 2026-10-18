/**
 * @preserve jquery-param (c) KNOWLEDGECODE | MIT
 */

/** A key already ending in "[]" names a list, so its array items are added as scalars */
var rbracket = /\[\]$/;
/**
 * Object classes jQuery's toType() treats as scalars; any other object is walked key by key.
 * Array and Function reach this test only through a Symbol.toStringTag claiming them.
 */
var rscalar = /^\[object (?:Boolean|Number|String|Function|Array|Date|RegExp|Error|Symbol)\]$/;

/**
 * serialize any object
 * @param {Object} a - any object to serialize
 * @returns {string} a serialized string
 */
var param = function (a) {
    var s = [];
    var i, len, key;
    var add = function (k, v) {
        v = typeof v === 'function' ? v() : v;
        v = v === null ? '' : v === undefined ? '' : v;
        s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
    };
    var buildParams = function (prefix, obj) {
        var i, len, key;

        if (Array.isArray(obj)) {
            for (i = 0, len = obj.length; i < len; i++) {
                if (rbracket.test(prefix)) {
                    add(prefix, obj[i]);
                } else {
                    buildParams(
                        prefix + '[' + (typeof obj[i] === 'object' && obj[i] ? i : '') + ']',
                        obj[i]
                    );
                }
            }
        } else if (typeof obj === 'object' && obj && !rscalar.test(Object.prototype.toString.call(obj))) {
            for (key in obj) {
                buildParams(prefix + '[' + key + ']', obj[key]);
            }
        } else {
            add(prefix, obj);
        }
    };

    if (Array.isArray(a)) {
        for (i = 0, len = a.length; i < len; i++) {
            add(a[i].name, a[i].value);
        }
    } else {
        for (key in a) {
            buildParams(key, a[key]);
        }
    }
    return s.join('&');
};

export default param;
