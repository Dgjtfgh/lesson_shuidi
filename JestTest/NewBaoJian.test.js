import NewBaoJian from './NewBaoJian.js'

const baojian = new NewBaoJian()

beforeAll(() => {
    console.log('beforeAll: 吃完饭后，前往消费')
})

beforeEach(() => {
    console.log('beforeEach: 给了300费用后')
})

test('测试 如花足疗 方法', () => {
    baojian.gongzhu(1)
    baojian.anjiao()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('如花为你服务')
})

test('测试 如花足疗 方法', () => {
    baojian.gongzhu(2)
    baojian.anmo()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('花如为您服务')
})

afterEach(() => {
    console.log('afterEach: 完成后舒舒服服的靠在沙发上')
})

afterAll(() => {
    console.log('afterAll: 有钱人的生活就是这么的枯燥且乏味')
})