import './styles/base.scss'
import stylesEditor from './styleEditor'
import resumtEditor from './resumeEditor'

let { showStyles } = stylesEditor
let { showResume, markdownToHtml } = resumtEditor

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