# PerformanceObserver API 性能监测
- resource:
- paint: 
  - FP 第一个像素落地
  - FCP: first-contentful-paint
  - FMP: first-meaningful-paint
- navigation(url -> 看到页面)
  - domComplete: DOM 结构生成完毕
  - domContentLoadedEventEnd: 网页需要执行的脚本执行完成时间
  - **domContentLoadedEventStart: domContentLoaded 事件发生的时间**
  - domInteractive: DOM 树创建完成(浏览器渲染 生成 DOM 树阶段)
  - **loadEventStart: load 时间点**

- longtak: 长任务（任何超过 50ms 任务）
- mark: 打点
- measure: 在每个点之间测量时间