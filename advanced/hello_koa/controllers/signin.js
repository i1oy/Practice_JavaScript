var signIn = async (ctx, next) => {
    ctx.render('signin.html', {
        title: 'Sign In'
    });
};

var login = async (ctx, next) => {
    var 
        account = ctx.request.body.account || '',
        passwd = ctx.request.body.password || '';
    if (account === 'examples@here.com' && passwd === '123456') {
        return ctx.render('login_success.html',{login_result: 'Success'});
    } else {
        return ctx.render('login_failed.html', { login_result: 'Failed' });
    }
};

module.exports = {
    'GET /login': signIn,
    'POST /login_result': login
};