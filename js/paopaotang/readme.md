- 泡泡堂游戏的业务逻辑抽象
  面向对象核心思想：抽象(函数) 封装 继承 多态
  把实现细节抽象起来 创业
  CEO 做梦(梦想，具有一定的需求，团队) 
  抽象 -> 员工来实现  (前端，后端，美工)函数 封装

- 工厂类  抽象了 队友，敌人
  playerFactory(name, teamColor)  代理了产生实例的过程
  players 建立好关系

  Player 玩家类
  playerFactory 类 工厂的模式
  单个的对象去面向对象的集合 生产过程，工厂化
  - partners[]  队友
  - enemies[]   敌人
  - die()       个人死亡
    lose()      团队全死亡 游戏失败
    win()       敌人全灭   游戏胜利
  - all_dead = true 只要判断一个 