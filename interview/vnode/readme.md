- Virtual DOM     babel AST 抽象语法树

问题：
<template>
    <div id="root">
        <span class="demo">
            This is a span.
        </span>
        <p>DOM</p>
    </div>
</template> 
JSON  表达
html -> js (tree, json)
描述性
{
    tag: 'div',
    attrs: {
        id: 'root'
    },
    children: [
        {
            tag: 'span',
            attrs: {
                class: 'dome'
            }
            children: [
                {
                    tag: undefined,
                    text: 'This is a span.'
                }
            ]
                
        },
        {
            tag: 'p',
            children: [
                {
                    tag: undefined,
                    text: 'DOM'
                }
            ]
        }
    ]
}