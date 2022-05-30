import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import StyledTableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import OperationLog from './OperationLog'

const OperationLogs = () => {
    const { state } = useContext(AppContext)
    return (
        <div className='log_list'>
            <h2>操作ログ一覧</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>内容</StyledTableCell>
                            <StyledTableCell>日時</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.operationLogs.map((operationLogs, index) => (<OperationLog key={index} operationLogs={operationLogs} />))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default OperationLogs