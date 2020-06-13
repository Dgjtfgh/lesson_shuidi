import React, { useState, useCallback } from 'react';
import { Counter } from './App';

function Parent() {
    const [state, setState] = useState('loading');
    // 加个缓存
    // useCallback 缓存函数
    const onSuccess = useCallback(() => {
        setState('success');
    })
    return (
        <div>
            {state}
            <Counter onSuccess={onSuccess}/>
        </div>
    )
}

export default Parent;