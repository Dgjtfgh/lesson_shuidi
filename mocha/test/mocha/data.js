const EasyDate = require('../../src/EasyDate');
const should = require('should');  // 断言库
// TDD  测试驱动开发
// 敏捷开发  ts
// 先写测试代码， 再写实现代码   mocha 工具

describe('想要测试Date合格', () => {
    // 添加测试用例
    // EasyDate  简单的日期类
    // 高级需求   可以给一个在当前日期后的偏移量
    let date = new EasyDate();
    it("测试实例日期正确", () => {
        // 测试， 生成一个日期
        let some = date.toDate();
        let today = new Date();  // 当前的日期对象
        should(some.getFullYear()).equal(today.getFullYear());
        should(some.getMonth()).equal(today.getMonth());
    })
    describe('判断闰年', () => {
        it('是否为闰年', () => {
            should(EasyDate.isLeapYear(2000)).be.True();
        })
    })
    describe('月份', () => {
        it('输出月份，个位数前面自动补0', () => {
            should(EasyDate.toDouble(11)).equal('11');
            should(EasyDate.toDouble(9)).equal('09');
        })
    })
})