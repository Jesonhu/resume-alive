// generator函数的异步流程处理

const genHandler = (generator) => {
    let gen = generator()
    let next = (data) => {
        let result = gen.next(data)
        
        if (!result.done) {
            result.value(next)
        }
    }
    next()
}

export default genHandler