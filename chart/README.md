# 图表选择

- 支持的图的种类
- 性能
- 能否满足需求

### 社区活跃度
- ChartJS 最好
- D3 次之
- Echarts 5 差点
- uPlot 不行

### 性能对比

> https://github.com/Arction/javascript-charts-performance-comparison

- μPlot 最优
- LightningChart JS 中等
- ECharts 5 差点
- 其他都是打酱油的

> https://github.com/leeoniya/uPlot

| lib                    | size    | done    | js,rend,paint,sys | heap peak,final | mousemove (10s)     |
| ---------------------- | ------- | ------- | ----------------- | --------------- | ------------------- |
| uPlot v1.6.24          | 47.9 KB |   34 ms |   51   2   1   34 |  21 MB   3 MB   |  218  360  146  196 |
| Chart.js v4.2.1        |  254 KB |   38 ms |   90   2   1   40 |  29 MB  10 MB   | 1154   46  165  235 |
| ECharts v5.4.1         | 1000 KB |   55 ms |  148   3   1   35 |  17 MB   3 MB   | 1943  444  203  208 |
| LightningChart® v4.0.2 | 1300 KB |  --- ms |  250   2   1   33 |  33 MB  13 MB   | 5390  120  128  325 |

### 存在的问题
- Lightning 在高清屏下文字模糊，需要购买商业授权
- ECharts 5 没有 Live Update，大数据量可以考虑使用 progressive 渐进式渲染
  - https://github.com/apache/echarts/issues/15332
- uPlot 支持的图表没有 Echarts 5 的丰富



### 结论
- 普通功能都使用 ECharts 5
- 大量折线图的实时绘制，1万以上的点，每秒新增100个，可以选用 uPlot