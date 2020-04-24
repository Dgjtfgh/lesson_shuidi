import { useState, useEffect } from 'react'

export default function useStats(url){
    // console.log(url)
    // from input 双向绑定新写法 useState
    const [stats, setStats] = useState();
    // 加载ajax  loading
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    // 封装state 的处理
    // react hooks 还有什么函数  
    // 组件挂载上去后，立即执行  mounted()
    // useEffect  相当于生命周期函数
    // state + lifecycle  ->  react hooks 重要性
    // 独立到一个模块
    useEffect(() => {
        // console.log('mounted')
        async function fectchData() {
            setLoading(true);
            const data = await fetch(url)
                .then(res => res.json())
                .catch(err => {
                    setError(err);
                });
            // console.log(data);
            setStats(data);
            // console.log(123)
            // setTimeout(() => {
            setLoading(false);
            // }, 3000);
            
        }
        fectchData();
    }, [url])
    return {
        stats,
        loading,
        error
    }
}
