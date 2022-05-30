import React, { useState, useContext } from 'react'
import { TextField, Button } from '@mui/material'
import { CREATE_EVENT, DELETE_ALL_EVENTS, ADD_OPERATION_LOG, DELETE_OPERATION_LOGS } from '../actions'
import { timeCurrentIso8601 } from '../utils'

import AppContext from '../contexts/AppContext'

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const addEvent = e => {
        e.preventDefault()
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })

        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'イベントを作成しました',
            operatedAt: timeCurrentIso8601()
        })

        setTitle('')
        setBody('')
    }
    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('全てのイベントを削除しますか？')
        if (result) {
            dispatch({ type: DELETE_ALL_EVENTS })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: '全てのイベントを削除しました',
                operatedAt: timeCurrentIso8601()
            })
        }
    }
    const unCreatable = title === '' || body === ''

    const deleteALLOprerationLogs = e => {
        e.preventDefault()
        const result = window.confirm('全ての操作ログを削除しますか？')
        if (result) {
            dispatch({ type: DELETE_OPERATION_LOGS })
        }
    }
    return (
        <>
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
                <Button variant="contained" onClick={addEvent} disabled={unCreatable}>イベントを作成する</Button>
                <Button variant="contained" color="error" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</Button>
                <Button variant="contained" color="error" onClick={deleteALLOprerationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</Button>
            </form>
        </>
    )
}

export default EventForm