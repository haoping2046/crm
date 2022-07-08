import React, {useEffect, useState} from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import qs from 'qs';
import {cleanObject, useDebounce, useMount} from "../util/index"

export const ProjectListScreen = () => {
    // 输入框和下拉菜单的状态
    const [param, setParam] = useState({
        id: '',
        personId: ''
    })

    // filter options state
    const [users, setUsers] = useState([])

    // list state after using filter and input
    const[list, setList] = useState([])

    // useEffect(() => {
    //     // cleanObject 是定义在index.js里的，用来判断当输入框为空时，删除掉这个查询条件，返回全部数据
    //     // fetch(`${process.env.REACT_APP_API}/orders?${qs.stringify(cleanObject(param))}`)
    //     fetch(`${process.env.REACT_APP_API}/orders`)
    //         .then(async response => {
    //             if(response.ok) {
    //                 setList(await response.json())
    //             }
    //         })
    // }, [param])  // param变化，函数会被再次调用
    // 下面用debounced实现，连续输入只发送一次请求

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API}/users`)
    //         .then(async response => {
    //             if(response.ok) {
    //                 setUsers(await response.json())
    //             }
    //         })
    // }, [])  // 空数组，意思是只执行一次，相当于componentDidMount

    useMount(() => {
        fetch(`${process.env.REACT_APP_API}/users`)
            .then(async response => {
                if(response.ok) {
                    setUsers(await response.json())
                }
            })
    })  // 空数组，意思是只执行一次，相当于componentDidMount

    const debouncedParam = useDebounce(param, 2000)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/orders?${qs.stringify(cleanObject(debouncedParam))}`)
        // fetch(`${process.env.REACT_APP_API}/orders`)
            .then(async response => {
                if(response.ok) {
                    setList(await response.json())
                }
            })
    }, [debouncedParam])  // param变化，函数会被再次调用

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List users={users} list={list}/>
        </div>
    )
}