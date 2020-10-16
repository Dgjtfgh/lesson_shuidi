// test('测试007号技师的匹配',()=>{
//     expect('007号技师').toBe('007号技师')
//     // toBe 相当于 ===
//     const a = {number: 007}
//     expect(a).toBe({number: 007})
// })

test('toEqual匹配器',()=>{
    const a = {number: '007'}
    expect(a).toEqual({number: '007'})
})

test('toBeNull匹配器',()=>{
    const a = null
    expect(a).toBeNull()
})

test('toBeUndefined匹配器',()=>{
    const a = undefined
    expect(a).toBeUndefined()
})

test('toBeDefined匹配器',()=>{
    const a = 1
    expect(a).toBeDefined()
    const b = 'sjhdjks'
    expect(b).toBeDefined()
})

test('toBeTruthy匹配器',()=>{
    // 测试真假
    const a = 1
    expect(a).toBeTruthy()
})

test('toBeFalsy匹配器',()=>{
    // 测试真假
    const a = 0
    expect(a).toBeFalsy()
})

test('toBeGreaterThan匹配器',()=>{
    // >
    const count = 10
    expect(count).toBeGreaterThan(9)
})

test('toBeLessThan匹配器',()=>{
    // <
    const count = 10
    expect(count).toBeLessThan(11)
})

test('toBeGreaterThanOrEqual匹配器',()=>{
    // >=
    const count = 10
    expect(count).toBeGreaterThanOrEqual(10)
})

test('toBeLessThanOrEqual匹配器',()=>{
    // <=
    const count = 10
    expect(count).toBeLessThanOrEqual(10)
})

test('toBeCloseTo匹配器',()=>{
    // 浮点错误
    const one = 0.1
    const two = 0.2
    expect(one + two).toBeCloseTo(0.3)
})

test('toMatch匹配器',()=>{
    const str = '谢大脚,刘迎,小花'
    expect(str).toMatch('刘迎')
})

test('toContain匹配器',()=>{
    const arr = ['谢大脚','刘迎','小花']
    expect(arr).toContain('刘迎')
    const data = new Set(arr)
    expect(data).toContain('小花')
})

const throwNewErrorFunc = () => {
    throw new Error ('this is error')
}
test('toThrow匹配器',()=>{
    // 检查抛出异常 错误信息一致
    expect(throwNewErrorFunc).toThrow('this is error')
    // 检查抛出不异常 
    expect(throwNewErrorFunc).not.toThrow('this is error')
})