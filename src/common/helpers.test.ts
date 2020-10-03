import { assert } from 'chai';

import { trim } from './helpers';

describe('helpers', function () {
    describe('trim', function () {
        it('should trim', function () {
            assert.equal(trim(' f '), 'f');
        });
    });
});
