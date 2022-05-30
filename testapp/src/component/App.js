import React, { useReducer } from "react"
import { Container } from '@mui/material'

import EventForm from "./EventForm"
import Events from "./Events"
import OperationLogs from "./OperationLogs"
import reducer from '../reducers'
import AppContext from "../contexts/AppContext"

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

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
