import React from "react";

// interface SearchPanelProps {
//     users: User[],
//         param: {
//         id: string;
//         personId: string
//     },
//     setParam:(param:SearchPanelProps['param']) => void;
// }

// export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
export const SearchPanel = ({users, param, setParam}) => {
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
                {/* user  里没有值 */}
                <option value={''}>负责人</option>
                {
                    users.map(user => <option key={user.id} value="user.id">{user.name}</option>)
                }
            </select>
        </form>
    )
}