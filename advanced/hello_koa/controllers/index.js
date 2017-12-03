var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>NAME: <input name="name" value="koa"></p>
            <p>PASSWORD: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </from>`;
};

var fn_signin = async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`SignIn with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.response.body = `<h1>Welcome, ${name}</h1>`;
    }
    else {
        ctx.response.body = `<h1>Login Failed.</h1>
            <p><a href="/">Try Again</a></p>`;
    }
};

var get_index = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
};

module.exports = {
    'GET /': get_index,
    // 'POST /signin': fn_signin
};