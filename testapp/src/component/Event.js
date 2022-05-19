import React from 'react'
import { TableCell, TableRow, Button } from '@mui/material'

const Event = ({ event, dispatch }) => {
    const id = event.id
    const handleClickDelete = () => {
        dispatch({
            type: 'DELETE_EVENT',
            id
        })
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