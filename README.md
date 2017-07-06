## 会动的简历
****
#### Promise处理异步版本
```js
// app.js
let showStylesWrap = (num) => showStyles(num)
let markdownToHtmlWrap = () => markdownToHtml()
let showResumeWrap = () => showResume()

showStylesWrap(0)
    .then(showResumeWrap)
    .then(showStylesWrap.bind(null, 1))
    .then(markdownToHtmlWrap)
    .then(showStylesWrap.bind(null, 2))
    .catch((err) => {
        console.log(err)
    })
```
