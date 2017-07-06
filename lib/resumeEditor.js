/**
 * 动态将Markdown转换为html格式并不断添加进页面里
 */
import resumeMarkdown from './data/resume' // markdown格式的数据
import $ from './vQuery' // 类似jQuery的选择器和dom操作
import marked from 'marked' // markdown转换为html的模块

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
const markdownToHtml = () => {
    return (callback) => {
        $resumeMarkdown.css({
            display: 'none'
        })
        $resumeWrap.addClass(iClass)
        $resumeTag.html(marked(resumeMarkdown))
        callback && callback()
    }
}

// 每隔60ms不断添加内容
const showResume = () => {
    return (callback) => {
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
}

export default {
    showResume,
    markdownToHtml
}