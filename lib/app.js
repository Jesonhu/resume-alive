import './styles/base.scss'
import stylesEditor from './styleEditor'
import resumtEditor from './resumeEditor'

let { showStyles } = stylesEditor
let { showResume, markdownToHtml } = resumtEditor

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