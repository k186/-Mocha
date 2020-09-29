/**
 * Created by k186 on 2020/9/29.
 */
const assert = require('chai').assert;
const app = require('./utils');

describe('app',function(){
    it('返回hello 3423432',function () {
        assert.equal(app(),'hello')
    })
})