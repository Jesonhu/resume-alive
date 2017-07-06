## 会动的简历
****
#### 回调函数处理异步版本
```js
// app.js
// 0 1 2 表示data/style.js数组的序列号
showStyles(0, () => {
    showResume(() => {
        showStyles(1, () => {
            markdownToHtml(() => {
                showStyles(2)
            })
        })
    })
})
```
