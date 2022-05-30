import { ADD_OPERATION_LOG, DELETE_OPERATION_LOGS } from '../actions'

const operationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const operetionLog = { description: action.description, operation: action.operation }
            return [operetionLog, ...state]
        case DELETE_OPERATION_LOGS:
            return []
        default:
            return state
    }
}

export default operationLogs