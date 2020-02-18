let template = '我是{{name}}, 年龄{{age}}, 性别{{sex}}';

let data = {
    name: '蔡徐坤',
    age: 18,
    sex: '男'
}

function render(template, data) {
    // 用什么方法？
    // 正则 + replace {{}}  规则
    const reg = /\{\{(\w+)\}\}/;  // 不做贪婪匹配
    if (reg.test(template)) {
        const key = reg.exec(template)[1];
        // console.log(key);
        template = template.replace(reg, data[key]);
        return render(template, data);
    }
    return template;
}

console.log(render(template, data));

