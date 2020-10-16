import { fetchData, fetchTwoData, fetchThreeData, fetchFourData } from './fetchData.js';

test('fetchData 方法测试', (done) => {
    fetchData((data)=>{
        expect(data).toEqual({
            success: true
        })
        done()
    })
})

test('fetchTwoData 方法测试', () => {
    return fetchTwoData().then((response)=>{
        expect(response.data).toEqual({
            success: true
        })
    })
})

test('fetchThreeData 方法测试', () => {
    expect.assertions(1)  // 断言   必须执行一次expect
    return fetchThreeData().catch((e)=>{
        // console.log(e.toString())
        expect(e.toString().indexOf('404')>-1).toBe(true)
    })
})

test('fetchFourData 方法测试', async() => {
    // await expect(fetchFourData()).resolves.toMatchObject({
    //     data:{
    //         success: true
    //     }
    // })
    const response = await fetchFourData()
    expect(response.data).toEqual({
        success:true
    })
})