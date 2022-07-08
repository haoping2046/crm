// 当value为0时，是个有效的数字，所以返回false。如果是非空值，求反后也是false。只有空值时求反才是true
import {useEffect, useState} from "react";

export const isFalsy = (value) => value === 0 ? false : !value
export const cleanObject = (object) => {
    // 不要直接修改object
    const result = {...object}
    Object.key(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}

// 抽象出useEffect 只加载一次的函数，必须得用use开头，这是React hook
export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

// debounce 用来在连续输入后只发送一次请求。把value转换成debouncedValue
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        // 每次在value变化后，设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay)

        // 清理上一次定时器的任务
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}