import './styles/base.scss'
import stylesEditor from './styleEditor'
import resumtEditor from './resumeEditor'
import genHandler from './genHandler'

let { showStyles } = stylesEditor
let { showResume, markdownToHtml } = resumtEditor

genHandler(function * drawMyResume () {
    yield showStyles(0)
    yield showResume()
    yield showStyles(1)
    yield markdownToHtml()
    yield showStyles(2)
})
