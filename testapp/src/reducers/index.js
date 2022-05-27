import React from 'react'
import { combineReducers } from 'redux'
import events from './events'
import operetionLogs from './operetionLogs'

export default combineReducers({ events, operetionLogs })