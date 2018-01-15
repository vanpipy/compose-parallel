'use strict';

import map from '../internal/map';
import { expect } from 'chai';

describe('Map', () => {
    it('shoule be mapped array correctly', () => {
        const double = x => x * 2;
        const a = [1,2,3,4,5];
        expect(map(double, a).join()).to.equal([2,4,6,8,10].join());
    });
});
