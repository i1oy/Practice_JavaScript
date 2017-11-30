'use strict';

const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const controller = require('./controllers');
app.use(controller());

const nunjucks = require('nunjucks');
function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader( 'views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters){
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

// var s = env.render('hello.html', 
// {
//      name: "Page", 
//      fruits: ['Apple', 'Strawberry', 'Watermelon', 'Mongo'] }
// );
// console.log(s);
// app.use(async (ctx, next) => {
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next();
//     // ctx.response.type = 'text/html';
//     // ctx.response.body = '<h1>Hello, koa</h1>';
// });

// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}</h1>`;
// });

// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>INDEX</h1>';
// });
app.listen(3000);
console.log('app started at port 3000...');

