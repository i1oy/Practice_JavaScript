'use strict';

const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const controller = require('./controllers');
app.use(controller());

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

