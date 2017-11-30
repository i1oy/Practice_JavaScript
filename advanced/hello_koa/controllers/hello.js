const nunjucks = require('nunjucks');
function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('../views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    var s = env.render('hello.html',
        {
            name: name,
            fruits: ['Apple', 'Strawberry', 'Watermelon', 'Mongo']
        }
    );
    // ctx.response.body = `<h1>Hello, ${name}.</h1>`;
    ctx.response.body = s;
};

module.exports = {
    'GET /hello/:name': fn_hello
};