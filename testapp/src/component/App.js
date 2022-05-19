import React, { useReducer, useState } from "react"
import { Container, TextField, Button } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import StyledTableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import Event from "./Event"
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }
  return (
    <Container>
      <h1>イベント作成フォーム</h1>
      <form>
        <div className="input" style={{ margin: '20px 0' }}>
          <TextField id="standard-basic" label="タイトル" variant="standard" fullWidth value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="eria" style={{ margin: '20px 0' }}>
          <TextField
            placeholder="ボディー"
            multiline
            fullWidth
            value={body} onChange={e => setBody(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={addEvent}>イベントを作成する</Button>
        <Button variant="contained" color="error">全てのイベントを削除する</Button>
      </form>
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
                {state.map((event,index) => (<Event key={index} event={event} dispatch={dispatch} />))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Container>
  )
}
export default App
