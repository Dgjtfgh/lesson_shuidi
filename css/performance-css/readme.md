# 性能优化之CSS

w3c 规定  浏览器 每秒渲染60帧
    一帧      javascript -> style -> layout(布局)重排 -> paint(重绘) -> composite(合成)
    图层概念      可能直接跳过  重排和重绘 直接合成   达到优化效果
提升为图层的方法 
  1. translate3d(0, 0, 0)
  2. will-change: transform;
  3. backface-visibility: hidden;
  4. 重叠