// const dabaojian = require('./dabaojian.js')
// const {baojian1,baojian2} = dabaojian
import {baojian1,baojian2} from './dabaojian.js'
test('保健1方法-300元',() => {
    expect(baojian1(300)).toBe('至尊服务')
})

test('保健2方法-300元',() => {
    expect(baojian2(300)).toBe('单人服务')
})