const industry_list = [
  {
    "parent_ind": "女装",
    "name": "连衣裙"
  },
  {
    "name": "女装"
  },
  {
    "parent_ind": "女装",
    "name": "半身裙"
  },
  {
    "parent_ind": "女装",
    "name": "A字裙"
  },
  {
    "name": "数码"
  },
  {
    "parent_ind": "数码",
    "name": "电脑配件"
  },
  {
    "parent_ind": "电脑配件",
    "name": "内存"
  },
]


function convert_format(data) {
  const map = {}
  const res = {}
  data.forEach(item => {
    // console.log(item)
    // console.log(map[item.name] = map[item.name])
    const node = (map[item.name] = map[item.name] || {})
    console.log(node)
    console.log(map, '+++')
    if (item.parent_ind) {
      const parentNode = map[item.parent_ind]
      if (parentNode) {
        parentNode[item.name] = node
      } else {
        map[item.parent_ind] = {
          [item.name]: node
        }
      }
    } else {
      res[item.name] = node
      console.log(res, '---')
    }
  })
  return res
}

console.log(convert_format(industry_list))