'use strict';

const isProduction = process.env.NODE_ENV === 'production';

const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if (!isProduction) {
    let staticFiles = require('./static_files');
    app.use(staticFiles('/static/', __dirname + '/static'));   
}

const templating = require('./templating');
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

const controller = require('./controllers');
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');