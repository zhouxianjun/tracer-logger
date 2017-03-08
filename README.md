
# 如何安装

[Node.js](http://nodejs.org).

npm install tracer-logger

---

## 如何使用

```javascript
// 引用模块
const logger = require('tracer-logger');
logger.info();
logger.debug();
logger.warn();
logger.error();
```

### 如果需要自定义配置则需要在运行目录创建`logger.js`文件配置.