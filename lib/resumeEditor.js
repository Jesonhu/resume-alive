/**
 * 动态将Markdown转换为html格式并不断添加进页面里
 */
import resumeMarkdown from './data/resume'
import $ from './vQuery'
import marked from 'marked'

let $resumeWrap = $('#app .resume-wrap') // 选择index.tpl.html节点
let resumeWrap = $resumeWrap.get(0)
let $resumeTag = $('.resume-tag', resumeWrap)
let $resumeMarkdown = $('.resume-markdown', resumeWrap)

let currentMarkdown = ''
let length = resumeMarkdown.length
let timer = null
let delay = 60
let start = 0
let iClass = 'htmlMode'

// Markdown 转换为 html格式
const markdownToHtml = (callback) => {
    $resumeMarkdown.css({
        display: 'none'
    })
    $resumeWrap.addClass(iClass)
    $resumeTag.html(marked(resumeMarkdown))
    callback && callback()
}

// 每隔60ms不断添加内容
const showResume (callback) => {
    timer = setInterval(function() {
        currentMarkdown += resumeMarkdown.substring(start, start+1)
        if (currentMarkdown.length === length) {
            clearInterval(timer)
            callback && callback()
        } else {
            $resumeMarkdown.html(currentMarkdown)
            start++
        }
    }, delay)
}

export default {
    showResume,
    markdownToHtml
}