import React, {useEffect, useState} from "react";

export const SearchPanel = (param, setParam) => {
    // filter options state
    const [users, setUsers] = useState([])


    return (
        <form>
            <input type="text" value={param.id}
                   onChange={event => setParam({
                       ...param,
                       id: event.target.value
            })}/>

            <select value={param.personId}
                    onChange={event => setParam({
                        ...param,
                        personId: event.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user => <option key={user.id} value="user.id">{user.name}</option>)
                }
            </select>
        </form>
    )
}