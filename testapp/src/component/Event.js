import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { TableCell, TableRow, Button } from '@mui/material'
import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions'
import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id
    const handleClickDelete = () => {
        const result = window.confirm(`ID${id}のイベントを削除しますか？`)
        if (result) {
            dispatch({ type: DELETE_EVENT, id })
            dispatch({ type: ADD_OPERATION_LOG, description: `ID${id}のイベントを削除しました。`, operatedAt: timeCurrentIso8601() })

        }
    }
    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{event.title}</TableCell>
            <TableCell>{event.body}</TableCell>
            <TableCell><Button variant="contained" color="error" onClick={handleClickDelete}>削除</Button></TableCell>
        </TableRow>
    )
}

export default Event