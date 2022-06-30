import React, {useEffect, useState} from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import qs from 'qs';
import {cleanObject} from "../util/index"

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        id: '',
        // name: '',
        personId: ''
    })

    // filter options state
    const [users, setUsers] = useState([])

    // list state after using filter and input
    const[list, setList] = useState([])

    useEffect(() => {
        // fetch(`${process.env.REACT_APP_API}/orders?${qs.stringify(cleanObject(param))}`)
        fetch(`${process.env.REACT_APP_API}/orders`)
            .then(async response => {
                if(response.ok) {
                    setList(await response.json())
                }
            })
    }, [param])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/users`)
            .then(async response => {
                if(response.ok) {
                    setUsers(await response.json())
                }
            })
    }, [])

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List users={users} list={list}/>
        </div>
    )
}