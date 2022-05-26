import React, { useContext } from 'react'
import Event from "./Event"
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import StyledTableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AppContext from '../contexts/AppContext'

const Events = () => {
    const { state } = useContext(AppContext)
    return (
        <div className="list_wrap">
            <h2>イベント一覧</h2>
            <div style={{ width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>タイトル</StyledTableCell>
                                <StyledTableCell>ボディー</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.map((event, index) => (<Event key={index} event={event} />))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Events