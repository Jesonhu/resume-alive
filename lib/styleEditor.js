/**
 * 动态添加style样式
 */
import styles from './data/style'
import $ from './vQuery'
import Prism from 'prismjs'

let $stylesWrap = $('#app .styles-wrap')
let stylesWrap = $stylesWrap.get(0)
let $style = $('style', stylesWrap)
let $stylePre = $('pre', stylesWrap)

let currentStyle = ''
let delay = 60
let timer = null
const MAX_HEIGHT = $stylesWrap.height()

const goBottom = (top) => {
    $stylesWrap.scrollTop(top)
}

const showStyles = (num) => {
    let style = styles[num]
    let length
    let prevLength

    return new Promise((resolve, reject) => {
        if (!style) {
            return
        }

        length = styles.filter((item, i) => {
            return i <= num
        }).reduce((result, item) => {
            result += item.length
            return result
        }, 0)

        prevLength = length - style.length

        clearInterval(timer)
        timer = setInterval(() => {
            let start = currentStyle.length - prevLength
            let char = style.substring(start, start + 1) || ''
            currentStyle += char
            if (currentStyle.length === length) {
                clearInterval(timer)
                resolve()
            } else {
                let top = $stylePre.height() - MAX_HEIGHT
                if (top > 0) {
                    goBottom(top)
                }
                $style.html(currentStyle)
                $stylePre.html(Prism.highlight(currentStyle, Prism.languages.css))
            }
        }, delay)
    })
}

export default {
    showStyles
}
