Page({
  data: {
    entities: [
      {
        imageUrl: 'https://img01.sogoucdn.com/app/a/100520093/f95ec8bcb552e502-6cd15eb3f19d6488-4a6555208ede5053361b3f716641be03.jpg',
        title: 'A',
        description: '蛋糕'
      },
      {
        imageUrl: 'https://img02.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-c90007ca74fdae89-f80d6a5a652e42568b70d0b6b32e60c3.jpg',
        title: 'B',
        description: 'kfhs'
      },
      {
        imageUrl: 'https://img02.sogoucdn.com/app/a/100520093/bd0d55f248d9d07d-2ba85ffc274e840f-04f282e1b076ebac25a585be8f4f07dc.jpg',
        title: 'C',
        description: 'yayayaya'
      },
      {
        imageUrl: 'https://img01.sogoucdn.com/app/a/100520093/f95ec8bcb552e502-6cd15eb3f19d6488-4a6555208ede5053361b3f716641be03.jpg',
        title: 'A',
        description: '蛋糕'
      },
      {
        imageUrl: 'https://img02.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-c90007ca74fdae89-f80d6a5a652e42568b70d0b6b32e60c3.jpg',
        title: 'B',
        description: 'kfhs'
      },
      {
        imageUrl: 'https://img02.sogoucdn.com/app/a/100520093/bd0d55f248d9d07d-2ba85ffc274e840f-04f282e1b076ebac25a585be8f4f07dc.jpg',
        title: 'C',
        description: 'yayayaya'
      },
      {
        imageUrl: 'https://img01.sogoucdn.com/app/a/100520093/f95ec8bcb552e502-6cd15eb3f19d6488-4a6555208ede5053361b3f716641be03.jpg',
        title: 'A',
        description: '蛋糕'
      },
      {
        imageUrl: 'https://img02.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-c90007ca74fdae89-f80d6a5a652e42568b70d0b6b32e60c3.jpg',
        title: 'B',
        description: 'kfhs'
      },
      {
        imageUrl: 'https://img02.sogoucdn.com/app/a/100520093/bd0d55f248d9d07d-2ba85ffc274e840f-04f282e1b076ebac25a585be8f4f07dc.jpg',
        title: 'C',
        description: 'yayayaya'
      }
    ]
  },
  onLoad() {
    console.log('onLoad');
  },
  onReachBottom() { 
    // console.log('触底了');
    const data = [...this.data.entities, ...this.data.entities]; // ... 扩展运算符 || 剩余运算符
    this.setData({
      entities:data
    })
  }
})
