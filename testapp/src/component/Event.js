import React from 'react'
import { TableCell, TableRow, Button } from '@mui/material'
import { DELETE_EVENT } from '../actions'

const Event = ({ event, dispatch }) => {
    const id = event.id
    const handleClickDelete = () => {
        const result = window.confirm(`ID${id}のイベントを削除しますか？`)
        if (result) dispatch({ type: DELETE_EVENT, id })
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