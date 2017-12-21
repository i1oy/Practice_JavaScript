const assert = require('assert');

const async_function = require('../async-function');

describe('#async', () => {
    describe('#asyncCalculate()', () => {
        it('#async with done', (done) => {
            (async function () {
                try {
                    let r = await async_function();
                    assert.strictEqual(r, 7);
                    done();
                } catch (error) {
                    done(error);
                }
            })();
        });

        it('#async function', async () => {
            let r = await async_function();
            assert.strictEqual(r, 7);
        });

        it('#sync function', () => {
            assert(true);
        });
    });
});