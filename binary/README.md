# 二进制数据处理

JavaScript 常用的二进制处理雷

官方文档

> https://nodejs.org/api/buffer.html

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

### NodeJS 的 Buffer
Buffer 结合了 TypedArray 和 ArrayBuffer

优点
- 不需要 DataView，一个 Buffer 就可以直接读取写入和转换数据
- 更易用

缺点
- 一般运行在 NodeJS 环境下，服务器适用，很少用于浏览器环境


### JavaScript 的 ArrayBuffer
优点
- Javascript 原生对象，可以运行于 服务器和浏览器环境
- 更轻量

缺点
- 需要 DataView 配合才能转换数据