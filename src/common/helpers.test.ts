import { assert } from 'chai';

import { trim, reverseStr } from './helpers';

describe('helpers', function () {
    describe('trim', function () {
        it('should trim', function () {
            assert.equal(trim(' f '), 'f');
        });
    });

    describe('reverseStr', function () {
        it('should reverse string', function () {
            assert.equal(reverseStr('123'), '321');
        });
    });
});
