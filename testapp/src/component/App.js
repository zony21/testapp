import React, { useReducer } from "react"
import { Container } from '@mui/material'

import EventForm from "./EventForm"
import Events from "./Events"
import reducer from '../reducers'
import AppContext from "../contexts/AppContext"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'eroiyan'}>
      <Container>
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </Container>
    </AppContext.Provider>
  )
}
export default App
