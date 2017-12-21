const
    request = require('supertest');
    app = require('../app');

describe('#Test koa app', () => {
    let server = app.listen(9900);
    describe('#Test server', () => {
        it('#Test GET /', async () => {
            let res = await request(server)
            .get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200, '<h1>Hello, world!</h1>');
        });

        it('#Test GET /path?name=LOYOY', async () => {
            let res = await request(server)
            .get('/path?name=LOYOY')
            .expect('Content-Type', /text\/html/)
            .expect(200, '<h1>Hello, LOYOY!</h1>');
        });
    });
});