import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

const EventForm = ({ state, dispatch }) => {
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
    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('全てのイベントを削除しますか？')
        if (result) dispatch({ type: 'DELETE_ALL_EVENTS' })
    }
    const unCreatable = title === '' || body === ''
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
                <Button variant="contained" color="error" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</Button>
            </form>
        </>
    )
}

export default EventForm