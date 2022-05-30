import React, { useEffect, useReducer } from "react"
import { Container } from '@mui/material'

import EventForm from "./EventForm"
import Events from "./Events"
import OperationLogs from "./OperationLogs"
import reducer from '../reducers'
import AppContext from "../contexts/AppContext"

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Container>
        <EventForm />
        <Events />
        <OperationLogs />
      </Container>
    </AppContext.Provider>
  )
}
export default App
