/**
 * @description This is a custom handlebars helper that
 * simply concatenates all arguments and returns the result.
 * @example
 * Inside handlebars template...
 * <p>{{ concat( varA varB varC }}</p>
 *
 * You can use it when including a partial!
 * {{> mypartial customParam=(concat basePath path) }}
 */
module.exports.register = function (Handlebars, options) {
    Handlebars.registerHelper('concat', function () {
        var arg = Array.prototype.slice.call(arguments,0);
        arg.pop();
        return arg.join('');
    });
};
