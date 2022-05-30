import React from 'react'
import { TableCell, TableRow } from '@mui/material'

const operationLog = ({operationLogs}) => {
    return (
        <TableRow>
            <TableCell>{operationLogs.description}</TableCell>
            <TableCell>{operationLogs.operatedAt}</TableCell>
        </TableRow>
    )
}

export default operationLog