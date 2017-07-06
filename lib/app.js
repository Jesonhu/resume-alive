import './styles/base.scss'
import stylesEditor from './styleEditor'
import resumtEditor from './resumeEditor'

let { showStyles } = stylesEditor
let { showResume, markdownToHtml } = resumtEditor

async function drawMyResume () {
    await showStyles(0)
    await showResume()
    await showStyles(1)
    await markdownToHtml()
    await showStyles(2)
}
drawMyResume()
